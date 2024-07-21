import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href="/blog">Blog</Link>
      <Link href={"/dashboard/settings"}>Settings</Link>
      <a href="/dashboard/analytics">Analytics</a>
      <Link href={"/name"}>Client Component</Link>
      <div>
        {`<a> tag (Anchor tag) is used to direct you to another
      site. If the target is unpecified it uses the same tab
      and if you specifie "_black" it opens a new tab`}
        <a
          href="https://github.com/panaverse/learn-nextjs/tree/main"
          target="_blank"
        >
          Panaverse NextJs Link
        </a>
      </div>
      <Link
        href={
          "https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating"
        }
        className="font-bold"
        target="_blank"
      >
        Next Js Official DOc
      </Link>
    </main>
  );
}
