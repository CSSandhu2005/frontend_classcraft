"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) setErrorMsg(error.message);
    else router.push("/"); // redirect after login
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <form
        onSubmit={handleSignIn}
        className="bg-gray-800 p-6 rounded-xl w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Sign In</h2>
        <input
          type="email"
          className="w-full p-2 rounded bg-gray-700"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full p-2 rounded bg-gray-700"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
