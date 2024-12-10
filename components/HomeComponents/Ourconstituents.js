import React from "react"


const Ourconstituents = () => {
  return (
    <div className="pt-10 bg-[#F3F3F5] pb-10 ">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-4xl  text-gray-800 mb-4">
            Our Constituents
          </h3>
          </div>
          <div>
          <p className="text-lg text-gray-600  mx-auto mb-6 pt-5">
            Our constituents are the practitioners, thinkers and investors who
            are vested in social development, are aligned to our vision and
            strategy and subscribe to the same values, beliefs and standards
            that we stand for.
          </p>
          <p className="text-lg text-gray-600  mx-auto mb-8">
            These constituents as individuals or institutions are our partners.
            We define partnerships through a variety of formal and informal
            engagement mechanisms. We are vested in working with partners,
            irrespective of the formality of engagement, and supporting them to
            move towards their results. Partnership forms include:
          </p>
        </div>
    

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[14px]">
          {/* Card 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg h-36">
            <p className="text-gray-700">
              Institutions founded and managed by the CF Trustees, referred to
              as the Catalyst Group, having formal Memorandum of Association
              agreements.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg h-36">
            <p className="text-gray-700">
              Institutions integrated, merged into the Catalyst Group entities
              or managed by the CF Trustees.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg h-36">
            <p className="text-gray-700">
              Institutions co-created with other partners where the governance
              and management is legally represented by a Catalyst Group entity.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white shadow-lg rounded-lg h-36">
            <p className="text-gray-700">
              Institutions co-created or co-driven, where governance and
              management is trust led.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 bg-white shadow-lg rounded-lg h-36">
            <p className="text-gray-700">
              Build, Operate and Transfer mechanisms where only management, and
              not governance is represented by a Catalyst Group entity.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 bg-white shadow-lg rounded-lg h-36">
            <p className="text-gray-700">
              Long-term, formal or trust-based support to institutions or
              initiatives.
            </p>
          </div>

          {/* Card 7 */}
          <div className="p-6 bg-white shadow-lg rounded-lg h-36">
            <p className="text-gray-700">
              Assignment or contract-based engagements.
            </p>
          </div>

          {/* Card 8 */}
          <div className="p-6 bg-white shadow-lg rounded-lg h-36">
            <p className="text-gray-700">
              Are involved with us, and vice-versa, through voluntary
              association.
            </p>
          </div>
        </div>
      </div>
    </div>

    

    
  )
}

export default Ourconstituents
