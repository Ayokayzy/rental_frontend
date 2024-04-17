import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../ProtectedRoute";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgotPass } from "../../Apis/Auth";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
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
      const result = await forgotPass(formData);
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="log-box w-[450px] border border-gray-500 relative mx-auto my-[5rem] p-6 grow flex flex-col items-center">
      <h2 className="text-4xl text-center">Forgot Password</h2>
      <form className="flex flex-col w-full" onSubmit={handleFormSubmit}>
        <label htmlFor="email" className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="outline-none h-10 border rounded-md px-4"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>

        <button
          type="submit"
          className="w-full mt-4 bg-primary_pink text-white py-2 px-3 border rounded-md mb-5"
        >
          Send
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default ForgotPassword;
