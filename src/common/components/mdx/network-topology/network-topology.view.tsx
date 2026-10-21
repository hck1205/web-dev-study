"use client";

import { StepControls } from "../step-controls";
import { StepDetail } from "../step-detail";
import { VizFrame } from "../viz-frame";
import { useNetworkTopology } from "./network-topology";
import {
  Blocked,
  Flow,
  HopPath,
  Icon,
  Line,
  LinkLabel,
  NodeBox,
  NodeGroup,
  NodeLabel,
  NodeSub,
  Packet,
  PacketTag,
  PacketTagBox,
  Ripple,
  Svg,
  ZoneLabel,
  ZoneRect,
} from "./network-topology.styled";
import type { NetworkTopologyProps } from "./network-topology.type";
import { ICON_PATHS, NODE_H, nodeWidth } from "./network-topology.utils";

/**
 * 네트워크 구성도. 영역(VPC, 서브넷, 존)을 점선 상자로 감싸고 장비를 아이콘 노드로 놓는다.
 * steps가 있으면 단계마다 패킷이 경로를 따라 홉 단위로 이동하고, 막히면 마지막 노드에서 X로 멈춘다.
 */
export function NetworkTopology(props: NetworkTopologyProps) {
  const { zones = [], nodes, width = 400, height = 260, caption } = props;
  const { ref, inView, player, stepped, step, lines, hops, duration, activeIds, motion, last } = useNetworkTopology(props);
  const blocked = Boolean(step?.blocked);
  const hopMs = hops.length > 0 ? duration / hops.length : duration;
  const tagWidth = step?.packet ? step.packet.length * 5.6 + 10 : 0;

  return (
    <VizFrame caption={caption} captionAt={stepped ? "top" : "bottom"}>
      <div ref={ref}>
        <Svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={caption ?? "네트워크 구성도"}>
          {zones.map((zone) => {
            const active = activeIds.has(zone.id);
            const tone = zone.tone ?? "neutral";
            return (
              <g key={zone.id}>
                <ZoneRect x={zone.x} y={zone.y} width={zone.w} height={zone.h} rx={10} tone={tone} active={active} />
                <ZoneLabel x={zone.x + 8} y={zone.y + 13} tone={tone} active={active}>
                  {zone.label}
                </ZoneLabel>
              </g>
            );
          })}

          {lines.map(({ key, link, start, end, active }) => (
            <g key={key}>
              <Line dashed={link.dashed} dim={stepped && !active} d={`M${start.x},${start.y} L${end.x},${end.y}`} />
            </g>
          ))}

          {inView && (
            <g key={`hops-${player.index}`} pointerEvents="none">
              {hops.map((hop) => (
                <HopPath
                  key={hop.key}
                  d={hop.d}
                  pathLength={1}
                  blocked={blocked && hop.order === hops.length - 1}
                  style={{ ["--hop-ms" as string]: `${hopMs}ms`, ["--hop-delay" as string]: `${hop.order * hopMs}ms` }}
                />
              ))}
            </g>
          )}

          {/* 라벨은 강조 경로 위에 그려 선에 가리지 않게 한다 */}
          {lines.map(({ key, link, start, end }) =>
            link.label ? (
              <LinkLabel key={`label-${key}`} x={(start.x + end.x) / 2} y={(start.y + end.y) / 2}>
                {link.label}
              </LinkLabel>
            ) : null,
          )}

          {nodes.map((node) => {
            const w = nodeWidth(node);
            const active = activeIds.has(node.id);
            const dim = stepped && !active;
            const left = node.x - w / 2;
            const textX = node.icon ? left + 30 : node.x;
            const anchor = node.icon ? "start" : "middle";
            return (
              <NodeGroup key={node.id} active={active} dim={dim}>
                <NodeBox x={left} y={node.y - NODE_H / 2} width={w} height={NODE_H} rx={9} active={active} dim={dim} />
                {node.icon && (
                  <Icon
                    d={ICON_PATHS[node.icon]}
                    transform={`translate(${left + 9}, ${node.y - 8})`}
                    active={active}
                    dim={dim}
                  />
                )}
                <NodeLabel x={textX} y={node.sub ? node.y - 6 : node.y} textAnchor={anchor}>
                  {node.label}
                </NodeLabel>
                {node.sub && (
                  <NodeSub x={textX} y={node.y + 8} textAnchor={anchor}>
                    {node.sub}
                  </NodeSub>
                )}
              </NodeGroup>
            );
          })}

          {/* 정적인 그림: 연결선을 따라 점이 흐른다 (점선 연결은 관계만 나타내므로 제외) */}
          {!stepped &&
            inView &&
            lines.map(({ key, link, start, end }, index) =>
              link.dashed ? null : (
                <Flow
                  key={`flow-${key}`}
                  cx={start.x}
                  cy={start.y}
                  r={3.5}
                  style={{
                    ["--dx" as string]: `${end.x - start.x}px`,
                    ["--dy" as string]: `${end.y - start.y}px`,
                    animationDelay: `${(index * 400) % 2400}ms`,
                  }}
                />
              ),
            )}

          {stepped && inView && hops.length > 0 && (
            <g pointerEvents="none">
              {motion.arrived && last && !blocked && <Ripple key={`ripple-${player.index}`} cx={last.x} cy={last.y} r={12} />}
              {motion.arrived && last && blocked && (
                <Blocked key={`blocked-${player.index}`}>
                  <circle cx={last.x} cy={last.y - NODE_H / 2 - 2} r={9} />
                  <path d={`M${last.x - 3.5},${last.y - NODE_H / 2 - 5.5} l7,7 M${last.x + 3.5},${last.y - NODE_H / 2 - 5.5} l-7,7`} />
                </Blocked>
              )}
              {/* 도착하면 패킷은 사라지고 물결만 남는다 (노드 이름을 가리지 않게) */}
              {!motion.arrived && (
                <g transform={`translate(${motion.position.x}, ${motion.position.y})`}>
                  <Packet cx={0} cy={0} r={5.5} blocked={blocked} />
                  {step?.packet && (
                    <>
                      <PacketTagBox x={-tagWidth / 2} y={-22} width={tagWidth} height={13} rx={6.5} blocked={blocked} />
                      <PacketTag x={0} y={-15.5}>
                        {step.packet}
                      </PacketTag>
                    </>
                  )}
                </g>
              )}
            </g>
          )}
        </Svg>
      </div>

      {step && (
        <>
          <StepDetail index={player.index} title={step.title} detail={step.detail}>
            {step.payload && (
              <pre>
                <code>{step.payload}</code>
              </pre>
            )}
          </StepDetail>
          <StepControls player={player} />
        </>
      )}
    </VizFrame>
  );
}
