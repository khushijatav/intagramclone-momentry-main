import axiosInstance from "./axiousInstance";
import { apiPaths } from "./apiPaths";

export const registerUserApi = async (payload) => {
    try {
//checkinsg if the email is already registered
const isExist = await axiosInstance.get(`${apiPaths.USER}?email=${payload.email}`);
if (isExist?.data?.length >0) {
  alert("Email is already registered. Please use a different email.");
  return;
}


  const response = await axiosInstance.post(apiPaths.USER, payload);
  alert("User registered successfully!");
  return response.data; 

    } catch (error) {
console.log("Error registering user:", error);
throw new Error(error);
    }
};


export const loginUserApi = async (payload) => {
    try {
        const isExist = await axiosInstance.get(`${apiPaths.USER}?email=${payload.email}`);
if (isExist?.data?.length < 0) {
  alert("Invalid email. Please try again.");
  return;
}
///password maching
if (isExist?.data?.[0]?.password !== payload.password) {
  alert("Invalid password. Please try again.");
  return;
}
localStorage.setItem("loginStatus","mommentryLoggedIn")
localStorage.setItem("loggedUser", JSON.stringify(isExist?.data?.[0]));
return true;
    } catch (error) {
        console.log("Error logging in user:", error);
throw new Error(error);
    }   
};
        
        
    
    