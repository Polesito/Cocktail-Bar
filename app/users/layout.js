import User from "@/components/User";
import { loadUsers } from "@/lib/users";
import React from "react";

export default async function Layout({ children }) {
    const users = await loadUsers(10);
  return (
      <div className="flex flex-row h-screen bg-slate-300">
        <div className="w-auto bg-gray-800 text-white">
            <h1 className="text-2xl text-center font-bold p-4">Users</h1>
        {users.map((user) => (
            <User
            key={user.email}
            user={user} 
            />
        ))}
        </div>
        {children}
      </div>
  );
}
