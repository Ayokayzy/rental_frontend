import { useEffect } from "react";

const PriceForm = ({
  handlePriceClose,
  handleImageClick,
  formData,
  handleInputChange,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ol className="list-t flex justify-center items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-[#fe598d] rounded-lg shadow-sm  sm:text-base   sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        <li className="flex items-center  ">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 ">
            1
          </span>
          Description
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center text-[#fe598d]">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-[#fe598d]  rounded-full shrink-0">
            2
          </span>
          Price
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
          </span>
          Images
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>

        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            6
          </span>
          Location
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            7
          </span>
          Amenities
        </li>
      </ol>
      <div className=" my-5   w-full">
        <div className="title-desc text-[20px] font-bold text-gray-500">
          Price
        </div>
        <p className=" text-red-500 mb-1">All field here are required</p>

        <div className="currency-box">
          <div className="relative z-0 inp-lab-container mb-5 group">
            <label
              htmlFor=""
              className=" block desc-input mb-2 text-sm font-medium text-gray-900 dark:text-white rad-bx"
            >
              Select Category
            </label>
            <select
              id="currency"
              name="currency"
              className=" bg-transparent border-2 border-gray-600  outline-none text-gray-900 text-sm  block desc-input w-[100px] p-2.5"
              value={formData.currency}
              onChange={handleInputChange}
            >
              <option value="USD">USD $</option>
              <option value="NGN">NGN #</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap justify-start items-end gap-10">
          <div className="relative z-0 inp-lab-container mb-5 group">
            <input
              type="text"
              name="price_per_night_month"
              id="price_per_night_month"
              className="block desc-input py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 outline-none  peer"
              placeholder=" "
              required
              value={formData.price_per_night_month}
              onChange={handleInputChange}
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fe598d] peer-focus:dark:text-[#fe598d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price per month: in {formData.currency || "$"}
            </label>
          </div>
          <div className="relative z-0 inp-lab-container mb-5 group">
            <input
              type="text"
              name="price_per_night_week"
              id="price_per_night_week"
              className="block desc-input py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 outline-none  peer"
              placeholder=" "
              required
              value={formData.price_per_night_week}
              onChange={handleInputChange}
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fe598d] peer-focus:dark:text-[#fe598d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price per weeek (7d+): in {formData.currency || "$"}
            </label>
          </div>

          <div className="relative z-0 inp-lab-container mb-5 group">
            <input
              type="text"
              name="price_per_night"
              id="price_per_night"
              className="block desc-input py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 outline-none  peer"
              placeholder=" "
              required
              value={formData.price_per_night}
              onChange={handleInputChange}
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fe598d] peer-focus:dark:text-[#fe598d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price per night: in {formData.currency || "$"}
            </label>
          </div>

          <div className="relative z-0 inp-lab-container mb-5 group">
            <input
              type="text"
              name="tax_fee"
              id="tax_fee"
              className="block desc-input py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 outline-none  peer"
              placeholder=" "
              required
              value={formData.tax_fee}
              onChange={handleInputChange}
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fe598d] peer-focus:dark:text-[#fe598d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City Tax Fee: in {formData.currency || "$"}
            </label>
          </div>
          <div className="relative z-0 inp-lab-container mb-5 group">
            <input
              type="text"
              name="cleaning_fee"
              id="cleaning_fee"
              className="block desc-input py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 outline-none  peer"
              placeholder=" "
              required
              value={formData.cleaning_fee}
              onChange={handleInputChange}
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fe598d] peer-focus:dark:text-[#fe598d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Cleaning Fee: in {formData.currency || "$"}
            </label>
          </div>
          <div className="relative z-0 inp-lab-container mb-5 group">
            <input
              type="text"
              name="extra_people"
              id="extra_people"
              className="block desc-input py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 outline-none  peer"
              placeholder=" "
              required
              value={formData.extra_people}
              onChange={handleInputChange}
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fe598d] peer-focus:dark:text-[#fe598d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Extra People: $40/night: in {formData.currency || "$"}
            </label>
          </div>
        </div>
        <div className="contn-btn flex justify-center gap-20">
          <button
            type="button"
            className="  text-[#fe598d] bg-[#fff] hover:bg-[#fe598d] border hover:text-[#fff]  border-[#fe598d] focus:ring-4 focus:outline-none focus:ring-[#fe598d] font-medium rounded-lg text-sm w-[200px]  px-5 py-2.5 text-center "
            onClick={handlePriceClose}
          >
            Back
          </button>
          <button
            type="button"
            className="  text-white bg-[#fe598d] hover:bg-[#fff] hover:border hover:text-[#fe598d]  hover:border-[#fe598d] focus:ring-4 focus:outline-none focus:ring-[#fe598d] font-medium rounded-lg text-sm w-[200px]  px-5 py-2.5 text-center "
            onClick={handleImageClick}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default PriceForm;
