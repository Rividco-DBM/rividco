import BASE_URL from "../config";

import axios from 'axios';

export const sendContactForm = async (data) => {
  try {
    const response = await axios.post("https://rividco.vercel.app/api/contact/send", data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return { success: true, message: response.data.message || 'Message sent successfully!' };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to send the contact form.',
    };
  }
};
