#!/usr/bin/env bash
# Generate all images for workerscompensationexemption.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/workerscompensationexemption.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — WORKERS COMP EXEMPTION ===

gen "hero.jpg" \
  "Photorealistic wide shot of a professional business owner or contractor reviewing workers compensation exemption paperwork at a clean modern desk, professional business photography, good lighting, no text" 4

gen "coverage.jpg" \
  "Photorealistic photo of a business consultation scene with an insurance agent and contractor reviewing workers comp documents together at an office table, professional photography, no text" 4

gen "about.jpg" \
  "Photorealistic portrait of a confident licensed insurance professional in business attire at a professional office desk, friendly expression, clean background, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide panoramic photo of a professional insurance office scene with business documents, certificates, and a consultant assisting a contractor client, professional photography, no text" 4 1216 640

gen "exemption-filing.jpg" \
  "Photorealistic photo of a person filling out an official state exemption form on a desk with a laptop and business documents nearby, professional business photography, no text" 4

gen "sole-proprietor-exemption.jpg" \
  "Photorealistic photo of a self-employed contractor in work clothes reviewing paperwork at a job site trailer, professional photography, no text" 4

gen "corporate-officer-exemption.jpg" \
  "Photorealistic photo of corporate executive signing an exemption form in a modern office, business professional setting, no text" 4

gen "llc-member-exemption.jpg" \
  "Photorealistic photo of LLC business owners reviewing state compliance documents together at a conference table, professional business photography, no text" 4

gen "exemption-review.jpg" \
  "Photorealistic photo of an insurance professional reviewing eligibility documents on a computer screen with physical files on desk, professional office photography, no text" 4

gen "alternative-coverage.jpg" \
  "Photorealistic photo of contractor and insurance agent reviewing alternative workers compensation policy options together, professional consultation scene, no text" 4

gen "ghost-policy.jpg" \
  "Photorealistic photo of a sole proprietor contractor reviewing a minimal workers comp certificate of insurance at a desk, clean business photography, no text" 4

gen "state-compliance.jpg" \
  "Photorealistic photo of a professional holding a certificate of insurance and state compliance documents, professional business setting, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
