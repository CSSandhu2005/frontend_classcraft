"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function EnterPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [fetchedUsername, setFetchedUsername] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // Check logged in user on mount
  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setCurrentUser(user);
        await fetchUsername(user.id);
      }
    };
    init();
  }, []);

  // Fetch username from users_table
  const fetchUsername = async (userId: string) => {
    const { data, error } = await supabase
      .from("users_table")
      .select("username")
      .eq("id", userId)
      .single();
    if (!error && data) setFetchedUsername(data.username);
  };

  // Sign Up
  const handleSignUp = async () => {
    setMessage(null);
    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) setMessage(error.message);
    else setMessage("Check your email to verify your account!");
  };

  // Login
  const handleLogin = async () => {
    setMessage(null);
    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    else {
      setCurrentUser(data.user);
      await fetchUsername(data.user.id);
    }
  };

  // Save username for new users
  const handleSaveUsername = async () => {
    if (!currentUser || !usernameInput.trim()) {
      setMessage("Please enter a username.");
      return;
    }
    const { error } = await supabase.from("users_table").insert({
      id: currentUser.id,
      username: usernameInput.trim(),
    });
    if (error) setMessage("Failed to save username.");
    else {
      setFetchedUsername(usernameInput.trim());
      setMessage("Username saved successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="max-w-sm w-full bg-gray-800 p-6 rounded-xl space-y-4">
        {/* Logged in + username exists */}
        {currentUser && fetchedUsername ? (
          <h1 className="text-2xl font-bold text-white">Hi, {fetchedUsername}!</h1>

        // Logged in + no username yet
        ) : currentUser && !fetchedUsername ? (
          <>
            <h1 className="text-2xl font-bold text-white">Set Your Username</h1>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={usernameInput || ""}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
            <button
              onClick={handleSaveUsername}
              className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold mt-2"
            >
              Enter
            </button>
            {message && <p className="text-sm text-green-400">{message}</p>}
          </>
        ) : (
          <>
            {/* Not logged in */}
            <h1 className="text-2xl font-bold text-white">Login / Sign Up</h1>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex gap-2 mt-2">
              <button
                className="w-1/2 bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="w-1/2 bg-green-600 hover:bg-green-700 p-2 rounded font-semibold"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
            {message && <p className="text-sm text-green-400 mt-2">{message}</p>}
          </>
        )}
      </div>
    </div>
  );
}