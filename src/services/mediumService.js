export const fetchMediumBlogs = async () => {
    const mediumFeedUrl =
      process.env.REACT_APP_MEDIUM_FEED_URL || "https://medium.com/feed/@greenenergyhub";
  
    try {
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumFeedUrl)}`
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
  
      const data = await response.json();
  
      if (data.status !== "ok") {
        throw new Error("Invalid response from RSS API");
      }
  
      // Add fallback for thumbnails
      const itemsWithThumbnails = data.items.map((item) => {
        const fallbackThumbnail = extractFirstImage(item.content || item.description);
        return {
          ...item,
          thumbnail: item.thumbnail || fallbackThumbnail || "/assets/img/default-thumbnail.jpg",
        };
      });
  
      return itemsWithThumbnails.slice(0, 6); // Return the latest 6 blogs
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  };
  
  // Helper function to extract the first image URL from HTML content
  const extractFirstImage = (html) => {
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };
  