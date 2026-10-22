import styled from "@emotion/styled";
import { anim, color, font, radius, space } from "@/common/design-system";

export const Root = styled.div`
  display: grid;
  gap: ${space[3]};
`;

export const Prompt = styled.p`
  margin: 0;
  color: ${color.text};
  font-size: ${font.size.base};
  font-weight: ${font.weight.medium};
  line-height: ${font.leading.relaxed};
`;

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[1]} ${space[3]};
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: ${font.size.xs};

  a {
    color: ${color.textMuted};
  }
  a:hover {
    color: ${color.accent};
  }
  li[data-unread="true"] a {
    color: ${color.warning};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 6rem;
  padding: ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  background: ${color.bgSubtle};
  color: ${color.text};
  font: inherit;
  font-size: ${font.size.sm};
  line-height: ${font.leading.normal};
  resize: vertical;

  &:focus {
    outline: 2px solid ${color.accent};
    outline-offset: 1px;
  }
`;

export const Points = styled.ol`
  display: grid;
  gap: ${space[2]};
  margin: 0;
  padding-left: ${space[5]};
  color: ${color.text};
  font-size: ${font.size.sm};
  line-height: ${font.leading.normal};
  animation: ${anim.fadeUp} 300ms ${anim.easing.out} both;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  align-items: center;

  span {
    color: ${color.textSubtle};
    font-size: ${font.size.xs};
  }
`;
