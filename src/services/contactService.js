import BASE_URL from "../config";

export const sendContactForm = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/contact/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send the contact form. Please try again.");
    }

    return { success: true, message: result.message || "Message sent successfully!" };
  } catch (error) {
    return { success: false, message: error.message || "Failed to send the contact form." };
  }
};
