import React from "react";
import Image from "next/image";
const Howbigarewe = () => {
  return (
    <section className="py-12 bg-white mx-auto container">
      <div className="text-center">
        <h2 className="text-4xl  text-gray-800 mb-4 px-4">How Big Are We?</h2>
        <p className="text-sm text-gray-600 max-w-3xl  mx-auto px-4 pt-5">
          Philosophically and strategically, Catalyst Group would like to stay
          small and make a big impact. We are not focused on our size, rather
          the size of our contributions. Therefore we prefer to measure and be
          measured on this count.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 text-center px-4">
        {/* Team Section */}
        <div>
          <div className="flex justify-center">
            <Image
              src="/img/icon-team.png"
              alt="Team Icon"
              className="h-16 w-16 mb-4"
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-xl font-medium text-gray-800">
            We are a 480+ strong team...
          </p>
        </div>

        {/* Head Office Section */}
        <div>
          <div className="flex justify-center">
            <Image
              src="/img/icon-city.png"
              alt="Head Office Icon"
              className="h-16 w-16 mb-4"
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-xl font-medium text-gray-800">
            ...with a Head Office in Bangalore...
          </p>
        </div>

        {/* Regional Offices Section */}
        <div>
          <div className="flex justify-center">
            <Image
              src="/img/icon-work.png"
              alt="Regional Offices Icon"
              className="h-16 w-16 mb-4"
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-xl font-medium text-gray-800">
            ...regional offices in Delhi, and Bhopal...
          </p>
        </div>

        {/* Partners Section */}
        <div>
          <div className="flex justify-center">
            <Image
              src="/img/icon-handshake.png"
              alt="Partners Icon"
              className="h-16 w-16 mb-4"
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-xl font-medium text-gray-800">
            ...with over 100+ partners across the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Howbigarewe;
