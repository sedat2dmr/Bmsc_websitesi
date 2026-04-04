import { fal } from "@fal-ai/client";

fal.config({
  credentials: process.env.FAL_API_KEY,
});

async function generateWithHuggingFace(prompt: string): Promise<string> {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: `Professional corporate photography, ${prompt}, high quality, photorealistic, business context, clean composition, premium aesthetic`,
        parameters: { width: 1280, height: 720 },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`HuggingFace error: ${response.status}`);
  }

  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  return `data:image/jpeg;base64,${base64}`;
}

export async function generateImage(
  prompt: string,
  filename?: string
): Promise<string> {
  // Try Fal.ai first
  try {
    const result = await fal.subscribe("fal-ai/flux/dev", {
      input: {
        prompt: `Professional corporate photography, ${prompt}, high quality, photorealistic, business context, clean composition, premium aesthetic`,
        image_size: "landscape_16_9",
        num_inference_steps: 28,
        guidance_scale: 3.5,
        num_images: 1,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = result.data as any;
    const url = data?.images?.[0]?.url || data?.image?.url || "";

    if (url) return url;
    throw new Error("No image URL from Fal.ai");
  } catch (falError) {
    console.warn("Fal.ai failed, trying HuggingFace:", falError);

    // Fallback to HuggingFace
    try {
      return await generateWithHuggingFace(prompt);
    } catch (hfError) {
      console.error("HuggingFace also failed:", hfError);
      return `https://placehold.co/1280x720/003366/ffffff?text=${encodeURIComponent(
        filename || "Image"
      )}`;
    }
  }
}

export async function generateAndStoreImage(
  prompt: string,
  filename: string
): Promise<string> {
  const url = await generateImage(prompt, filename);

  if (
    process.env.BLOB_READ_WRITE_TOKEN &&
    process.env.BLOB_READ_WRITE_TOKEN !== "your_vercel_blob_token_here" &&
    !url.startsWith("data:")
  ) {
    try {
      const { put } = await import("@vercel/blob");
      const imageResponse = await fetch(url);
      const imageBlob = await imageResponse.blob();
      const { url: blobUrl } = await put(`generated/${filename}.jpg`, imageBlob, {
        access: "public",
        contentType: "image/jpeg",
      });
      return blobUrl;
    } catch (e) {
      console.error("Vercel Blob upload error:", e);
    }
  }

  return url;
}
