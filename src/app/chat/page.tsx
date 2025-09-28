"use client";

import React, { useState } from "react";
import { generateContent, generateImage } from "../../../services/chatService";

// -------------------- TypeScript Interfaces --------------------
interface GenerateContentResponse {
  message: string;
  responseText: string; // from generateStructuredContent
}

interface GenerateImageResponse {
  message: string;
  imageData: string; // base64 string
}

// -------------------- Component --------------------
export default function ChatPage() {
  const [prompt, setPrompt] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [contentResult, setContentResult] = useState<string>("");
  const [imageData, setImageData] = useState<string>("");

  // -------------------- Generate Content --------------------
  const handleGenerateContent = async () => {
    if (!prompt) {
      alert("Please enter a prompt!");
      return;
    }
    try {
      const data: GenerateContentResponse = await generateContent(prompt, file ?? undefined);
      setContentResult(data.responseText);
      alert(data.message); // ✅ shows message from backend
    } catch (err) {
      console.error("Error generating content:", err);
      alert("Failed to generate content");
    }
  };

  // -------------------- Generate Image --------------------
  const handleGenerateImage = async () => {
    if (!prompt) {
      alert("Please enter a prompt!");
      return;
    }
    try {
      const data: GenerateImageResponse = await generateImage(prompt);
      setImageData(data.imageData);
      alert(data.message); // ✅ shows message from backend
    } catch (err) {
      console.error("Error generating image:", err);
      alert("Failed to generate image");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">AI Generator</h1>

      {/* Prompt Input */}
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block"
        />

        {/* Action Buttons */}
        <div className="space-x-2">
          <button
            onClick={handleGenerateContent}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Generate Content
          </button>
          <button
            onClick={handleGenerateImage}
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            Generate Image
          </button>
        </div>
      </div>

      {/* Display Generated Content */}
      {contentResult && (
        <div className="mt-4 p-2 border rounded bg-gray-50">
          <p className="font-medium">Generated Content:</p>
          <p>{contentResult}</p>
        </div>
      )}

      {/* Display Generated Image */}
      {imageData && (
        <div className="mt-4">
          <p className="font-medium">Generated Image:</p>
          <img
            src={`data:image/png;base64,${imageData}`}
            alt="Generated"
            className="mt-2 border rounded w-80"
          />
        </div>
      )}
    </div>
  );
}
