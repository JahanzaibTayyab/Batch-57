import React from "react";
import { blogs } from "@/constants";

type BlogDetailPageProps = {
  params: {
    id: string;
  };
};

const findBlogDetail = (id: number) => {
  console.log("🚀 ~ findBlogDetail ~ id:", id);
  const blog = blogs.find((item) => {
    return item.id === id;
  });

  return blog;
};

function BlogDetail({ params }: BlogDetailPageProps) {
  console.log("🚀 ~ BlogDetail ~ params:", params.id);
  const blog = findBlogDetail(Number(params.id));
  console.log("🚀 ~ BlogDetail ~ blog:", blog);

  return (
    <div>
      Blog Detail
      <div className="py-5">
        <h1 className="font-bold">{blog?.title}</h1>
        <p>{blog?.content}</p>
        <p className="font-semibold">Author: {blog?.author}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
