// api.js
import { useState } from "react";
import { API_URL } from "../ProtectedRoute";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getStripe from "./getStripe";

export const registerUser = async (userData, successMessage) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json(); // Assuming the server sends error details in JSON format
      throw new Error(errorData.message); // Adjust this based on the actual structure of the error response
    }

    const data = await response.json();
    toast.success(successMessage);
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    toast.error(error);
    // toast.error("", error);
    throw error;
  }
};

export const createStripeAccount = async (
  userData,
  token,
  userId,
  successMessage
) => {
  try {
    const stripe = await getStripe();
    const response = await fetch(`${API_URL}/auth/create-stripe-account/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json(); // Assuming the server sends error details in JSON format
      throw new Error(errorData.message); // Adjust this based on the actual structure of the error response
    }

    const data = await response.json();
    toast.success(successMessage);
    return data;
  } catch (error) {
    console.error("Error creating account:", error);
    toast.error(error);
    // toast.error("", error);
    throw error;
  }
};

export const loginUser = async (userData, successMessage) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json(); // Assuming the server sends error details in JSON format
      throw new Error(errorData.message); // Adjust this based on the actual structure of the error response
    }

    const data = await response.json();
    toast.success(successMessage);
    return data;
  } catch (error) {
    toast.error(error);
    // toast.error("", error);
    throw error;
  }
};

export const forgotPass = async (userData, successMessage) => {
  try {
    const response = await fetch(`${API_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json(); // Assuming the server sends error details in JSON format
      throw new Error(errorData.message); // Adjust this based on the actual structure of the error response
    }

    const data = await response.json();
    toast.success(successMessage);
    return data;
  } catch (error) {
    console.error("Error forget user:", error.message);
    toast.error(error);
    // toast.error("", error);
    throw error;
  }
};

// export const getUserByEmail = async (email) => {
//   try {
//     const response = await fetch(`${API_URL}/user/email-get/${email}`);
//     if (response.ok) {
//       const data = await response.json();

//       return data;
//     } else {
//       throw new Error("Failed to fetch user data");
//     }
//   } catch (error) {
//     console.error("Error fetching user data", error);
//     throw error;
//   }
// };
export const resetPass = async (userData, resetToken, successMessage) => {
  console.log(resetToken);
  try {
    const response = await fetch(
      `${API_URL}/auth/reset-password/${resetToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (!response.ok) {
      const errorData = await response.json(); // Assuming the server sends error details in JSON format
      throw new Error(errorData.message); // Adjust this based on the actual structure of the error response
    }

    const data = await response.json();
    toast.success(successMessage);
    return data;
  } catch (error) {
    console.error("Error logins user:", error);
    toast.error(error);
    // toast.error("", error);
    throw error;
  }
};
