"use client";

import { Fragment } from "react";
import { VizFrame } from "../viz-frame";
import { useUrlAnatomy } from "./url-anatomy";
import { Base, Chip, Detail, Hint, Line, Required, Sep } from "./url-anatomy.styled";
import type { UrlAnatomyProps } from "./url-anatomy.type";
import { chipText } from "./url-anatomy.utils";

/** 긴 URL·헤더·토큰을 조각으로 나눠 보여주고, 눌러본 조각이 무슨 뜻인지 설명한다. */
export function UrlAnatomy(props: UrlAnatomyProps) {
  const { base, params, caption, separator = "?", joiner = "&" } = props;
  const { ref, intro, selected, select, param } = useUrlAnatomy(props);

  return (
    <VizFrame caption={caption}>
      <Line ref={ref}>
        {base && <Base>{base}</Base>}
        {base && separator && <Sep>{separator}</Sep>}
        {params.map((item, index) => (
          <Fragment key={item.key}>
            {index > 0 && joiner && <Sep>{joiner}</Sep>}
            <Chip
              type="button"
              active={index === selected}
              intro={intro}
              order={index}
              aria-pressed={index === selected}
              onClick={() => select(index)}
            >
              {chipText(item)}
            </Chip>
          </Fragment>
        ))}
      </Line>
      <Hint>조각을 눌러보세요.</Hint>
      <Detail key={selected} aria-live="polite">
        <h4>
          <code>{param.key}</code> · {param.title}
          {param.required && <Required>필수</Required>}
        </h4>
        <p>{param.description}</p>
        {param.code && (
          <pre>
            <code>{param.code}</code>
          </pre>
        )}
      </Detail>
    </VizFrame>
  );
}
