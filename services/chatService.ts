import api  from "../utils/api";

// -------------------- Interfaces --------------------
export interface GenerateContentResponse {
  message: string;
  responseText: string; // adjust according to your handleContentGeneration return
}

export interface GenerateImageResponse {
  message: string;
  imageData: string; // base64 string
}

// -------------------- Functions --------------------

// Generate content (with optional file)
export const generateContent = async (
  prompt: string,
  file?: File
): Promise<GenerateContentResponse> => {
  const formData = new FormData();
  formData.append("prompt", prompt);
  if (file) formData.append("file", file);

  const { data } = await api.post<GenerateContentResponse>(
    "/generate-content",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return data;
};

// Generate image (stateless)
export const generateImage = async (
  prompt: string
): Promise<GenerateImageResponse> => {
  const { data } = await api.post<GenerateImageResponse>("/generate-image", { prompt });
  return data;
};
