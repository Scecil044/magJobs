import { TEModal, TEModalDialog, TEModalContent, TEModalHeader, TEModalBody, TEModalFooter } from "tw-elements-react";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { updateUserFulfilledState, updateUserPendingState, updateUserRejectedState } from "../../redux/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import AppSpinner from "./AppSpinner";

export default function AppModal({ showModal, setShowModal, title }) {
  const { user, isLoading, isError } = useSelector(state => state.auth);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSave = async () => {
    try {
      dispatch(updateUserPendingState());
      const res = await fetch(`/api/users/update/user/${user._id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserRejectedState(data.message));
        return;
      }
      dispatch(updateUserFulfilledState(data));
    } catch (error) {
      dispatch(updateUserRejectedState(error.message));
      console.log(error);
    }
    // setShowModal(false);
  };
  return (
    <>
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog size="lg">
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-2xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">{title}</h5>
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
              {isLoading ? (
                <div className="flex items-center justify-center" style={{ minHeight: "700px" }}>
                  <AppSpinner />
                </div>
              ) : (
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="text-xs text-gray-400">Additional Name</label>
                      <input
                        type="text"
                        placeholder="Additional name"
                        id="additionalName"
                        defaultValue={user?.additionalName}
                        className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="text-xs text-gray-400">Headline</label>
                      <input
                        type="text"
                        placeholder="Headline"
                        id="headline"
                        defaultValue={user?.headline}
                        className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="text-xs text-gray-400">Industry</label>
                      <input
                        type="text"
                        placeholder="Industry"
                        id="industry"
                        defaultValue={user?.industry}
                        className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <p className="font-semibold text-xl">Education</p>
                      <label htmlFor="text-xs text-gray-400">Education</label>
                      <input
                        type="text"
                        placeholder="Education"
                        id="education"
                        className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                        onChange={handleChange}
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
                        id="country"
                        defaultValue={user?.country}
                        className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="text-xs text-gray-400">City</label>
                      <input
                        type="text"
                        placeholder="City"
                        id="city"
                        defaultValue={user?.city}
                        className="w-full border-2 border-gray-600 py-1 px-3 outline-none"
                        onChange={handleChange}
                      />
                    </div>

                    <div className=" my-5">
                      <p className="text-lg ">Contact info</p>
                      <p className="text-sm text-gray-400 mb-5">Add or edit your profile URL, email, and more</p>
                      <button className="text-blue-600 font-semibold py-1 px-4 hover:bg-blue-100">Edit contact info</button>
                    </div>

                    <div className="mb-3">
                      <p className="text-2xl font-semibold">Custom button</p>
                      <p className="text-sm text-gray-500">
                        As a Premium Business member, show people the best way to engage with you by adding a custom button to
                        the top of your profile.
                      </p>
                      <button className="text-blue-600 font-semibold py-1 px-4 hover:bg-blue-100">Edit custom button</button>
                    </div>
                  </form>
                </div>
              )}
            </TEModalBody>
            <TEModalFooter>
              <div>
                <button
                  onClick={handleSave}
                  className="bg-indigo-700 text-sm text-white py-2 px-4 rounded-3xl shadow-md hover:shadow-none transition-shadow duration-150"
                >
                  Save
                </button>
              </div>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </>
  );
}
