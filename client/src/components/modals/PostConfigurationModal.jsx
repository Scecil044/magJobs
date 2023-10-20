import { TERipple, TEModal, TEModalDialog, TEModalContent, TEModalHeader, TEModalBody, TEModalFooter } from "tw-elements-react";
import { GrGroup } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";

export default function PostConfigurationModal({ setConfigurationModal, configurationModal, setShowModal, showModal }) {
  const handleReopenModal = () => {
    setShowModal(!showModal);
    setConfigurationModal(!configurationModal);
  };
  return (
    <div>
      {/* <!-- Modal --> */}
      <TEModal show={configurationModal} setShow={setConfigurationModal}>
        <TEModalDialog centered>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">Post settings</h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setConfigurationModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <div>
                <p>Who can see this post?</p>
                <div className="flex flex-col gap-4 p-3">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                        <BiWorld className="w-5 h-5" />
                      </div>
                      <p className="font-semibold">anyone</p>
                    </div>
                    <div className="h-5 w-5 bg-green-700 rounded-full flex items-center justify-center">
                      <input type="radio" />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                        <GiNetworkBars className="w-5 h-5" />
                      </div>
                      <p className="font-semibold">Connections only</p>
                    </div>
                    <div className="h-5 w-5 bg-green-700 rounded-full flex items-center justify-center">
                      <input type="radio" />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                        <GrGroup className="w-5 h-5" />
                      </div>
                      <p className="font-semibold">Groups</p>
                    </div>
                    <div className="h-5 w-5 bg-green-700 rounded-full flex items-center justify-center">
                      <input type="radio" />
                    </div>
                  </div>
                </div>
              </div>
            </TEModalBody>
            <TEModalFooter>
              <div className="flex gap-2">
                <button onClick={() => setConfigurationModal(false)} className="bg-[#0072b1] text-white py-2 px-3 rounded-lg">
                  close
                </button>
                <button onClick={handleReopenModal} className="bg-gray-200 py-2 px-3 rounded-lg">
                  Done
                </button>
              </div>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
}
