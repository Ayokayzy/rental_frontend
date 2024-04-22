import { signInWithPopup } from "firebase/auth";
import FacebookLogo from "../assets/images/FacebookLogo";
import GoogleLogo from "../assets/images/GoogleLogo";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import axios from "axios";
import { API_URL } from "../../ProtectedRoute";
import { createStripeAccount, registerUser } from "../../Apis/Auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateStripeAccount() {
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    full_name: "",
    country: "",
  });

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
      const result = await createStripeAccount(formData, token, userId);
      // toast.success(result.message);
      window.location.href = result.url;
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="log-box w-[450px] border border-gray-500 relative mx-auto my-[5rem] p-6 grow flex flex-col items-center">
      <h2 className="text-2xl text-center mb-4">Create Account</h2>
      <form className="flex flex-col w-full" onSubmit={handleFormSubmit}>
        <div className="space-y-4">
          <label className="flex flex-col">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              className="outline-none h-10 border rounded-md px-4"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label className="flex flex-col">
            <select
              name="country"
              className="outline-none h-10 border rounded-md px-4"
              value={formData.country}
              onChange={handleInputChange}
            >
              <option value="" className="text-gray-200 placeholder:text-gray-200">--select country--</option>
              <option value="US">United States</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-primary_pink text-white py-2 px-3 border rounded-md mb-5"
        >
          Create Account
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default CreateStripeAccount;
