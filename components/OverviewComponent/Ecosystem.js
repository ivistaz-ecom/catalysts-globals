import Image from "next/image"

const Ecosystem = () => {
  return (
    <div className="mb-16 ">
      {/* Catalyst Section */}
      <div className="bg-[#D4E2EC]  container mx-auto">
      <div className="bg-greenfn px-4 py-8">
        
        <div className="bg-white p-6">
          {/* Ecosystem Image */}
          <Image
            src="/img/ecosystem.png" 
            alt="CT Ecosystem"
            width={1020} 
            height={1000} 
            className="w-full h-auto"
          />
          <br />
          <br />

          {/* Text Content */}
          <div className="mb-6">
            <h3 className="inline-block text-gray-700 pr-8">
              Orchestrating change through
            </h3>
            <h2 className="text-2xl font-bold text-gray-900">Change Agents</h2>
          </div>

          {/* Group Image */}
          <Image
            src="/img/CTgroup.png" 
            alt="CT Group"
            width={1000} 
            height={1000} 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Ecosystem
