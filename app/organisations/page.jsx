"use client"
import React from "react"
import OrganisationsComponents from "@/components/OrganisationsComponents/"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"
const Page = () => {
  const pathname = usePathname()
  const title = "Dedicated to enhancing the lives of the vulnerable"
  const description =
    "Learn more about the Catalyst Group of Organisations and how each brand is dedicated to the betterment of the society and in enhancing the lives of vulnerable communities."
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
      <OrganisationsComponents />
    </div>
  )
}

export default Page
