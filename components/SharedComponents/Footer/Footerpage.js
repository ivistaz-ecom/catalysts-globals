import React from "react"
import Image from "next/image"
const Contactus = () => {
  return (
    <>
    <div className="footer-contactus py-16 bg-[#E8E8EF]">
      <div className="container mx-auto lg:px-6">
        <h3 className="text-[36px]  text-center mb-8">Contact Us</h3>
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/3 p-4">
            <div className="footer-locations-single text-left bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/img/blr-office.jpg"
                alt="Bangalore Office"
                className="w-full h-48 object-cover rounded-lg mb-4"
                width={1000}
                height={1000}
              />
              <h5 className="text-xl font-medium mb-2">Bangalore</h5>
              <p className="text-gray-700 mb-4">
                No.25, AECS Layout, Ashwathnagar, Bengaluru - 560094, Karnataka
              </p>
              <a
                href="https://goo.gl/maps/SA4WkU1RBgkRcMnd8"
                className="text-black rounded-full bg-[#FFFFFF] px-5 py-3  underline border-black border "
                target="blank"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="footer-locations-single text-left bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/img/dellhi-office.jpg"
                alt="Delhi Office"
                className="w-full h-48 object-cover rounded-lg mb-4"
                width={1000}
                height={1000}
              />
              <h5 className="text-xl font-medium mb-2">Delhi</h5>
              <p className="text-gray-700 mb-4">
                Swasti Health Catalyst, A-10 (Second Floor), Green Park New
                Delhi-110016
              </p>
              <a
                href="https://goo.gl/maps/SeiB97CAc1vb267i8"
                className="text-black rounded-full bg-[#FFFFFF] px-5 py-3 underline border-black border "
                target="blank"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="footer-locations-single text-left bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/img/bhopal-office.jpg"
                alt="Bhopal Office"
                className="w-full h-48 object-cover rounded-lg mb-4"
                width={1000}
                height={1000}
              />
              <h5 className="text-xl font-medium mb-2">Bhopal</h5>
              <p className="text-gray-700 mb-4">
                E-2/244, First Floor, Arera Colony, Bhopal, Madhya Pradesh,
                462016
              </p>
              <a
                href="https://goo.gl/maps/SeiB97CAc1vb267i8"
                className="text-black rounded-full bg-[#FFFFFF] px-5 py-3 underline border-black border "
                target="blank"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </div>
     <p className="text-center bg-[#191D42] py-6 text-white text-[12px]">
     © 2024 Catalysts Foundation - All Rights Reserved | Terms & Conditions |
     Disclaimer
  
 </p>
 </>
  )
}

export default Contactus
