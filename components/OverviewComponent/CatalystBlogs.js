import Image from "next/image"
import Link from "next/link"
const CatalystBlock = () => {
  return (
    <div className="mb-16 ">
      <div className="bg-[#D7EEE8] px-4 py-8 container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div>
            <Image
              src="/img/cglogo-black.png"
              alt="Upfront Logo"
              width={100}
              height={100}
              className="w-32 h-16 object-contain "
              id="catalysts"
            />
             </div>
            {/* Button */}
            <div className="lg:mt-4">
            <Link
              href="https://catalysts.global"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#191D42] text-white px-4 py-2 rounded-md hover:bg-blue-800"
            >
              Visit Site
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <p className="text-gray-700 mb-4">
                A social enterprise platform that promotes the health and wealth
                of vulnerable communities. A treasure trove of experiences and
                stories of change and impact. Our strategy framework entails
                thought leadership, building synergy, and
              </p>
              <h2 className="md:text-[32px] text-[22px] bg-[#D4E2EC]  p-1 inline-block ">Estd. 2016</h2>
            </div>
            {/* Right Column */}
            <div className="flex justify-end">
              <Image
                src="/img/cat-poster.png" // Replace with the correct path for your Next.js public folder
                alt="CA Poster"
                width={1000}
                height={1000}
                className="h-auto w-3/4"
              />
            </div>
          </div>

          {/* Bottom Image */}
          <div className="mt-6 flex justify-center">
            <Image
              src="/img/CT-info.png" // Replace with the correct path for your Next.js public folder
              alt="Catalysts Info"
              width={1000}
              height={1000}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalystBlock
