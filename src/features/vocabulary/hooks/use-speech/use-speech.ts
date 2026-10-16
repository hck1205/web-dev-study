"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * 브라우저 내장 음성 합성(Web Speech API)으로 영어를 읽어 준다. 서버나 키가 필요 없다.
 * 지원하지 않는 브라우저에서는 supported가 false라 버튼을 숨긴다.
 */
export function useSpeech() {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  const speak = useCallback((text: string, rate = 0.9) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    const voice = window.speechSynthesis.getVoices().find((v) => v.lang === "en-US");
    if (voice) utterance.voice = voice;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  return { supported, speaking, speak };
}
