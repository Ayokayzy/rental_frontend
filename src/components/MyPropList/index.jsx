import { useEffect, useState } from "react";
import PropCard from "../../pages/MyProperties/PropCard";
import { getPropByUserId } from "../../../Apis/ListProp";
import Skeleton from "../Skeleton";
import { useNavigate } from "react-router-dom";

function MyPropList() {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropByUserId(userId, token);
        setPropertyData(data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, [userId, token]);
  console.log(propertyData);
  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-end">
        <button
          className="about-btn whitespace-nowrap px-8 hover:bg-[#fff] hover:text-[#fe598d] bg-[#fe598d] rounded text-[#fff] h-[35px]"
          onClick={() => navigate("/listp")}
        >
          Add Property
        </button>
      </div>
      <div className="p-4 border-2 border-black rounded-lg mt-4 h-full overflow-y-auto">
        {propertyData?.length !== 0 &&
          propertyData?.map((property) => (
            <PropCard key={property._id} property={property} />
          ))}
        {/* : [1, 2].map((_, id) => <Skeleton key={id} />)} */}
      </div>
    </div>
  );
}

export default MyPropList;
