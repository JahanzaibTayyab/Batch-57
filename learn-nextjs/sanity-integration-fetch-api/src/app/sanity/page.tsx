import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import Image from "next/image";

type Person = {
  profile_image: {
    _type: string;
    asset: object; // Specify the exact type if known
  };
  _createdAt: string;
  _rev: string;
  _type: "person";
  CNIC: string;
  _id: string;
  age: number;
  Name: string;
  _updatedAt: string;
};

const getSanityData = async () => {
  return await client.fetch(`*[_type=="person"]`);
};
async function SanityData() {
  const data: Person[] = await getSanityData();
  console.log("🚀 ~ SanityData ~ data:", data);

  return (
    <div>
      {data.map((item) => (
        <div key={item._id}>
          <div>Name : {item.Name}</div>
          <div>CNIC : {item.CNIC}</div>
          <div>Age : {item.age}</div>
          <Image
            src={urlFor(item.profile_image).url()}
            alt={item.Name}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
}

export default SanityData;
