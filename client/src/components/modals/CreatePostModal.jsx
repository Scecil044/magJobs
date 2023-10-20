import { TERipple, TEModal, TEModalDialog, TEModalContent, TEModalHeader, TEModalBody, TEModalFooter } from "tw-elements-react";
import { useSelector } from "react-redux";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import PostConfigurationModal from "./PostConfigurationModal";

export default function CreatePostModal({ showModal, setShowModal }) {
  const { user } = useSelector(state => state.auth);
  const [configurationModal, setConfigurationModal] = useState(false);

  const handleConfigModal = () => {
    setConfigurationModal(!configurationModal);
    setShowModal(!showModal);
  };
  return (
    <div>
      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog centered>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                <div className="flex gap-1 py-2 px-6 cursor-pointer">
                  <div>
                    <img src={user?.avatar} alt="avatar" className="h-12 w-12 object-cover rounded-full" />
                  </div>
                  <div className="flex items-center">
                    <div className="flex gap-1 items-center text-[16px]">
                      <span>{user?.firstName}</span>
                      <span>{user?.lastName}</span>
                    </div>
                    <FiChevronDown onClick={handleConfigModal} />
                  </div>
                </div>
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
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
                <input type="text" placeholder="Type something here" className="outline-none w-[100%] flex-wrap min-h-[60px]" />
              </div>
            </TEModalBody>
            <TEModalFooter>
              <div className="flex gap-1">
                <button onClick={() => setShowModal(false)} className="bg-[#0072b1] text-white py-2 px-3 rounded-lg">
                  close
                </button>
                <button className="bg-gray-200 py-2 px-3 rounded-lg">Post</button>
              </div>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>

      {/* configuration modal */}
      <PostConfigurationModal
        setConfigurationModal={setConfigurationModal}
        configurationModal={configurationModal}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </div>
  );
}
