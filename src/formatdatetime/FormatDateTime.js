export const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

 export const formatTime = (dateStr) => {
    return new Date(dateStr).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };