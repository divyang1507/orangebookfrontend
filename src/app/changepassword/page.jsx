"use client";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function ChangePassword() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({ oldPassword: "", newPassword: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/change-password`, {
        currentPassword: formData.oldPassword,
        password: formData.newPassword,
        passwordConfirmation: formData.newPassword,
      }, { headers: { Authorization: `Bearer ${session?.user?.token}` } });

      toast.success("Password changed successfully!");
    } catch (error) {
      toast.error("Failed to change password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl mb-4">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="password" name="oldPassword" placeholder="Old Password" onChange={handleChange} required />
        <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} required />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}
