import { useState } from "react";
import AmentyForm from "../components/AmentyForm";
import DescrForm from "../components/DescrForm";
import ImageForm from "../components/ImageForm";
import LocationForm from "../components/LocationForm";
import PriceForm from "../components/PriceForm";
import { CreateProperty } from "../../Apis/ListProp";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ListProp = () => {
  const navigate = useNavigate();
  const [isPrice, SetIsPrice] = useState(false);
  const [isImage, SetIsImage] = useState(false);
  const [isLocation, SetIsLocation] = useState(false);
  const [isAmenty, SetIsAmenty] = useState(false);
  const [coverData, setCoverData] = useState("");
  const [restImage, setRestImage] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    description: "",
    title: "",
    category: "",
    room_type: "",
    guest_no: "",
    bathrooms: "",
    bedrooms: "",

    currency: "",
    price_per_night: "",
    price_per_night_month: "",
    price_per_night_week: "",
    tax_fee: "",
    cleaning_fee: "",
    extra_people: "",

    cover_image: coverData,
    rest_images: [],

    county: "",
    city: "",
    state: "",
    area: "",
    country: "",
    postal_code: "",

    late_checkin: "",
    optional_service: "",
    outdor_facilities: "",
    amenties: [],
  });
  if (token === null) {
    window.location.href = "/login";
  }
  const handleAmentyClick = (e) => {
    e.preventDefault();
    if (
      formData.county.trim() === "" ||
      formData.city.trim() === "" ||
      formData.state.trim() === "" ||
      formData.area.trim() === "" ||
      formData.country.trim() === "" ||
      formData.postal_code.trim() === ""
    ) {
      toast.error("Please fill in all fields before proceeding to next step");
    } else {
      SetIsAmenty(true);
    }
  };
  const handleAmentyClose = () => {
    SetIsAmenty(false);
  };

  const handleLocationClick = (e) => {
    SetIsLocation(true);
  };
  const handleLocationClose = () => {
    SetIsLocation(false);
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    if (
      formData.currency.trim() === "" ||
      formData.price_per_night.trim() === "" ||
      formData.price_per_night_month.trim() === "" ||
      formData.price_per_night_week.trim() === "" ||
      formData.tax_fee.trim() === "" ||
      formData.cleaning_fee.trim() === "" ||
      formData.extra_people.trim() === ""
    ) {
      toast.error("Please fill in all fields before proceeding to next step");
    } else {
      SetIsImage(true);
    }
  };
  const handleImageClose = () => {
    SetIsImage(false);
  };

  const handlePriceClick = (e) => {
    e.preventDefault();
    if (
      formData.description.trim() === "" ||
      formData.title.trim() === "" ||
      formData.category.trim() === "" ||
      formData.room_type.trim() === "" ||
      formData.guest_no.trim() === "" ||
      formData.bathrooms.trim() === "" ||
      formData.bedrooms.trim() === ""
    ) {
      toast.error("Please fill in all fields before proceeding to next step");
    } else {
      SetIsPrice(true);
    }
  };
  const handlePriceClose = () => {
    SetIsPrice(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await CreateProperty(formData, userId, token);
      toast.success("Property Created Successfully!!!");
      navigate("/dash")
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form
      action=""
      className="p-10 w-full overflow-hidden "
      onSubmit={handleFormSubmit}
    >
      {!isPrice && !isImage && !isLocation && !isAmenty && (
        <DescrForm
          handlePriceClick={handlePriceClick}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {isPrice && !isImage && !isLocation && !isAmenty && (
        <PriceForm
          handlePriceClose={handlePriceClose}
          handleImageClick={handleImageClick}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}

      {isImage && !isLocation && !isAmenty && (
        <ImageForm
          handleImageClose={handleImageClose}
          handleLocationClick={handleLocationClick}
          setCoverData={setCoverData}
          setRestImage={setRestImage}
          setFormData={setFormData}
        />
      )}
      {isLocation && !isAmenty && (
        <LocationForm
          handleLocationClose={handleLocationClose}
          handleAmentyClick={handleAmentyClick}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {isAmenty && (
        <AmentyForm
          handleAmentyClose={handleAmentyClose}
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      )}
      <ToastContainer />
    </form>
  );
};

export default ListProp;
