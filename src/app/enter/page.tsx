    "use client";

    import { useState } from "react";
    import { supabase } from "@/lib/supabaseClient";

    export default function EnterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleEnter() {
        setLoading(true);
        setMessage("");

        // 1️⃣ Try Sign In
        const { error: signInError, data: signInData } = await supabase.auth.signInWithPassword({
        email,
        password,
        });

        if (!signInError && signInData.user) {
        setMessage("Signed in successfully!");
        setLoading(false);
        return;
        }

        // 2️⃣ If sign in failed → Sign Up
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        });

        if (signUpError) {
        setMessage(signUpError.message);
        setLoading(false);
        return;
        }

        // 3️⃣ Insert into Users_Table
        if (signUpData.user) {
        const { error: dbError } = await supabase.from("Users_Table").insert({
            id: signUpData.user.id,
            username,
        });

        if (dbError) {
            setMessage("Account created but failed to save username");
        } else {
            setMessage("Account created! Check email for verification if required.");
        }
        }

        setLoading(false);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <div className="max-w-sm w-full bg-gray-800 p-6 rounded-xl space-y-4">
            <h1 className="text-2xl font-bold">Enter App</h1>

            <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <input
            type="text"
            placeholder="Username (for new users)"
            className="w-full p-2 rounded bg-gray-700"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <button
            onClick={handleEnter}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
            >
            {loading ? "Loading..." : "Enter"}
            </button>

            {message && <p className="text-sm text-green-400">{message}</p>}
        </div>
        </div>
    );
    }
