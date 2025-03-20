"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // For navigation

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Fetch user from Strapi on initial load (if logged in)
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
        } catch (error) {
          console.error("Failed to fetch user:", error);
          setUser(null);
        }
      }
    };
    fetchUser();
  }, []);

  // Login function
  const login = async (formData) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, formData);
      localStorage.setItem("token", res.data.jwt); // Store token
      setUser(res.data.user);
      router.push("/dashboard"); // Redirect after login
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  // Register function
  const register = async (formData) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`, formData);
      localStorage.setItem("token", res.data.jwt); // Store token
      setUser(res.data.user);
      router.push("/"); // Redirect after registration
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
