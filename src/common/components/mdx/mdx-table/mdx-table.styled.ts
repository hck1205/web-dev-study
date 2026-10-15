import styled from "@emotion/styled";

// 모바일에서 표가 화면 밖으로 밀려나지 않도록 가로 스크롤 영역으로 감싼다.
export const Scroller = styled.div`
  margin: 1.25rem 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  table {
    min-width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }
  th,
  td {
    padding: 0.5rem 0.75rem;
    border: 1px solid rgb(128 128 128 / 0.35);
    text-align: left;
    white-space: nowrap;
  }
  th {
    background: rgb(128 128 128 / 0.12);
  }
`;
