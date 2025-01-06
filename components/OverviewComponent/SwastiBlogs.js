import React from 'react'
import Image from "next/image";
import Link from "next/link";

const SwastiBlock = () => {
  return (
    <div className="mb-16 ">
      <div className='bg-[#004A8D] container mx-auto '>
      <div className="bg-swasti px-4 py-8">
      <div className="flex items-center justify-between gap-4">
          <div>
            <Image
              src="/img/swastilogored.png" 
              alt="Swasti Logo"
              width={100}
              height={100}
              className="w-32 h-16 object-contain pb-2"
               id="swasti"
              
            />
          </div>
          <div className="text-right">
            <Link
              href="https://swasti.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ED0C6E] text-white py-2 px-6 rounded"
            >
              Visit Site
            </Link>
          </div>
        </div>

        <div className="bg-white px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p>
                <Link
                  href="https://swasti.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  Swasti
                </Link>
                &nbsp;focuses on empowering people and communities, particularly the poor and marginalized, to make the right choices and lead healthy lives.
              </p>
              <p className="mt-4">
                We integrate the capacities of people and their institutions, thematic expertise, and cross-sectoral collaborations. We aim to make everyday well-being real for the most poor and marginalized communities.
              </p>
              <br />
              <h2 className="md:text-[32px] text-[22px] bg-[#FED8E4]  p-1 inline-block ">Est. 2002</h2>
              <br />
              <br />
              <h2 className="md:text-[32px] text-[22px] bg-[#FED8E4]  p-1 inline-block ">Direct Reach:</h2>
              <br /><br />
              <p>400,000+ poor and vulnerable people in India and 29 other countries</p>
            </div>
            <div>
              <Image
                src="/img/swastiposter.png" 
                alt="Swasti Poster"
                width={360}
                height={200}
                className=" mx-auto h-96 mb-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div>
              <Image
                src="/img/swasti-info.png" // Replace with the correct image path
                alt="Swasti Info"
                width={400}
                height={400}
              />
            </div>
            <div>
              <p className="mb-8">
                <strong>– Demonstrate: Making models that work for different communities</strong>
                <br />
                What is possible, at a minimum viable scale.
              </p>
              <p className="mb-8">
                <strong>– Take Evidence to Action: Support impact at scale</strong>
                <br />
                Work with local, regional, and global organizations to support the achievement of well-being, through implementation support, research, monitoring & evaluation, program design, etc.
              </p>
              <p>
                <strong>– Influence the Global Well-being Narrative:</strong>
                <br />
                Work closely with governments/partners within and outside of India, through collaborative action (joint implementation) and using evidence for communication, influence policies and their implementation related to primary care.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SwastiBlock;
