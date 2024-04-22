import { IoLocation } from "react-icons/io5";
import "../assets/css/homePage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DecoSection() {
  const navigate = useNavigate();

  const gotoCreateStripe = () => {
    navigate("/create-stripe-account");
  };
  const gotoblog = () => {
    navigate("/all-blog");
  };
  const data = [
    {
      img: "https://mapro.s3.amazonaws.com/37/584c89ba14645134ec2a8513a167d8c4d0ed8867-1220.jpg",
      loc: "Bangkok",
      num: 3,
    },
    { img: "/images/hero-slide-02.webp", loc: "Lagos", num: 4 },
    {
      img: "https://mapro.s3.amazonaws.com/37/584c89ba14645134ec2a8513a167d8c4d0ed8867-1220.jpg",
      loc: "GeoGia",
      num: 2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, data.length]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      );
    } else if (e.key === "ArrowRight") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const currentItem = data[currentIndex];

  return (
    <div className="container mx-auto px-4 mt-20">
      <div className='rounded-[20px]  relative after:content-[" "] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-[rgba(32,31,31,0.8)] after:to-transparent flex w-full overflow-x-hidden '>
        <div className="h-[400px] w-full relativeimage-container">
          <div className="absolute bg-[#70636729] top-0 h-full rounded-[20px]"></div>
          <img
            src={currentItem.img}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-fill rounded-[20px]"
          />
        </div>
        <div className=" absolute top-0 w-full md:w-[100%] lg:w-[100%] flex justify-center items-start flex-col h-full z-10 text-container">
          <div className="text-box relative w-full md:w-[45%] lg:w-[40%] p-4 md:p-8 ">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-7 md:leading-9 lg:leading-40 mb-4 md:mb-8 lihe red-ln text-white">
              Share Your Space with the World
            </h1>
            <p className="text-sm md:text-base bdy-rd text-white">
              Inspiring, award-winning design meets modern, mobile-first
              service. Welcome to the future of hospitality.
            </p>
            <div className="about-btn-box flex gap-5 my-8">
              <button
                className="about-btn whitespace-nowrap px-8 hover:bg-[#fff] hover:text-[#fe598d] bg-[#fe598d] rounded text-[#fff] h-[35px]"
                onClick={gotoCreateStripe}
              >
                Become a host
              </button>
              <button
                className="about-btn whitespace-nowrap w-[110px] rounded bg-[#fff]  text-[#fe598d] h-[35px] hover:bg-[#fe598d] hover:text-[#fff]"
                onClick={gotoblog}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecoSection;
