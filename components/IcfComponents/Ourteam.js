"use client"
import React, { useState, useEffect } from "react"
import { directors  } from "@/app/utils/ourteam.data"

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
      document.body.style.overflow = "auto";
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
                <div className="h-40">
                  <h3 className="text-xl mb-2 text-white">{director.name}</h3>
                  <p className="text-[16px] mb-4 text-white">
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
