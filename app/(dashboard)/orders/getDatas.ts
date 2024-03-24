import axios from "axios";

const fetchAllOrders = async () => {
  const res = await axios.get('https://swiftmunch.onrender.com/orders/admin-all-orders/', {
    headers: {
      "content-Type": "application/json",
      "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5MTEzMDkyLCJpYXQiOjE3MDc1NzcwOTIsImp0aSI6ImM5N2RlZDEzMmU2YTRlMTQ4MjMwM2YxMThhNTc4MzA0IiwidXNlcl9pZCI6MX0.QYa9qYisHQErzeFVMep9g2Q-x1Dvj5mxykGPXVcaU8M`
    },
  })

  const data = await res.data;

  return data;
}
const fetchDailyOrders = async () => {
  const res = await axios.get('https://swiftmunch.onrender.com/orders/admin-daily-orders/', {
    headers: {
      "content-Type": "application/json",
      "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5MTEzMDkyLCJpYXQiOjE3MDc1NzcwOTIsImp0aSI6ImM5N2RlZDEzMmU2YTRlMTQ4MjMwM2YxMThhNTc4MzA0IiwidXNlcl9pZCI6MX0.QYa9qYisHQErzeFVMep9g2Q-x1Dvj5mxykGPXVcaU8M`
    },
  });

  const data = await res.data;

  return data;

}

export { fetchAllOrders, fetchDailyOrders }