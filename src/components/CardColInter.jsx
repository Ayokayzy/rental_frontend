import { useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import {
//   SaveProperty,
//   getSavedByUserIdAndPropId,
// } from "../../Apis/SaveProperty";
// import { API_URL } from "../../ProtectedRoute";

const CardColInter = ({ property }) => {
  const [savedData, setSavedData] = useState(null);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getSavedByUserIdAndPropId(
  //         userId,
  //         property._id,
  //         token
  //       );
  //       setSavedData(data);
  //     } catch (error) {
  //       console.error("Error fetching  data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const [isAct, setIsAct] = useState(false);
  const navigate = useNavigate();

  const formData = {
    user: userId,
    propertyListing: property._id,
  };

  const gotoProp = () => {
    navigate(`/propdet?id=${property._id}`);
  };
  // const handleIsAct = () => {
  //   setIsAct(!isAct);
  // };
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const result = await SaveProperty(formData, token);
  //     // console.log(result);
  //     toast.success("Property Saved Successfully!!!");

  //     return () => clearTimeout(timeoutId);
  //   } catch (error) {
  //     console.error(error.status);
  //     if (error.status) toast.error(error);
  //   }
  // };

  // const handleDelete = async () => {
  //   const savedId = savedData?._id; // Replace with your user ID

  //   const token = token; // Replace with your access token

  //   try {
  //     const response = await fetch(
  //       `${API_URL}/api/savedProperty/delete/${savedId}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       console.log("Property Unsaved successfully");
  //       // Perform any additional actions after deletion
  //       toast.success("Property Unsaved Successfully!!!");
  //     } else {
  //       console.error("Failed to unsave property");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting property", error);
  //   }
  // };
  return (
    <div className="card-prop w-[400px] bg-white border rounded-lg shadow  border-[#fe598d] relative">
      <img
        className="rounded-t-lg"
        src={property.cover_image}
        alt=""
        onClick={gotoProp}
      />
      <div className="price-fav-cont absolute top-3 flex justify-between w-full p-2">
        <div className="price-tag bg-[#fe598d] text-[#fff] rounded px-2">
          {property.currency}
          {property.price_per_night}
        </div>
        {/* <div
          className="fav-bx w-6 h-6  flex justify-center items-center text-[#fe598d] "
          onClick={handleIsAct}
        >
          {isAct ? (
            <MdFavorite />
          ) : (
            <MdFavoriteBorder onClick={handleFormSubmit} />
          )}
        </div> */}
      </div>
      <div className="p-2">
        <Link to={`/propdet?id=${property._id}`}>
          <h5 className="txt-cd mb-2 text-[16px] font-bold tracking-tight text-gray-700 ">
            {property.title}
          </h5>
        </Link>
        <div className="body-box mb-3 font-normal text-gray-400">
          <div className="flex items-center gap-1 mb-2">
            <IoLocation />
            <span> {property.country}</span>
          </div>

          <div className="flex items-center gap-1 ">
            <IoLocation />
            <span>
              {property.category} / {property.room_type}
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CardColInter;
