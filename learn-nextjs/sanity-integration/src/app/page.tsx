import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type BlogType = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

const getData = async () => {
  const result = await client.fetch(`*[_type=="blogs"]`);
  console.log(result);
  return result;
};

export default async function Home() {
  const blogs = await getData();
  return (
    <div className="text-blue-950">
      <h1 className="font-bold text-3xl">List Blogs</h1>
      <div className="flex gap-4 m-6">
        {blogs.map((blog: BlogType) => (
          <div key={blog._id} className="flex flex-col gap-y-4">
            <h3 className="text-2xl">{blog.title}</h3>
            <p>{blog.description}</p>
            <Image
              src={urlFor(blog.image).url()}
              height={400}
              width={400}
              alt="img-blog"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
