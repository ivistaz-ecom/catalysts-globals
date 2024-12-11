"use client";
import React from "react";
import PartnersComponents from "@/components/PartnersComponents";
import Seo from "@/components/SeoComponents/Seo";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  const title = "Partners that share our vision and passion";
  const description =
    "Our partners, who share our vision and passion, play a huge role in supporting us in every possible way to ensure we enhance the lives of vulnerable communities.";
  const path = `${pathname}`;
  const metaImage = "";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <PartnersComponents />
    </>
  );
};

export default Page;
