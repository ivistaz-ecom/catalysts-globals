import React from "react";

const WhatWeDo = () => {
  return (
    <section className="py-12 bg-white">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl  text-gray-800">What we do</h2>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto px-4 container ">
        {/* Column 1 */}
        <div className="text-center">
          <h3 className="text-2xl  text-gray-800 mb-4">
            Thought leadership
          </h3>
          <p className="text-gray-600">
            As thought leaders we build knowledge and perspectives, and
            generate learning. Our multi- and cross-disciplinary experience
            affords us the ability to draw, process and share insights across
            themes and sectors, enriching solutions through diverse lenses.
          </p>
        </div>

        {/* Column 2 */}
        <div className="text-center">
          <h3 className="text-2xl  text-gray-800 mb-4">
            Build synergies
          </h3>
          <p className="text-gray-600">
            We understand that transformation and scale is not possible without
            partnerships and collaborations. We bridge worlds of the
            communities, practitioners, thinkers and investors; and of program
            and policy; bringing these together for scale and sustainability.
          </p>
        </div>

        {/* Column 3 */}
        <div className="text-center">
          <h3 className="text-2xl  text-gray-800 mb-4">
            Catalyse action
          </h3>
          <p className="text-gray-600">
            Ethics, integrity and execution excellence are the pathways towards
            action that demonstrates quality and dignity for communities. We
            provide mechanisms to partners in the social sector to remain firmly
            on these pathways.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
