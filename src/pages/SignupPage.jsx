import { signInWithPopup } from "firebase/auth";
import FacebookLogo from "../assets/images/FacebookLogo";
import GoogleLogo from "../assets/images/GoogleLogo";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import axios from "axios";
import { API_URL } from "../../ProtectedRoute";
import { registerUser } from "../../Apis/Auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isPasswordValid = (password) => {
    // Password must be at least 8 characters long
    if (password.length < 8) {
      return false;
    }

    const letterRegex = /[a-zA-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    return (
      letterRegex.test(password) &&
      numberRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isPasswordValid(formData.password)) {
      toast.error(
        "Password must be at least 8 characters and contain at least one letter, one number, and one special character"
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password does not match");

      return;
    }

    try {
      const result = await registerUser(formData);
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post(`${API_URL}/auth/google`, {
            full_name: result.user.displayName,
            email: result.user.email,
            profile_picture: result.user.photoURL,
          })
          .then((res) => {
            console.log(res);
          });
      })
      .catch((error) => {});
  };
  return (
    <div className="log-box w-[450px] border border-gray-500 relative mx-auto my-[5rem] p-6 grow flex flex-col items-center">
      <h2 className="text-2xl text-center mb-4">Sign up</h2>
      <form className="flex flex-col w-full" onSubmit={handleFormSubmit}>
        <div className="space-y-4">
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
          <label htmlFor="password" className="flex flex-col">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="outline-none h-10 border rounded-md px-4"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span className="text-[10px] mt-1 text-red-400">
              * Password must be at least 8 characters and contain at least one
              letter, one number, and one special character
            </span>
          </label>
          <label htmlFor="confirmPassword" className="flex flex-col">
            <input
              type="password"
              name="confirmPassword" // Corrected the name here
              placeholder="Confirm password"
              className="outline-none h-10 border rounded-md px-4"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-primary_pink text-white py-2 px-3 border rounded-md mb-5"
        >
          Sign Up
        </button>
        <ToastContainer />
        <span className="text-center text-gray-400">OR</span>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-3 mt-4 border-slate-600 text-slate-600 py-2 px-3 border rounded-md hover:bg-gray-200 hover:text-gray-900"
            onClick={signInWithGoogle}
          >
            <GoogleLogo />
            <span>Log in with Google</span>
          </button>

          {/* <button
            type="submit"
            className="w-full  flex justify-center items-center gap-3 mt-4 border-slate-600 text-slate-600 py-2 px-3 border rounded-md hover:bg-gray-200 hover:text-gray-900"
          >
            <FacebookLogo />
            <span>Log in with Facebook</span>
          </button> */}
        </div>

        <div className="flex justify-center items-center mt-6">
          <span className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-bold underline underline-offset-1"
            >
              Log in
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
