'use client'
import React from "react"
import HomeComponents from "../components/HomeComponents"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"
const Page = () => {
  const pathname = usePathname()
  const title = "Platform that promotes the health & wealth of the vulnerable"
  const description =
    "A social enterprise and development platform, Catalyst Group works towards promoting health and wealth of vulnerable communities"
  const path = `${pathname}`
  const metaImage = ""
  return (
    <div>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <HomeComponents />
    </div>
  )
}

export default Page
