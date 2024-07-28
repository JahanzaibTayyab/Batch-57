import Link from "next/link";
import React from "react";
import { blogs } from "@/constants";

function BlogPage() {
  return (
    <div className="flex gap-5 py-10">
      {blogs.map((item, index) => (
        <Link key={item.id} href={`/blog/${item.id}`}>
          {item.title}
        </Link>
      ))}
      {/* 
      <Link href={"/blog/blog2"}>Blog 2</Link>
      <Link href={"/blog/blog3"}>Blog 3</Link>
      <Link href={"/blog/blog4"}>Blog 4</Link>
      <Link href={"/blog/blog5"}>Blog 5</Link>
      <Link href={"/blog/blog6"}>Blog 6</Link>
      <Link href={"/blog/blog7"}>Blog 7</Link>
      <Link href={"/blog/blog8"}>Blog 8</Link>
      <Link href={"/blog/blog9"}>Blog 9</Link>
      <Link href={"/blog/blog10"}>Blog 10</Link>
      <Link href={"/blog/blog11"}>Blog 11</Link> */}
    </div>
  );
}

export default BlogPage;
