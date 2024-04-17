import { toast } from "react-toastify";
import { API_URL } from "../ProtectedRoute";

export const createPaymentIntent = async (propId, formData, userId, token) => {
  try {
    const response = await fetch(
      `${API_URL}/booking/create-book/${userId}/${propId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.status === 400) {
      const errorData = await response.json();
      throw new Error(errorData.error); // Assuming the server sends error details in JSON format with an "error" field
    }
    if (!response.ok) {
      const errorData = await response.json(); // Assuming the server sends error details in JSON format
      throw new Error(errorData.message); // Adjust this based on the actual structure of the error response
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    // console.error("Error listing user:", error);
    toast.error(error);
    // toast.error("", error);
    throw error;
  }
};

export const CreateBooking = async (
  formData,
  userId,
  token,
  propId,
  successMessage
) => {
  try {
    const response = await fetch(
      `${API_URL}/booking/create-book/${userId}/${propId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.status === 400) {
      const errorData = await response.json();
      throw new Error(errorData.error); // Assuming the server sends error details in JSON format with an "error" field
    }
    if (!response.ok) {
      const errorData = await response.json(); // Assuming the server sends error details in JSON format
      throw new Error(errorData.message); // Adjust this based on the actual structure of the error response
    }

    const data = await response.json();
    toast.success(successMessage);
    return data;
  } catch (error) {
    console.error("Error listing user:", error);
    toast.error(error);
    // toast.error("", error);
    throw error;
  }
};

export const getBookingByUserId = async (userId, token) => {
  try {
    const response = await fetch(`${API_URL}/booking/${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch booking data");
    }
  } catch (error) {
    console.error("Error fetching booking data", error);
    throw error;
  }
};
export const getBookingByPropertyOwnerId = async (ownerId, token) => {
  try {
    const response = await fetch(
      `${API_URL}/booking/propertyOwner/${ownerId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      throw new Error("Failed to fetch booking data");
    }
  } catch (error) {
    console.error("Error fetching booking data", error);
    throw error;
  }
};
