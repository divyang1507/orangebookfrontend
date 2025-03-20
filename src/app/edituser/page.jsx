"use client";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function EditProfile() {
  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/${session.user.id}`, {
        username: name,
      }, { headers: { Authorization: `Bearer ${session?.user?.token}` } });

      toast.success("Profile updated!");
    } catch (error) {
      toast.error("Update failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <button type="submit">Save</button>
    </form>
  );
}
