import React from "react"
import Image from "next/image"
import Link from "next/link"
const Organisations = () => {
  return (
    <div>
      <h1 className="text-[36px] text-center p-10 pt-36">Our Organisations</h1>
      <div className="flex flex-col md:flex-row items-stretch h-auto mt-[0.5px]">
        {/* Left Column - Logo */}
        <div className="w-full md:w-1/4 flex justify-center items-center bg-[#622F88] p-8">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/img/cms copy.png"
              alt="Logo"
              className="object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* Middle Column - Text */}
        <div className="w-full md:w-1/2 p-8 text-gray-700 bg-[#F7F5F9] flex flex-col justify-center">
          <h2 className="text-2xl ">
            Catalyst Management Services <br />
          </h2>
          <p className="text-xl ">(established in 1994)</p>
          <p className=" mt-4 text-[14px]">
            A private limited organisation which specializes in providing
            consulting and professional services. CMS partners to create social
            impact, guaranteeing results through development solutions and
            investments. The organisation commits to sustainable development
            that leads to investments in ideas, individuals and institutions,
            creating shared value and maximizing social returns.
          </p>
          <p className=" mt-4 text-[14px]">
            CMS solutions range from Design (strategy and planning), Evidence
            (research, evaluation and insights), Monitoring (systems,
            accountability and performance), Learning systems (accretion and
            application).
          </p>
          <Link
            href="https://cms.org.in/"
            className="inline-block mt-6 px-4 py-2 md:w-1/4 w-1/2  text-center border border-black text-[#191D42] rounded-full underline"
            target="_blank"
          >
            Visit Website
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/4 bg-gray-200">
          <Image
            src="/img/cms-image.jpg"
            alt="Person working in field"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* 2nd Row */}
      <div className="flex flex-col md:flex-row items-stretch h-auto mt-[0.5px]">
        {/* Left Column - Logo */}
        <div className="w-full md:w-1/4  flex justify-center items-center bg-gradient-to-r from-[#ae2e6c] via-[#2d356a]  to-[#8a7a2a] ">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/img/cat1.png"
              alt="Logo"
              className="object-cover p-16"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* Middle Column - Text */}
        <div className="w-full md:w-1/2 p-8 text-gray-700 bg-[#F7F5F9] flex flex-col justify-center ">
          <h3 className="text-2xl ">Impact Catalyst Foundation (ICF)</h3>
          <p className="text-xl ">(established in 1994)</p>
          <p className=" mt-4 text-[14px]">
            is a US public charity that is part of the Catalyst Group of
            organisations, headquartered in India. The Catalyst Group was
            founded in 1994 and is a social enterprise platform focused on the
            promotion of the health and wealth of vulnerable communities. Our
            work has spanned over 25 countries across Asia and Africa in
            multiple domains, including health, livelihood, and climate change.
          </p>

          <Link
            href="https://catalysts.global/impact-catalyst-foundation-icf"
            className="inline-block mt-6 px-4 py-2 md:w-1/4 w-1/2  text-center border border-black text-[#191D42] rounded-full underline"
            target="_blank"
          >
            Visit Website
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/4 bg-gray-200">
          <Image
            src="/img/build_synergies.png"
            alt="Person working in field"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* 3rd row */}
      <div className="flex flex-col md:flex-row items-stretch h-auto mt-[0.5px]">
        {/* Left Column - Logo */}
        <div className="w-full md:w-1/4 flex justify-center items-center bg-[#E2005A] p-8">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/img/swasti-logo-1.png"
              alt="Logo"
              className="object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* Middle Column - Text */}
        <div className="w-full md:w-1/2 p-8 text-gray-700 bg-[#F7F5F9] flex flex-col justify-center ">
          <h3 className="text-2xl ">Swasti</h3>
          <p className="text-xl ">(established in 2004)</p>
          <p className=" mt-4 text-[14px]">
            A registered Society (not-for-profit), Swasti – The Health Catalyst
            – is a health resource centre.Which achieves public health outcomes
            for the marginalised, through the delivery of end-to-end solutions
            as well as short and long term support and facilitation, combining
            research and practice.
          </p>
          <p className=" mt-4 text-[14px]">
            Swasti – The Health Catalyst – was envisioned as an organisation to
            transform the lives of the marginalised communities by ensuring
            their access to quality healthcare. Swasti&apos;s work has fuelled
            impact by promoting healthcare access thereby contributing to
            poverty alleviation. Swasti have supported governments, donors and
            development partners to design solutions in public health. Swasti
            has directly reached over 400,000 people through our various
            initiatives.
          </p>

          <Link
            href="https://swasti.org/"
            className="inline-block mt-6 px-4 py-2 md:w-1/4 w-1/2  text-center border border-black text-[#191D42] rounded-full underline"
            target="_blank"
          >
            Visit Website
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/4 bg-gray-200">
          <Image
            src="/img/swasti-img.jpg"
            alt="Person working in field"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* 4th row */}
      <div className="flex flex-col md:flex-row items-stretch h-auto mt-[0.5px]">
        {/* Left Column - Logo */}
        <div className="w-full md:w-1/4 flex justify-center items-center bg-[#004534] p-8">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/img/vrutti-logo-1-1.png"
              alt="Logo"
              className="object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* Middle Column - Text */}
        <div className="w-full md:w-1/2 p-8 text-gray-700 bg-[#F7F5F9] flex flex-col justify-center ">
          <h3 className="text-2xl ">Vrutti</h3>
          <p className="text-xl ">(established in 2002)</p>
          <p className=" mt-4 text-[14px]">
            A registered Society (not-for-profit), Vrutti is a Livelihood Impact
            Partner which enhances people&apos;s well-being through knowledge,
            innovation and transformative actions and brings about solutions at
            a scale that eliminate inequities and create wealth for the
            marginalised. Vrutti is committed to finding solutions to end
            poverty, marginalisation and creation of wealth and build resilience
            for small producers. As social organisation, Vrutti pursues problem
            solving with entrepreneurial zeal, business acumen, courage to
            innovate, and consistently challenge traditional practices. Vrutti
            is passionate about unbiased measurement, self-critique and
            learning. Vrutti works through result-based planning tools,
            performance measurement metrics, impact and value for money
            assessments and use technology as augmenter.
          </p>

          <Link
            href="https://vruttiimpactcatalysts.org/"
            className="inline-block mt-6 px-4 py-2 md:w-1/4 w-1/2  text-center border border-black text-[#191D42] rounded-full underline"
            target="_blank"
          >
            Visit Website
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/4 bg-gray-200">
          <Image
            src="/img/vrutti-img.jpg"
            alt="Person working in field"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* 5th row */}
      <div className="flex flex-col md:flex-row items-stretch h-auto mt-[0.5px]">
        {/* Left Column - Logo */}
        <div className="w-full md:w-1/4 flex justify-center items-center bg-[#FAFAFA] p-8">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/img/Fuzhioi-logo-1.png"
              alt="Logo"
              className="object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* Middle Column - Text */}
        <div className="w-full md:w-1/2 p-8 text-gray-700 bg-[#F7F5F9] flex flex-col justify-center ">
          <h3 className="text-2xl ">Fuzhio</h3>
          <p className="text-xl ">(established in 2005)</p>
          <p className=" mt-4 text-[14px]">
            Facilitating Market Access to Women and Smallholder Farmers and
            Marginalised Communities to Maximise Returns for their Products and
            Services. Fuzhio promotes Impact Products directly to customers on
            behalf of small farmers and vulnerable groups and allows them to
            maximize yields and provide customers with safe, responsible
            products.
          </p>

          <Link
            href="https://fuzhio.org/"
            className="inline-block mt-6 px-4 py-2 md:w-1/4 w-1/2  text-center border border-black text-[#191D42] rounded-full underline"
            target="_blank"
          >
            Visit Website
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/4 bg-gray-200">
          <Image
            src="/img/fuzhio-img.jpg"
            alt="Person working in field"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* 6th row */}
      <div className="flex flex-col md:flex-row items-stretch h-auto mt-[0.5px]">
        {/* Left Column - Logo */}
        <div className="w-full md:w-1/4 flex justify-center items-center bg-[#FFFFFF] p-8">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/img/GREEN-FOUNDATION-LOGO.png"
              alt="Logo"
              className="object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* Middle Column - Text */}
        <div className="w-full md:w-1/2 p-8 text-gray-700 bg-[#F7F5F9] flex flex-col justify-center ">
          <h3 className="text-2xl ">Green Foundation</h3>
          <p className="text-xl ">(established in 1994)</p>
          <p className=" mt-4 text-[14px]">
            GREEN Foundation works toward a well-preserved, diverse ecosystem
            that will sustain the rural livelihoods of the present generation
            without eroding the resource base of the future. Our work to empower
            the small-scale and marginal farmers of India first began in 1994
            with a simple effort to distribute indigenous seed varieties in and
            around the village of Thalli, Tamil Nadu. This soon turned into a
            growing biodiversity conservation program that has been central to
            our work ever since.
          </p>

          <Link
            href="https://greenfoundation.in/"
            className="inline-block mt-6 px-4 py-2 md:w-1/4 w-1/2  text-center border border-black text-[#191D42] rounded-full underline"
            target="_blank"
          >
            Visit Website
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/4 bg-gray-200">
          <Image
            src="/img/Feature-Image-1.png"
            alt="Person working in field"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* 7th row */}
      <div className="flex flex-col md:flex-row items-stretch h-auto mt-[0.5px]">
        {/* Left Column - Logo */}
        <div className="w-full md:w-1/4 flex justify-center items-center bg-[#000000] p-8">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/img/logo-1.png"
              alt="Logo"
              className="object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* Middle Column - Text */}
        <div className="w-full md:w-1/2 p-8 text-gray-700 bg-[#F7F5F9] flex flex-col justify-center ">
          <h2 className="text-2xl ">Upfront</h2>
          <p className="text-xl ">(established in 2022)</p>
          <p className=" mt-4 text-[14px]">
            Upfront works with front line workers and the “systems” by changing
            mindsets, behaviours and practices; improving skills, financial
            security, processes and services; building agency, ensuring voices
            and choices; and establishing partnerships and collaborations.
          </p>
          <p className=" mt-4 text-[14px]">
            Creating a positive impact on the workers&apos; ecosystem by
            leveraging a systems change approach while ensuring knowledge,
            skills (personal and professional), and services (health and wealth)
            through a platform approach that aggregates solutions and providers.
          </p>

          <Link
            href="https://upfront.global/"
            className="inline-block mt-6 px-4 py-2 md:w-1/4 w-1/2  text-center border border-black text-[#191D42] rounded-full underline"
            target="_blank"
          >
            Visit Website
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/4 bg-gray-200">
          <Image
            src="/img/Feature-Image.png"
            alt="Person working in field"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  )
}

export default Organisations
