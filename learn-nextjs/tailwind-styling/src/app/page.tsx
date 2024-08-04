import Image from "next/image";
import Sidebar from "@/views/Sidebar";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <div>
      <h5 className="text-primary text-violet-100">Primary color</h5>
      Tailwind Styling
      {/* Styling not applied if the directory is not added in content in tailwind.config.ts */}
      <Sidebar />
      <br />
      {/* Component styling with Tailwind */}
      <Heading />
      <br />
      <h1 className="text-sky-800 text-5xl">
        Inline styling with tailwind css
      </h1>
      <br />
      <br />
      <h2>External Styling using tag</h2>
      <p className="gradient para text-xl p-5 text-red-300">
        🍔 Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <br />
      <p className="gradient text-xl bg-clip-text text-transparent p-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <a className="hover:underline">Click me</a>
    </div>
  );
}
