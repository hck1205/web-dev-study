import Link from "next/link";

const sections = [
  { title: "Web", desc: "브라우저, 렌더링, React/Next.js" },
  { title: "Network", desc: "HTTP, TCP/IP, DNS, 캐시, 보안" },
  { title: "Infra", desc: "Docker, CI/CD, 배포, 관측성" },
  { title: "Algorithms", desc: "문제 풀이와 해설", href: "/algorithms/two-sum" },
  { title: "CS", desc: "OS, 자료구조, DB, 시스템 디자인" },
];

export default function HomePage() {
  return (
    <>
      <h1>web-dev-study</h1>
      <p>웹 애플리케이션 개발, 네트워크, 서버 인프라, 알고리즘 등 CS 전반을 공부하는 공간입니다.</p>
      <ul>
        {sections.map((s) => (
          <li key={s.title}>
            {s.href ? <Link href={s.href}>{s.title}</Link> : <strong>{s.title}</strong>} — {s.desc}
          </li>
        ))}
      </ul>
    </>
  );
}
