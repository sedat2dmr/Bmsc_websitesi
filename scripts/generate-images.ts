import * as fs from "fs";
import * as path from "path";
import * as https from "https";
import * as http from "http";

const HF_API_KEY = process.env.HF_API_KEY || "";
const MODEL = "black-forest-labs/FLUX.1-schnell";
const OUTPUT_DIR = path.join(process.cwd(), "public", "images");

// Image generation plan — 17 images total (within 30 limit)
const IMAGES_TO_GENERATE = [
  // Blog covers (6)
  {
    filename: "blog/blog-1-cover.jpg",
    prompt: "Corporate finance office with digital automation screens showing RPA robotic process automation workflows, professional business environment, dark blue color scheme, modern architecture",
  },
  {
    filename: "blog/blog-2-cover.jpg",
    prompt: "Hospital medical data center with AI analytics dashboard, healthcare professionals analyzing patient data on large screens, clean modern hospital environment",
  },
  {
    filename: "blog/blog-3-cover.jpg",
    prompt: "Modern e-commerce logistics warehouse with autonomous robots and conveyor systems, smart inventory management, high-tech fulfillment center",
  },
  {
    filename: "blog/blog-4-cover.jpg",
    prompt: "Industrial manufacturing plant with predictive maintenance AI sensors and machinery, factory floor with digital twin visualization screens",
  },
  {
    filename: "blog/blog-5-cover.jpg",
    prompt: "Law firm office with automated document processing technology, lawyers using AI legal software, professional corporate legal environment",
  },
  {
    filename: "blog/blog-6-cover.jpg",
    prompt: "Data science team analyzing big data visualization charts on large screens, modern tech office, business intelligence dashboard",
  },
  // Industry heroes (8)
  {
    filename: "industries/finans-bankacilik.jpg",
    prompt: "Istanbul financial district skyscrapers at dusk, banking and finance headquarters, professional corporate atmosphere, blue and gold tones",
  },
  {
    filename: "industries/saglik.jpg",
    prompt: "Modern hospital with AI-powered medical imaging and digital health technology, doctors using advanced diagnostic tools, clean clinical environment",
  },
  {
    filename: "industries/perakende-eticaret.jpg",
    prompt: "Modern retail store with digital integration and e-commerce logistics, smart shelves and checkout technology, contemporary shopping environment",
  },
  {
    filename: "industries/uretim-lojistik.jpg",
    prompt: "Advanced manufacturing facility with robotic assembly lines and automated logistics, smart factory with Industry 4.0 technology",
  },
  {
    filename: "industries/hukuk-hizmetler.jpg",
    prompt: "Prestigious law firm interior with modern legal technology, professional lawyers in conference room, elegant corporate setting with wood paneling",
  },
  {
    filename: "industries/egitim.jpg",
    prompt: "Modern university campus with digital learning technology, students using AI-powered educational platforms on large screens",
  },
  {
    filename: "industries/enerji-altyapi.jpg",
    prompt: "Wind turbines and solar panels with digital monitoring control center, renewable energy infrastructure with smart grid technology",
  },
  {
    filename: "industries/teknoloji-saas.jpg",
    prompt: "Tech startup office with developers and modern workspace, multiple screens showing software dashboards, collaborative innovation environment",
  },
  // Section heroes (3)
  {
    filename: "hero/homepage-hero.jpg",
    prompt: "Aerial view of Istanbul smart city with digital transformation overlay, futuristic business district with light trails, dark blue and gold tones, cinematic",
  },
  {
    filename: "hero/services-hero.jpg",
    prompt: "Modern corporate office with AI and automation technology visualization, business professionals working with holographic displays, professional atmosphere",
  },
  {
    filename: "hero/data-intelligence-hero.jpg",
    prompt: "Abstract data visualization with flowing streams of information, business analytics dashboard background, blue and teal corporate color scheme",
  },
];

function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(dest);
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        downloadFile(response.headers.location!, dest).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on("finish", () => file.close(() => resolve()));
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function generateImage(prompt: string, filename: string): Promise<void> {
  const destPath = path.join(OUTPUT_DIR, filename);

  // Skip if already exists
  if (fs.existsSync(destPath)) {
    console.log(`  ⏭  Skipping (exists): ${filename}`);
    return;
  }

  console.log(`  🎨 Generating: ${filename}`);

  const body = JSON.stringify({
    inputs: `Professional corporate photography, ${prompt}, high quality, photorealistic, 8k resolution, business context, cinematic lighting`,
    parameters: {
      width: 1344,
      height: 768,
      num_inference_steps: 4,
      guidance_scale: 0,
    },
  });

  const response = await fetch(
    `https://router.huggingface.co/hf-inference/models/${MODEL}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json",
        "x-wait-for-model": "true",
      },
      body,
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HF API error ${response.status}: ${text}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    // Might be a URL response
    const json = await response.json() as { url?: string } | { url?: string }[];
    const url = Array.isArray(json) ? (json[0] as { url?: string }).url : (json as { url?: string }).url;
    if (url) {
      await downloadFile(url, destPath);
      console.log(`  ✅ Saved from URL: ${filename}`);
      return;
    }
    throw new Error(`Unexpected JSON response: ${JSON.stringify(json)}`);
  }

  // Binary image response
  const buffer = Buffer.from(await response.arrayBuffer());
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(destPath, buffer);
  console.log(`  ✅ Saved: ${filename}`);
}

async function main() {
  console.log("\n🚀 Forward — Image Generation Script");
  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log(`🖼  Total images: ${IMAGES_TO_GENERATE.length}\n`);

  // Ensure directories exist
  ["blog", "industries", "hero", "avatars"].forEach((dir) => {
    const p = path.join(OUTPUT_DIR, dir);
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
  });

  let success = 0;
  let skipped = 0;
  let failed = 0;

  for (const img of IMAGES_TO_GENERATE) {
    try {
      const destPath = path.join(OUTPUT_DIR, img.filename);
      if (fs.existsSync(destPath)) {
        skipped++;
      } else {
        await generateImage(img.prompt, img.filename);
        success++;
        // Small delay to avoid rate limiting
        await new Promise((r) => setTimeout(r, 500));
      }
    } catch (err) {
      console.error(`  ❌ Failed: ${img.filename} — ${(err as Error).message}`);
      failed++;
    }
  }

  console.log(`\n✨ Done! Generated: ${success}, Skipped: ${skipped}, Failed: ${failed}`);
  if (failed > 0) {
    console.log("⚠️  Some images failed. Run again to retry failed ones.");
  }
}

main().catch(console.error);
