import axios from "axios";

export const FetchFormattedEvent = async (eventCategory, eventName, id) => {
  try {
    const res = await axios.get(
      `https://us-central1-techspardha-87928.cloudfunctions.net/api2/events/description`,
      { params: { eventCategory, eventName } }
    );

    const { data } = res.data;
    if (!data) return null;

    const startDate = new Date(data.startTime);
    const endDate = new Date(data.endTime);
    const formattedDate = `${startDate.toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
    })} - ${endDate.toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
    })}`;

    return {
      id: id || 1,
      name: data.eventName,
      description: data.description?.trim() || "No description available.",
      venue: data.venue || "TBA",
      date: formattedDate,
      category: data.eventCategory,
      image: data.poster || "",
      registerlink: data.document || "",
      detailedlink: data.poster || "", // poster used as detailedlink
    };
  } catch (err) {
    console.error("Error fetching formatted event:", err);
    return null;
  }
};
