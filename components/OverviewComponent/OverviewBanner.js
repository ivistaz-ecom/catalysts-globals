import Image from "next/image"
import Link from "next/link"
const OverviewBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[100vh] flex items-center justify-center text-center px-4 mb-16"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(226, 0, 91, 0.8) 0%, rgba(98, 47, 136, 0.8) 33%, rgba(0, 69, 52, 0.8) 66%, rgba(232, 170, 50, 0.8) 100%), url('/img/hands-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
      }}
    >
      <div className="md:max-w-7xl text-white">
        <h2 className="text-2xl md:text-8xl italic mt-10">THE CATALYST GROUP</h2>
        <p className="mt-4 mb-8 lg:leading-9 text-shadow-md lg:text-2xl">
          Complex societal issues need integrated and collaborative solutions.
          At Catalyst, we innovate, influence, design solutions, and support
          development actors to accelerate social impact and to scale and
          achieve significant impact.
        </p>
        <div className="w-full bg-white/75 py-6 px-4 shadow-lg rounded-lg">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://cms.org.in">
              <Image
                src="/img/Cms/CMS.png"
                alt="CMS Logo"
                width={100}
                height={100}
                className="w-32 h-24 object-contain"
              />
            </Link>
            <Link href="https://swastihc.org">
              <Image
                src="/img/Cms/swastilogored.png"
                alt="Swasti Logo"
                width={100}
                height={100}
                className="w-32 h-24 object-contain"
              />
            </Link>
            <Link href="https://vruttiimpactcatalysts.org/">
              <Image
                src="/img/Cms/vrutiblclogo.png"
                alt="Vrutti Logo"
                width={100}
                height={100}
                className="w-32 h-24 object-contain"
              />
            </Link>
            <Link href="https://fuzhio.org">
              <Image
                src="/img/Cms/Fuzhioi-logo-1.png"
                alt="Fuzhio Logo"
                width={100}
                height={100}
                className="w-32 h-24 object-contain"
              />
            </Link>
            <Link href="https://greenfoundation.in">
              <Image
                src="/img/Cms/Green_foundation_logo.png"
                alt="Greenfoundation Logo"
                width={100}
                height={100}
                className="w-32 h-24 object-contain"
              />
            </Link>
            <Link href="https://catalysts.global">
              <Image
                src="/img/Cms/cglogo-black.png"
                alt="Catalyst Global Logo"
                width={100}
                height={100}
                className="w-32 h-24 object-contain"
              />
            </Link>
            <Link href="https://upfront.global">
              <Image
                src="/img/Cms/Upfront-removebg-preview.png"
                alt="Upfront Logo"
                width={100}
                height={100}
                className="w-32 h-24 object-contain"
              />
            </Link>
            <Link href="/img/Cms/CAC-logo10-removebg-preview.png">
              <Image
                src="/img/Cms/collablogo-removebg-preview.png"
                alt="Community Logo"
                width={100}
                height={100}
                className="w-32 h-24 object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewBanner
