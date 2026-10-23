"use client";

import { Button } from "@/common/design-system";
import { useProgressTools } from "./progress-tools";
import { HiddenInput, Message, Root } from "./progress-tools.styled";

/** 진행 상태 내보내기·가져오기·지우기 버튼 묶음 */
export function ProgressTools() {
  const tools = useProgressTools();

  return (
    <Root>
      <Button variant="secondary" onClick={tools.exportJson}>
        JSON으로 내보내기
      </Button>
      <Button variant="secondary" onClick={tools.pickFile}>
        JSON 가져오기
      </Button>
      <Button variant="ghost" onClick={tools.resetAll}>
        기록 지우기
      </Button>
      <HiddenInput ref={tools.fileRef} type="file" accept="application/json,.json" onChange={(event) => tools.importJson(event.target.files?.[0])} />
      {tools.message && <Message role="status">{tools.message}</Message>}
    </Root>
  );
}
