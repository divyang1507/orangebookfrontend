"use client";

import { useUser } from "../context/UserContext";


export default function Dashboard() {
  const { user, logout } = useUser();

  return (
    <div className="p-6">
      <h2 className="text-2xl">Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}
