"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const currentYear = new Date().getFullYear();

const Contactus = () => {
  const pathname = usePathname();

  // Hide the footer on the "/overview" page
  if (pathname === "/overview") {
    return null;
  }

  return (
    <>
      <div className="footer-contactus py-12 bg-[#E8E8EF]">
        <div className="container mx-auto lg:px-2">
          <h3 className="text-[36px] text-center mb-8">Contact Us</h3>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="footer-locations-single text-left">
                <Image
                  src="/img/blr-office.jpg"
                  alt="Bangalore Office"
                  className="w-full h-48 object-cover pt-2"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="pt-6">
                <h5 className="text-[24px] font-medium mb-3">Bangalore</h5>
                <p className="text-gray-700 mb-4">
                  No.25, AECS Layout, Ashwathnagar, Bengaluru - 560094,
                  Karnataka
                </p>
                <Link
                  href="https://goo.gl/maps/SA4WkU1RBgkRcMnd8"
                  className="text-black rounded-full bg-[#FFFFFF] px-5 py-3 border-black border"
                  target="_blank"
                >
                  Get Directions
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="footer-locations-single text-left">
                <Image
                  src="/img/dellhi-office.jpg"
                  alt="Delhi Office"
                  className="w-full h-48 object-cover pt-2"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="pt-6">
                <h5 className="text-[24px] font-medium mb-3">Delhi</h5>
                <p className="text-gray-700 mb-4">
                  C-23, Ground Floor, Safdarjung Development Area, New Delhi-110016
                </p>
                <Link
                  href="https://maps.app.goo.gl/ie6SvcnNAYprCfVeA?g_st=com.google.maps.preview.copy"
                  className="text-black rounded-full bg-[#FFFFFF] px-5 py-3 border-black border"
                  target="_blank"
                >
                  Get Directions
                </Link>
              </div>
            </div>
            {/* <div className="w-full md:w-1/3 p-4">
              <div className="footer-locations-single text-left">
                <Image
                  src="/img/bhopal-office.jpg"
                  alt="Bhopal Office"
                  className="w-full h-48 object-cover pt-2"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="pt-6">
                <h5 className="text-[24px] font-medium mb-3">Bhopal</h5>
                <p className="text-gray-700 mb-4">
                  E-2/244, First Floor, Arera Colony, Bhopal, Madhya Pradesh,
                  462016
                </p>
                <Link
                  href="https://goo.gl/maps/SeiB97CAc1vb267i8"
                  className="text-black rounded-full bg-[#FFFFFF] px-5 py-3 border-black border"
                  target="_blank"
                >
                  Get Directions
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="text-center bg-[#191D42] py-6 px-4 lg:px-1">
        <p className="text-white text-[12px]">
          © {currentYear} Catalysts Foundation - All Rights Reserved | Terms &
          Conditions | Disclaimer
        </p>
      </div>
    </>
  );
};

export default Contactus;
