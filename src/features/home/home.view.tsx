import Link from "next/link";
import { useHome } from "./home";

export function Home() {
  const { sections } = useHome();

  return (
    <>
      <h1>web-dev-study</h1>
      <p>웹 애플리케이션 개발, 네트워크, 서버 인프라, 알고리즘 등 CS 전반을 공부하는 공간입니다.</p>
      <ul>
        {sections.map((section) => (
          <li key={section.title}>
            {section.href ? <Link href={section.href}>{section.title}</Link> : <strong>{section.title}</strong>} —{" "}
            {section.desc}
          </li>
        ))}
      </ul>
    </>
  );
}
