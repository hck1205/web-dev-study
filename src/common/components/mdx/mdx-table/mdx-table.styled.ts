import styled from "@emotion/styled";
import { color, font, radius, space } from "@/common/design-system";

// 모바일에서 표가 화면 밖으로 밀려나지 않도록 가로 스크롤 영역으로 감싼다.
export const Scroller = styled.div`
  margin: ${space[6]} 0;
  overflow-x: auto;
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  -webkit-overflow-scrolling: touch;

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: ${font.size.sm};
  }
  th,
  td {
    padding: ${space[3]} ${space[4]};
    border-bottom: 1px solid ${color.border};
    text-align: left;
    white-space: nowrap;
  }
  th {
    background: ${color.bgSubtle};
    font-weight: ${font.weight.semibold};
    color: ${color.textMuted};
  }
  tr:last-child td {
    border-bottom: 0;
  }
`;
