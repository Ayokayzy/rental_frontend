import axios from "axios";
import { useEffect, useState } from "react";
import {
  MdAddPhotoAlternate,
  MdDelete,
  MdOutlineAdd,
  MdOutlineClose,
} from "react-icons/md";
const ImageForm = ({
  handleImageClose,
  handleLocationClick,
  setCoverData,
  setRestImage,
  setFormData,
}) => {
  const [coverImage, setCoverImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = {
          id: new Date().getTime(),
          url: reader.result,
        };
        setImages((prevImages) => [...prevImages, imageData]);
      };
      reader.readAsDataURL(file);
    }
  };
  // console.log(images.url);

  const handleImageDelete = (id) => {
    setImages((prevImages) => prevImages.filter((img) => img.id !== id));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // console.log(coverImage);
  const handleDeleteButtonClick = () => {
    setCoverImage(null);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("file", coverImage);
    formData.append("upload_preset", "rgfgxgi0");

    // Upload image only if a file is provided
    let imageUrl;
    if (coverImage) {
      await axios({
        method: "POST",
        url: "https://api.cloudinary.com/v1_1/dyojshtoe/image/upload",
        data: formData,
      })
        .then((response) => {
          imageUrl = response.data.secure_url;
          setFormData((prev) => ({
            ...prev,
            cover_image: imageUrl,
          }));
          setCoverData(imageUrl);
        })
        .catch((err) => {
          console.log({ err });
        });
    }
    // console.log(imageUrl);

    let imagesUrls = [];
    for (const image of images) {
      const imageFormData = new FormData();
      imageFormData.append("file", image.url);

      imageFormData.append("upload_preset", "rgfgxgi0");

      await axios({
        method: "POST",
        url: "https://api.cloudinary.com/v1_1/dyojshtoe/image/upload",
        data: imageFormData,
      }).then((response) => {
        imagesUrls.push(response.data.secure_url);
        setFormData((prev) => ({
          ...prev,
          rest_images: imagesUrls,
        }));
        setRestImage(imagesUrls);
      });
    }
    handleLocationClick();
  };

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
        <li className="flex items-center ">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border  rounded-full shrink-0">
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
        <li className="flex items-center text-[#fe598d]">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-[#fe598d] rounded-full shrink-0 ">
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
          Images
        </div>
        <div className="image-all-container py-10">
          <div className="cover-img-box">
            {coverImage ? (
              <div className="imas-rel relative">
                <div
                  className="delt absolute"
                  onClick={handleDeleteButtonClick}
                >
                  <MdDelete />
                </div>
                <img
                  src={coverImage}
                  alt=""
                  className="cover-height rounded-[15px]"
                />
              </div>
            ) : (
              <label
                htmlFor="imageInput"
                className="input-cover-height rounded-[15px]"
              >
                <MdAddPhotoAlternate />
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </label>
            )}
          </div>
          <div className="rest-image w-[80%] mx-auto my-5 flex gap-5 flex-wrap justify-center">
            {images.map((image) => (
              <div
                key={image.id}
                className="mag-each relative w-[300px] border border-[#fe598d] rounded"
              >
                <div
                  onClick={() => handleImageDelete(image.id)}
                  className="absolute right-2 top-2 cls-del w-[25px] h-[25px] text-[#fff] text-[18px] cursor-pointer bg-[#fe598d] rounded-full flex items-center justify-center"
                >
                  <MdOutlineClose />
                </div>
                <img
                  src={image.url}
                  alt=""
                  className="more-ma w-[300px] h-[150px] object-cover rounded"
                />
              </div>
            ))}
          </div>

          <div className="new-bx flex justify-center px-[100px]">
            <label
              htmlFor="imageUpload"
              className="bg-[#fe598d] whitespace-nowrap px-6 h-[40px] rounded flex items-center justify-center text-[#fff] text-[20px] cursor-pointer"
            >
              <MdOutlineAdd /> Add More
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div className="contn-btn flex justify-center gap-20">
          <button
            type="button"
            className="  text-[#fe598d] bg-[#fff] hover:bg-[#fe598d] border hover:text-[#fff]  border-[#fe598d] focus:ring-4 focus:outline-none focus:ring-[#fe598d] font-medium rounded-lg text-sm w-[200px]  px-5 py-2.5 text-center "
            onClick={handleImageClose}
          >
            Back
          </button>
          <button
            //   type="submit"
            className="  text-white bg-[#fe598d] hover:bg-[#fff] hover:border hover:text-[#fe598d]  hover:border-[#fe598d] focus:ring-4 focus:outline-none focus:ring-[#fe598d] font-medium rounded-lg text-sm w-[200px]  px-5 py-2.5 text-center "
            // onClick={handleLocationClick}
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageForm;
