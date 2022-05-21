import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: process.env.REACT_APP_SOURCE,
});

// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3OTA0MjUzLWIzMTYtNGU3My1hZDg3LTg3NTc2MDI0YWZmOSIsImZ1bGxOYW1lIjoiQnVkaSIsImVtYWlsIjoiYW5hZmZpYWRpeXNvckBnbWFpbC5jb20iLCJub1RlbHAiOjIxNDc0ODM2NDcsImFkZHJlc3MiOiJKbC4gTWF3YXIgQm9nb3IiLCJiaXJ0aERheSI6IjE4OTktMTEtMjlUMTY6NTI6NDguMDAwWiIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6InByb2ZpbGUvbHd3Z2lzem1seG1xeGxpMzJoeGwucG5nIiwicm9sZSI6InVzZXIiLCJzdGF0dXMiOiJhY3RpdmUiLCJjcmVhdGVkX2F0IjoiMjAyMi0wNS0xOVQwOTo0MTo1My4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjItMDUtMTlUMTA6MzU6MzAuMDAwWiIsImlhdCI6MTY1Mjk3NjM5NCwiZXhwIjoxNjUzMDYyNzk0fQ.gsYzcsDOaXcD1AVjowtptxv0SOpY9irWQkOfqDLyXkA`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiIntances.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
