import BASE_URL from "../config";

export const subscribeNewsletter = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/newsletter/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (!response.ok) {
      // Handle specific error scenarios
      if (response.status === 400) {
        if (result.message?.includes("already a list member")) {
          throw new Error("You are already subscribed to our newsletter!");
        }
        throw new Error("Invalid email address. Please try again.");
      } else if (response.status === 500) {
        throw new Error("Something went wrong on our end. Please try later.");
      } else {
        throw new Error("Failed to process your request. Please try again.");
      }
    }

    return { success: true, message: "Subscription successful! Welcome aboard." };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error.message); // Log for debugging

    // Return user-friendly error message
    return {
      success: false,
      message: error.message || "Unable to process your request. Please try again later.",
    };
  }
};
