import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { TERipple, TEModal, TEModalDialog, TEModalContent, TEModalHeader, TEModalBody, TEModalFooter } from "tw-elements-react";
export default function WelcomePopUp({ showModal, setShowModal }) {
  return (
    <>
      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog centered size="md">
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                <p className="text-3xl text-gray-500">7 Days Free Trial</p>
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
              <div className="flex flex-col gap-3">
                <span className="flex gap-2">
                  <FcCheckmark className="h-7 w-7" />
                  <div className="flex flex-col gap-1">
                    <p className="text-lg">Cancel any time</p>
                    <p className="text-sm text-gray-500">
                      No penalties - simply cancel before the trial ends if it's not right for you.
                    </p>
                  </div>
                </span>
                <span className="flex gap-2">
                  <FcCheckmark className="h-7 w-7" />
                  <div className="flex flex-col gap-1">
                    <p className="text-lg">$14 USD per month to continue learning after trial ends.</p>
                    <p className="text-sm text-gray-500">
                      No penalties - simply cancel before the trial ends if it's not right for you.
                    </p>
                  </div>
                </span>
                <span className="flex gap-2">
                  <FcCheckmark className="h-7 w-7" />
                  <div className="flex flex-col gap-1">
                    <p className="text-lg">Certificate when you complete.</p>
                    <p className="text-sm text-gray-500">Share on your resume, LinkedIn, and CV.</p>
                  </div>
                </span>
              </div>
            </TEModalBody>

            <div className="p-5 ">
              <button
                onClick={() => setShowModal(false)}
                className="bg-indigo-700 text-white py-3 px-6 ring-2 ring-offset-1 ring-indigo-500"
              >
                Start free trial
              </button>
            </div>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </>
  );
}
