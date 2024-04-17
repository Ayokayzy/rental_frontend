import React, { useEffect, useState } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { CreateBooking, createPaymentIntent } from "../../Apis/Booking";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import format from "date-fns/format";
import Calendar from "./Calendar";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const BookFormMain = ({ getData }) => {
  console.log({ getData });
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(value);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [valueOut, setValueOut] = useState("YYYY-MM-DD");

  const [selectedDateOut, setSelectedDateOut] = useState(valueOut);
  const [isDatePickerVisibleOut, setDatePickerVisibleOut] = useState(false);
  const [dateDifference, setDateDifference] = useState(null);

  const [price, setPrice] = useState("");
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");
  const [sGuest, setSGuest] = useState("");
  // console.log(valueOut);
  const handleDateChangeOut = (valueOut) => {
    const newDateOut = valueOut;
    setSelectedDateOut(newDateOut);
    calculateDateDifference(selectedDate, newDateOut);
    setDatePickerVisibleOut(false);
  };

  const handleCheckInClickOut = () => {
    setDatePickerVisibleOut(!isDatePickerVisibleOut);
  };

  const handleDateChange = (value) => {
    const newDate = value;
    setSelectedDate(newDate);
    calculateDateDifference(newDate, selectedDateOut);
    setDatePickerVisible(false);
  };

  const handleCheckInClick = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const propId = getData?._id;

  const calculateDateDifference = (checkInDate, checkOutDate) => {
    if (checkInDate && checkOutDate) {
      const diffInMilliseconds = new Date(checkOutDate) - new Date(checkInDate);
      const daysDifference = Math.round(
        diffInMilliseconds / (1000 * 60 * 60 * 24)
      );
      setDateDifference(daysDifference);
    }
  };
  useEffect(() => {
    if (dateDifference >= 7) {
      setPrice(getData?.price_per_night_week);
    } else if (dateDifference >= 30) {
      setPrice(getData?.price_per_night_month);
    } else {
      setPrice(getData?.price_per_night);
    }
  }, [dateDifference, getData]);

  const rentalp = price * dateDifference;

  const totalPrice =
    Number(getData?.cleaning_fee) + Number(getData?.tax_fee) + rentalp;
  const formattedDate =
    selectedDate !== "YYYY-MM-DD" ? format(value, "yyyy-MM-dd") : "";
  const currentDate = new Date(); // Current date

  if (formattedDate && new Date(formattedDate) < currentDate) {
    toast.error("Date is not available");
  }
  const formattedDateOut =
    selectedDateOut !== "YYYY-MM-DD" ? format(valueOut, "yyyy-MM-dd") : "";
  console.log({ token });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      checkInDate: formattedDate,
      checkOutDate: formattedDateOut,
      roomFee: price,
      numberOfGuests: sGuest,
      totalPrice: totalPrice,
    };

    try {
      const result = await CreateBooking(formData, userId, token, propId);
      toast.success("Booked Successfully!!!");

      return () => clearTimeout(timeoutId);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!userId) return navigate("/login", { state: { from: location } });
    const formData = {
      checkInDate: formattedDate,
      checkOutDate: formattedDateOut,
      numberOfGuests: sGuest,
    };
    console.log({ formData });

    try {
      const result = await createPaymentIntent(propId, formData, userId, token);
      window.location.href = result.url;
      // toast.success("Booked Successfully!!!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bookfm-bx pt-5">
      <form action="" onSubmit={handleCheckout}>
        <div
          className="check-in-out-bx rounded mb-5 w-full flex gap-[10px] items-center border border-[#272932] px-3 py-2 text-[#272932] cursor-pointer"
          onClick={handleCheckInClick}
        >
          <FaCalendarDays className="text-[20px] text-[#272932]" />
          {formattedDate ? (
            <div className="dat-tst">{formattedDate}</div>
          ) : (
            <span
              onClick={handleCheckInClick}
              className="text-[20px] text-[#79745C]"
            >
              Check in
            </span>
          )}
        </div>
        {isDatePickerVisible && (
          <div className="calend-box">
            <Calendar
              value={value}
              setValue={setValue}
              handleDateChange={handleDateChange}
              booked={getData?.booked}
            />
          </div>
        )}
        <div
          className="check-in-out-bx rounded mb-5 w-full flex gap-[10px] items-center text-[#272932] border border-[#272932] px-3 py-2 cursor-pointer"
          onClick={handleCheckInClickOut}
        >
          <FaCalendarDays className="text-[20px] text-[#272932]" />
          {formattedDateOut ? (
            <div className="dat-tst">{formattedDateOut}</div>
          ) : (
            <span
              onClick={handleCheckInClickOut}
              className="text-[20px] text-[#79745C]"
            >
              Check out
            </span>
          )}
        </div>
        {isDatePickerVisibleOut && (
          <div className="">
            <Calendar
              value={valueOut}
              setValue={setValueOut}
              handleDateChange={handleDateChangeOut}
              booked={getData?.booked}
            />
          </div>
        )}

        <div className="check-in-out-bx rounded mb-5 w-full flex gap-[10px] items-center border border-[#272932] px-3 py-2 ">
          <IoMdPerson className="text-[20px] text-[#272932]" />

          <div className="relative z-0 inp-lab-container  group">
            <input
              type="text"
              name="sGuest"
              id="sGuest"
              className="block desc-input py-3 px-0 w-full text-sm  bg-transparent text-[#272932]  outline-none caret-[#272932]  peer"
              placeholder=" "
              required
              value={sGuest}
              onChange={(e) => setSGuest(e.target.value)}
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute whitespace-nowrap text-[#79745C] duration-300 transform -translate-y-6 scale-75 top-1 bg-[#F6F7EB] py-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#272932] peer-focus:dark:text-[#272932] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Guest No: e.g 1
            </label>
          </div>
        </div>

        {dateDifference > 0 && (
          <div className="">
            <div className="cal-price-box">
              <div className="left-pric">
                {getData?.currency} {price} x {dateDifference} nights
              </div>
              <div className="left-pric npb">
                {getData?.currency} {rentalp}
              </div>
            </div>
            <div className="cal-price-box">
              <div className="left-pric">Cleaning Fee</div>
              <div className="left-pric npb">
                {getData?.currency}
                {getData?.cleaning_fee}
              </div>
            </div>
            <div className="cal-price-box">
              <div className="left-pric">City Fee</div>
              <div className="left-pric npb">
                {getData?.currency}
                {getData?.tax_fee}
              </div>
            </div>
            <div className="cal-price-box">
              <div className="left-pric">TOTAL</div>
              <div className="left-pric npb">
                {" "}
                {getData?.currency}
                {Number(getData?.cleaning_fee) +
                  Number(getData?.tax_fee) +
                  rentalp}
              </div>
            </div>
          </div>
        )}
        <div className="z-20  my-6 ">
          <button className="bg-[#fe598d] border border-[#fe598d] hover:bg-[#fff] w-full px-5 py-2 rounded-[6px] text-272932 hover:text-[#fe598d]">
            Book Now
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default BookFormMain;
