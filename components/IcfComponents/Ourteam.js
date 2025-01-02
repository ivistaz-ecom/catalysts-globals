"use client"
import React, { useState, useEffect } from "react"

const Ourteam = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [modalImage, setModalImage] = useState(null)

  const directors = [
    {
      name: "Aparna Sanjay",
      description:
        "Aparna leads the US operations of the Catalyst Group of organisations and is responsible for partnerships and fundraising with key stakeholders.",
      image: "/img/aparna_sanjay copy.png",
      moreInfo: "Aparna Sanjay leads the US operations of the Catalyst Group of organizations. She oversees partnerships and fundraising efforts with key stakeholders. With two decades of expertise in business responsibility, philanthropy, social enterprise, and non-profit management, Aparna is deeply committed to fostering meaningful growth and scale. She possesses extensive experience in initiating projects from the ground up, grant-making, strategic stakeholder management, program development, and capacity building for social businesses and non-profits. Before joining ICF USA, Aparna worked as a consultant for small and medium-sized NGOs, assisting them in strategic planning, organizational sustainability, and board development initiatives. Previously, she served as the Executive Director at Social Venture Partners (India) and headed the Earthy Goods Foundation in New Delhi. She also led the CSR function for MphasiS, a prominent Indian technology company. Aparna is also an active member of the boards of HelpAge USA and World Pulse. Her educational background includes a Postgraduate Diploma in Management from the Indian Institute of Management, Bangalore, a Diploma in International Development from the London School of Economics and Political Science (LSE), and a Certificate in Strategic Non-profit Management from Harvard Business School.",
    },
    {
      name: "Catherine Cove",
      description:
        "Catherine Cove is the Secretary of the Impact Catalyst Foundation. She is a healthcare consultant and second-year MBA candidate at the University of Chicago Booth School of Business.",
      image: "/img/cathrine_cove copy.png",
      moreInfo: "Catherine Cove serves as the Secretary of the Impact Catalyst Foundation. She is a healthcare consultant and a second-year MBA candidate at the University of Chicago Booth School of Business. With diverse experience in public health and healthcare spanning the United States, India, and the broader Asia-Pacific region, Catherine brings a wealth of knowledge to the board. She holds a BA in Biological Sciences from the University of Chicago and hails from the San Francisco Bay Area. Previously, Catherine worked as the Health Practice Manager and Technical Specialist at the Catalyst Group of Organisations in Bangalore, where she oversaw various projects in the realms of maternal and child health, sexual and reproductive health, COVID-19, economic development, tuberculosis, health financing, and worker wellbeing. Her roles encompass policy design, quantitative research, and monitoring and evaluation. Catherine also played a pivotal role in the development of India’s first universal health coverage scheme, Arogya Karnataka, and supported the implementation of Andhra Pradesh’s faecal sludge management strategy in select urban local bodies.",
    },
    {
      name: "Angela Choudhuri",
      description:
        "Dr. Angela Chaudhuri is a public health leader with over 2 decades of experience leading and mentoring global programs that translate the science of public health into meaningful community action for equitable change.",
      image: "/img/angela copy.png",
      moreInfo: "Dr Angela Chaudhuri is a distinguished public health leader with over two decades of experience spearheading global programs that bridge the gap between public health science and impactful community initiatives for equitable change. Her advocacy for at-risk adolescents, gender nonbinary groups, and individuals with HIV and other conditions transcends continents, epitomizing her rallying cry of “Leave No One Behind.” Currently serving as Chief Catalyst at Swasti, a global public health non-profit, Angela is dedicated to adding 100 million healthy days to the lives of the poorest and marginalized by 2030. In 2021, during her leadership in the COVID response through the COVIDActionCollab (now CommunityActionCollab), she pioneered a multidisciplinary collaboration platform for environmental surveillance called Precision Health. Angela holds a Bachelor's Degree in Dental Sciences (Bangalore University), a Masters in Public Health (Boston University), and a PG Diploma in Journalism (London School). Having lived in five countries and worked in over 30 countries, including extensive work in India, Angela currently serves on the board of the Catalyst Foundation and Swasti. She also holds positions on two committees within the World Health Organization: the Social Participation Technical Network and as a Steering Committee member of WHO's first-ever civil society commission.",
    },
    {
      name: "Shama Karkal",
      description:
        "Shama is a social impact professional with 25+ years of experience; her core expertise has been working on community systems strengthening with a focus on marginalised communities.",
      image: "/img/sharma copy.png",
      moreInfo: "Shama Karkal(Partner, Swasti): Shama is a seasoned social impact professional with 25+ years of experience. Her core expertise has been working on community systems strengthening with a focus on marginalized communities (women in sex work, LGBTQAI, urban and rural poor, factory workers), where people and their organizations work with a range of providers (health, justice, finances, etc.) to achieve well-being, individually and collectively. She has been with Swasti and the Catalyst Group, a social enterprise platform, since 2006. She works with diverse collaboratives to solve wicked problems.",
      extraInfo: [
        "Chair, Steering Committee of the Asia Pacific Alliance on Sexual and Reproductive Health",
        "Trustee, Catalyst Foundation",
        "Board Member — Impact Catalysts Foundation Inc, USA",
        "Core Team — Systems Innovation Bangalore Hub",
        "Executive Group — Catalyst2030 India Chapter",
        "Member, Future Talent Council",
        "Advisory Council — Pay-What-It Takes India Initiative",
        "Advisory Board — Community Design Agency",
      ],
    },
    {
      name: "Raghunathan N",
      description:
        "Co-founder of The Catalyst Group of Organisations, a strong proponent of building evidence and innovations to guide development. He has 7 Peer-reviewed/published papers to his name.",
      image: "/img/ragunathan copy.png",
      moreInfo: "Raghunathan (Co-founder, Catalyst Group of Organisations): Raghunathan is a dedicated advocate for evidence-based approaches in guiding development efforts. He excels at facilitating theories of change, building rigorous evidence through pluralistic methodologies, and establishing efficient monitoring, evaluation, and learning systems. With an impressive portfolio of work, including lead and advisory roles in monitoring and evaluation, Raghunathan is recognized for his contributions. He has published seven peer-reviewed papers and received the prestigious ‘Indian Council of Agricultural Research’ National award for his multi-disciplinary action research in agriculture and allied sciences. Raghunathan’s community engagement efforts directly impact small and marginal farmers, landless laborers, micro-small-medium entrepreneurs, women-owned businesses, women factory workers, artisanal fisherfolk, and over 500 community organizations and non-profit/social enterprises.",
    },
    {
      name: "Shiv Kumar",
      description:
        "Co-founder of The Catalyst group and Chief Integrator of the Community Action Collab, Shiv is a social investor who is passionate about solving complex social problems and improving the health & wealth of vulnerable communities.",
      image: "/img/shivkumar copy.png",
      moreInfo: "Shiv (Co-founder of The Catalyst Group and Chief Integrator of Community Action Collab): Shiv is a dedicated social investor with 30 years of experience in social development, both in India and internationally. His expertise spans a spectrum of focus areas, including health, livelihoods, education, sustainability, gender, and equity. Shiv has founded several organizations within the Catalyst Group, contributing significantly to the social development landscape. He has also incubated and supported over 200 community organizations and special enterprises. Shiv actively participates in various standing committees, task forces, and reference groups, both in India and internationally. In addition to his professional endeavors, Shiv is a food enthusiast, technology enthusiast, and avid cyclist. He holds a PG Diploma in Rural Management from the Institute of Rural Management, a PG Diploma in Systems Development from the National Institute of Information Technology, and a Bachelor of Commerce from St. Joseph's College, Tamil Nadu. Shiv embodies the maxim, 'Act with urgency, be patient with outcomes'.",
    },
  ]

  const openModal = (director) => {
    setModalContent(director.moreInfo)
    setModalImage(director.image)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalContent(null)
    setModalImage(null)
  }

  // Disable scroll on body when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scroll on unmount
    };
  }, [modalOpen]);

  return (
    <>
    <div className="bg-[#4F3475] text-white py-16" id="Ourteam">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-[36px] ">
          Board of Directors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {directors.map((director, index) => (
            <div key={index} className="text-black p-6 text-sm">
              <div>
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full mb-4"
                />
                <div className="h-36">
                  <h3 className="text-xl mb-2 text-white">{director.name}</h3>
                  <p className="text-sm mb-4 text-white">
                    {director.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-start ">
                <button
                  className="border-2 border-white text-white px-4 py-2 rounded hover:bg-white hover:text-purple-800"
                  onClick={() => openModal(director)}
                >
                  Know more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 p-5 overflow-y-auto">
          <div className="bg-white text-black p-8 rounded-lg lg:w-1/2 relative h-auto max-h-[95%] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4">
              {
                directors.find((director) => director.image === modalImage)
                  ?.name
              }{" "}
              {/* Modal Title */}
            </h3>
            <img
              src={modalImage}
              alt="Director"
              className="w-44 h-44 object-cover mb-4"
            />
            {/* Conditional Rendering for Shama Karkal's extra info */}
            <p>{modalContent}</p>
            {directors.find((director) => director.image === modalImage)
              ?.name === "Shama Karkal" && (
              <ul className="list-disc pl-6 mt-4">
                {directors
                  .find((director) => director.image === modalImage)
                  ?.extraInfo.map((info, index) => (
                    <li key={index}>{info}</li>
                  ))}
              </ul>
            )}
            <button
              className="mt-4 bg-[#4F3475] text-white px-4 py-2 rounded hover:bg-purple-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      
    </div>
      <div className="text-center bg-[#191D42] py-6 px-4 lg:px-1">
      <p className="text-white text-[12px]">
      © {currentYear}  Catalysts Foundation - All Rights Reserved | Terms & Conditions
        | Disclaimer
      </p>
      
    </div>
    </>
  )
}

export default Ourteam
