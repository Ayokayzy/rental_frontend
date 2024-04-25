import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
const PropCard = ({ property }) => {
  return (
    <div className="card-prop w-[400px] bg-white border rounded-lg shadow  border-[#fe598d] relative">
      <img className="rounded-t-lg" src={property?.cover_image || property.rest_images[0]} alt="" />
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
        <Link to={`/propdet?id=${"property._id"}`}>
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
    </div>
  );
};

export default PropCard;
