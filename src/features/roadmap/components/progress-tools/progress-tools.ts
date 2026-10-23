"use client";

import { useRef, useState } from "react";
import { localDate, parseProgress, useGetStudyProgress, useResetStudyProgress, useSetStudyProgress } from "../../atoms/study-progress";

/** 진행 상태를 JSON 파일로 내보내고 가져온다. 로그인이 없으니 기기를 옮길 때 이걸 쓴다 */
export function useProgressTools() {
  const progress = useGetStudyProgress();
  const setProgress = useSetStudyProgress();
  const reset = useResetStudyProgress();
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `study-progress-${localDate()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setMessage("JSON 파일로 내보냈다.");
  };

  const importJson = async (file: File | undefined) => {
    if (!file) return;
    const parsed = parseProgress(await file.text());
    if (!parsed) {
      setMessage("이 사이트에서 내보낸 진행 파일이 아니다.");
      return;
    }
    setProgress(parsed);
    setMessage(`${Object.keys(parsed.posts).length}편의 진행 상태를 가져왔다.`);
  };

  const resetAll = () => {
    if (!window.confirm("이 브라우저의 학습 기록을 모두 지울까? 먼저 내보내 두는 걸 권한다.")) return;
    reset();
    setMessage("학습 기록을 지웠다.");
  };

  return {
    fileRef,
    message,
    studied: Object.keys(progress.posts).length,
    exportJson,
    pickFile: () => fileRef.current?.click(),
    importJson,
    resetAll,
  };
}
