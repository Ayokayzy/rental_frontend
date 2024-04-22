import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Layout from "./Layout";
import ContactUs from "./pages/ContactUs";
import Properties from "./pages/Properties";
import PropDetail from "./pages/PropDetail";
import ListProp from "./pages/ListProp";
import Dashboard from "./pages/dashboard";
import AllBlog from "./pages/AllBlog";
import BlogDetail from "./pages/BlogDetail";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditProfile from "./pages/editProfile";
import VerifySucc from "./pages/verifySucc";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/forgotPassword";
import BookListed from "./pages/bookedList.jsx";
import MyBooking from "./pages/myBokking/index.jsx";
import MyProperties from "./pages/MyProperties/index.jsx";
import PropDetailInter from "./pages/PropDetailInter.jsx";
import CreateStripeAccount from "./pages/CreateStripeAcount.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="">
      <ScrollToTop />

      <Navbar />
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route index path={"/"} element={<HomePage />} />
        <Route index path={"/login"} element={<LoginPage />} />
        <Route index path={"/register"} element={<SignupPage />} />
        <Route
          index
          path={"/create-stripe-account"}
          element={<CreateStripeAccount />}
        />
        <Route index path={"/contact"} element={<ContactUs />} />
        <Route index path={"/properties"} element={<Properties />} />
        <Route index path={"/propdet"} element={<PropDetail />} />
        <Route index path={"/propdetint"} element={<PropDetailInter />} />
        <Route index path={"/listp"} element={<ListProp />} />
        <Route index path={"/dash"} element={<Dashboard />} />
        <Route index path={"/all-blog"} element={<AllBlog />} />
        <Route index path={"/blog-det"} element={<BlogDetail />} />
        <Route index path={"/edit-das"} element={<EditProfile />} />
        <Route index path={"/user-verified"} element={<VerifySucc />} />
        <Route index path={"/booked-list"} element={<BookListed />} />
        <Route index path={"/mybooking"} element={<MyBooking />} />
        <Route index path={"/myprop"} element={<MyProperties />} />

        <Route
          index
          path={"/reset-passwrd/:email"}
          element={<ResetPassword />}
        />
        <Route index path={"/forgot-passwrd"} element={<ForgotPassword />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
