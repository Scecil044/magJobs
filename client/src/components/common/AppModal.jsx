import { TERipple, TEModal, TEModalDialog, TEModalContent, TEModalHeader, TEModalBody, TEModalFooter } from "tw-elements-react";
import { AiOutlinePlus } from "react-icons/ai";
export default function AppModal({ showModal, setShowModal, title, user }) {
  return (
    <>
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog size="lg">
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">{title}</h5>
              {/* <!--Close button--> */}
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <div>
                <form>
                  <div className="mb-2">
                    <p className="font-semibold text-xl">Basic Info</p>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="text-xs text-gray-400">First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      id="firstName"
                      defaultValue={user?.firstName}
                      className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="text-xs text-gray-400">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                      defaultValue={user?.lastName}
                      className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="text-xs text-gray-400">Additional Name</label>
                    <input
                      type="text"
                      placeholder="Additional name"
                      id="lastName"
                      className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="text-xs text-gray-400">Headline</label>
                    <input
                      type="text"
                      placeholder="Headline"
                      id="lastName"
                      className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="text-xs text-gray-400">Industry</label>
                    <input
                      type="text"
                      placeholder="Industry"
                      id="industry"
                      className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                    />
                  </div>

                  <div className="mb-3">
                    <p className="font-semibold text-xl">Education</p>
                    <label htmlFor="text-xs text-gray-400">Education</label>
                    <input
                      type="text"
                      placeholder="Education"
                      id="industry"
                      className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                    />
                    <button className="text-blue-500 mt-2 py-1 px-4 hover:bg-blue-100 flex items-center gap-1 font-semibold transition-all duration-150">
                      <AiOutlinePlus className="h-5 w-5" />
                      Add new education
                    </button>
                  </div>

                  <div className="mb-5">
                    <span className="flex items-center gap-2">
                      <input type="checkbox" className="h-5 w-5 checked:text-green-700" />
                      <p className="text-gray-400 text-sm">Show education in my intro</p>
                    </span>
                  </div>

                  <div className="mb-3">
                    <p className="font-semibold text-xl">Location</p>
                    <label htmlFor="text-xs text-gray-400">Country/region</label>
                    <input
                      type="text"
                      placeholder="Country/region"
                      id="industry"
                      className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="text-xs text-gray-400">City</label>
                    <input
                      type="text"
                      placeholder="City"
                      id="city"
                      className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                    />
                  </div>
                </form>
              </div>
            </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Save changes
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </>
  );
}
