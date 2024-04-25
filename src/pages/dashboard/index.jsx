import "./style.css";
import profile from "/images/hero-slide-01.webp";
import { IoMdMail } from "react-icons/io";
import { HiPhone } from "react-icons/hi";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoSaveOutline } from "react-icons/io5";
import Sidebar from "../../components/dashboardSidebar";
import RecentActivity from "../../components/recentActivity";
import { useEffect, useState } from "react";
import { getUserById } from "../../../Apis/getUser";
import { getBookingByPropertyOwnerId } from "../../../Apis/Booking";
import SkeletonDas from "../../components/SkeletonDas";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

const Dashboard = () => {
  const navigate = useNavigate();
  const [getBooked, setBooked] = useState(null);
  const token = localStorage.getItem("authToken");
  const { user } = useSelector((s) => s);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const data = await getBookingByPropertyOwnerId(user?.user?._id, token);
        setBooked(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user?.user?._id) {
      fetchBookingData();
    }
  }, [user?.user?._id]);

  useEffect(() => {
    if (user?.role === "user" || !user?.isAuth) {
      navigate("/");
    }
  }, []);

  if (user?.loading) return <Loader />;

  return (
    <div className="edit-container py-20">
      <Sidebar />
      {user?.isAuth ? (
        <div className="dashboard-main2-container">
          <div className="dashboard-main-head">
            <img src={user?.user?.profile_picture || profile} alt="profile" />
            <div className="dash-details">
              <h1 className="dasboard-name">{user?.user?.full_name}</h1>
              <h2 className="dashboard-job-title">{user?.user?.username}</h2>
              <div className="dash-contact">
                <div className="dash-contact-mail-phone">
                  <IoMdMail className="dash-head-icon" />
                  <p className="mail-phone">{user?.user?.email}</p>
                </div>
                {user?.user?.contact_phone && (
                  <div className="dash-contact-mail-phone ml-4">
                    <HiPhone className="dash-head-icon" />
                    <p className="mail-phone">{user?.user?.contact_phone}</p>
                  </div>
                )}
              </div>
              {user?.user?.city && user?.user?.nationality && (
                <div className="dash-contact-mail-phone">
                  <MdOutlineLocationOn className="dash-head-icon" />
                  <p className="mail-phone">
                    {user?.user?.city}, {user?.user?.nationality}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="dashboard-second-section">
            <div className="dash-applied dash-second-all">
              <div className="dash-applied-icon mmm">
                <AiOutlineFileDone className="dash-second-icon" />
              </div>
              <div className="dash-number-text">
                <h2 className="dash-number">30</h2>
                <h3 className="dash-second-text">Listed Property</h3>
              </div>
            </div>
            <div className="dash-saved dash-second-all">
              <div className="dash-saved-icon mmm">
                <IoSaveOutline className="dash-second-icon" />
              </div>
              <div className="dash-number-text">
                <h2 className="dash-number">{getBooked?.length}</h2>
                <h3 className="dash-second-text">All Booked</h3>
              </div>
            </div>
            {/* <div className="dash-viewed dash-second-all">
              <div className="dash-viewed-icon mmm">
                <AiOutlineEye className="dash-second-icon" />
              </div>
              <div className="dash-number-text">
                <h2 className="dash-number">0</h2>
                <h3 className="dash-second-text">Profile Viewed</h3>
              </div>
            </div>
            <div className="dash-interview dash-second-all">
              <div className="dash-interview-icon mmm">
                <HiPhone className="dash-second-icon" />
              </div>
              <div className="dash-number-text">
                <h2 className="dash-number">0</h2>
                <h3 className="dash-second-text">Call for Interview</h3>
              </div> 
            </div>*/}
          </div>
          {/* <div className="social-box-cont">
            <a href={jobSeeker?.facebook}>
              <div className="social-con">
                <FaFacebookF />
              </div>
            </a>
            <a href={jobSeeker?.instagram}>
              <div className="social-con">
                <FaInstagram />
              </div>
            </a>
            <a href={jobSeeker?.twitter}>
              <div className="social-con">
                <FaTwitter />
              </div>
            </a>
            <a href={jobSeeker?.linkedin}>
              <div className="social-con">
                <FaLinkedin />
              </div>
            </a>
          </div> */}
          <div className="dashboard-section-three">
            {/* <div className="dash-available-recent " id="main-available"> */}
            {/* <div className="dash-avail-recent available">
              <p className="dash-avail-recent-title">Available Properties</p>
            </div> */}
            <div className="dash-available-content">
              <div className="col-rev">{/* <DashJobCol /> */}</div>
            </div>
            {/* </div> */}
            {/* <div className="dash-available-recent" id="main-recent">
            <div className="dash-avail-recent recent">
              <p className="dash-avail-recent-title">Recent Listed</p>
            </div>
            <div className="dash-recent-contrnt">
              <div className="col-rev">
                <RecentActivity />
              </div>
            </div>
          </div> */}
          </div>
        </div>
      ) : (
        user?.loading && <SkeletonDas />
      )}
    </div>
  );
};

export default Dashboard;
