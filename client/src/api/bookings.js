// Add  bookings
export const addBooking = async (bookingData) => {
  console.log(bookingData);
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await response.json();

  return data;
};