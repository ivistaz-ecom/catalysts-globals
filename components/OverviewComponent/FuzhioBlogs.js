import React from 'react'
import Image from "next/image";
import Link from "next/link";

const FuzhioBlock = () => {
  return (
    <div className="mb-16">
       <div className='bg-[#BAD46F] container mx-auto '>
      <div className="bg-fuzhio px-4 py-8">
      <div className="flex items-center justify-between gap-4">
          <div>
            <Image
              src="/img/Fuzhioi-logo-1.png" 
              alt="Fuzhio Logo"
              width={100}
              height={100}
              className="w-32 h-16 object-contain "
              id="fuzhio"
            />
          </div>
          <div className="text-right">
            <Link
              href="https://fuzhio.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-800 text-white py-2 px-6 rounded"
            >
              Visit Site
            </Link>
          </div>
        </div>

        <div className="bg-white px-4 py-8 mt-8">
        <h2 className="md:text-[32px] text-[22px] bg-[#BAD46F]  p-1 inline-block ">Impact Product Marketing Firm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <p className="pt-5">
                <Link
                  href="https://fuzhio.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  Fuzhio
                </Link>
                deals with ‘Impact Products’ for the people, planet, and prosperity.
                We facilitate market access to women and small-holder farmers and marginalized communities to maximize returns for their products and services; and engage in an eco-social circular economy initiative focused on plastic repurposing, recycling, and community empowerment.
              </p>
              <br />
              <h2 className="md:text-[32px] text-[22px] bg-[#BAD46F]  p-1 inline-block ">Est. 2005</h2>
              <br />
              <br />
              <h2 className="md:text-[32px] text-[22px] bg-[#BAD46F]  p-1 inline-block ">Impacts:</h2>
              <ul className="list-disc pl-5">
                <li>30 Farmer Producer Organizations</li>
                <li>1 brand for hanger recycling</li>
                <li>Sale of products: Over 50 products</li>
              </ul>
              <br />
              <h2 className="md:text-[32px] text-[22px] bg-[#BAD46F]  p-1 inline-block ">Agriculture Products:</h2>
              <ul className="list-disc pl-5">
                <li>Increasing the value realized by producers</li>
                <li>Farm advisory and Financing, Product design, Peer group formation</li>
                <li>Institutional development, Product aggregation, Financing</li>
                <li>FPOs/EG based processing units, business planning, and financing</li>
                <li>Market research, Strategy, Testing, and Customer Relationship Management</li>
              </ul>
            </div>
            <div>
              <Image
                src="/img/fuzhioimg.png" // Replace with the correct image path
                alt="Fuzhio Info"
                width={500}
                height={400}
                className="w-[800] h-[700px] lg:mt-[-40px]"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FuzhioBlock;
