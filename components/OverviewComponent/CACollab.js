import Image from "next/image"
import Link from "next/link"

const CACollab = () => {
  return (
    <div className="">
      <div className="bg-[#B8DFD4] px-4 py-8 container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div>
            <Image
              src="/img/collablogo.png"
              alt="CAS Logo"
              width={100}
              height={100}
              className="w-44 h-20 object-contain pb-4"
              id="cac"
            />
          </div>
          <div className="lg:mt-4 pb-4">
            <Link
              href="https://communityactioncollab.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Visit Site
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {/* Left Column */}
            <div>
              <p>
                A dynamic humanitarian emergency platform that builds the
                resilience of vulnerable people and their institutions in
                everyday emergencies and makes them resilient over humanitarian
                crises.
              </p>
              <p>
                Building on the legacy of #COVIDActionCollab, Community Action
                Collab works to coordinate and guide the actions and decisions
                of its partners, the government, and other alliances. CAC also
                addresses issues affecting millions of vulnerable people and
                ensures these individuals have access to vital livelihood,
                health, social protection, and climate impact solutions.
              </p>
              <br />
              <h2 className="md:text-[32px] text-[22px] bg-[#D7EEE8]  p-1 inline-block ">
                Estd. 2022
              </h2>
              <br />
              <br />
              <h2 className="md:text-[32px] text-[22px] bg-[#D7EEE8]  p-1 inline-block ">
                Our Reach:
              </h2>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center">
                  <Image
                    src="/img/caciconl1.svg"
                    alt="Icon 1"
                    width={60}
                    height={60}
                  />
                  <span className="ml-4">13 Vulnerable communities</span>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/img/caciconl2.svg"
                    alt="Icon 2"
                    width={60}
                    height={60}
                  />
                  <span className="ml-4">36 States & Union Territories</span>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/img/caciconl3.svg"
                    alt="Icon 3"
                    width={60}
                    height={60}
                  />
                  <span className="ml-4">360+ Partners</span>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/img/caciconl4.svg"
                    alt="Icon 4"
                    width={60}
                    height={60}
                  />
                  <span className="ml-4">2.79 Cr Service instances</span>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <div>
                <Image
                  src="/img/Cms/Cac_bg_img.png"
                  alt="CA Group"
                  width={500}
                  height={300}
                  className="w-44 h-44 lg:-ms-7 "
                />
              </div>
              <div className="lg:px-10">
                <div>
                  <Image
                    src="/img/collabgroup.png"
                    alt="CA Group"
                    width={500}
                    height={300}
                    className="w-full h-auto lg:-mt-16 "
                  />
                </div>
                <div className="border border-gray-300 rounded-b-3xl">
                  <div className="mt-6 space-y-12 mb-5 p-4">
                    {/* Row 1 */}
                    <div className="flex items-start">
                      <Image
                        src="/img/caciconr1.svg"
                        alt="Icon Orchestrate"
                        width={80}
                        height={80}
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-bold">Orchestrate</h4>
                        <p>
                          Functional governance systems that actively meet the
                          needs of the vulnerable and enable human capital for
                          emergency response.
                        </p>
                      </div>
                    </div>
                    {/* Row 2 */}
                    <div className="flex items-start ">
                      <Image
                        src="/img/caciconr2.svg"
                        alt="Icon Influence"
                        width={80}
                        height={80}
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-bold">Influence</h4>
                        <p>
                          Significant policy and practice changes, achieved
                          through global collaboration by amplifying
                          components/issues.
                        </p>
                      </div>
                    </div>
                    {/* Row 3 */}
                    <div className="flex items-start">
                      <Image
                        src="/img/caciconr3.svg"
                        alt="Icon Solve"
                        width={80}
                        height={80}
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-bold">Solve</h4>
                        <p>
                          Scalable solutions, response time, and district-level
                          integrated action.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
      <div className="bg-black text-center text-white py-8">
        <Link
          href="mailto:contactus@catalysts.org"
          className="text-2xl hover:text-gray-400"
        >
          contactus@catalysts.org
        </Link>
      </div>
    </div>
  )
}

export default CACollab
