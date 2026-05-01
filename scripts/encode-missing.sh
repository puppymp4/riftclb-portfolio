#!/usr/bin/env bash
set -e

FFMPEG="/c/Users/sande/AppData/Local/Programs/Python/Python312/Lib/site-packages/imageio_ffmpeg/binaries/ffmpeg-win-x86_64-v7.1.exe"
SRC="/c/Users/sande/Documents/!WEBS/RIFT MEDIA/VIDEOS"
OUT_VID="/c/Users/sande/Desktop/rm-web-builds/riftclb-portfolio/public/videos"
OUT_POS="/c/Users/sande/Desktop/rm-web-builds/riftclb-portfolio/public/posters"

mkdir -p "$OUT_VID" "$OUT_POS"

# slug | source filename
MAP=(
  "amg-glc-speedramp|Amg glc 63s speedramp.mp4"
  "amg-wrap-speedramp|Amg Wrap Speedramp.mp4"
  "bmw-burn|Bmw burn video.mp4"
  "m4-speed-ramp|M4 speed ramp type shit_5_prob4.mp4"
  "truck-show-speedramp|Truck Show Speed Ramp.mp4"
  "before-after-truck|before and after Truck Video.mp4"
  "car-reel-01|car reel 1.mp4"
  "car-reel-02|car reel 2.mp4"
  "car-reel-03|car reel 3.mp4"
  "car-reel-04|car reel4.mp4"
  "car-reel-05|car reel 5.mp4"
  "m4-reel|M4_1_prob4.mp4"
  "poppin-them-thangz|POPPIN THEM THANGZss_3_prob4.mp4"
  "porsche-fresno|Porsche Fresno.mp4"
  "mitsubishi-fresno|Misubishi Fresno video.mp4"
  "porsche-fort-meet|Porsche FORT meet.mp4"
  "red-chickz-ad|The Red Chickz Ad.mp4"
  "food-vol-01|food video 1.mp4"
  "food-vol-02|food video 2.mp4"
  "tnf-preworkout|TNF Preworkout Video.mp4"
  "steph-gym|Steph GYm Video_1_prob4.mp4"
  "real-estate-agent|Real Estate Agent Video.mp4"
  "real-estate-edit-01|Real Estate edit 1.mp4"
  "real-estate-edit-02|Real Estate edit 2.mp4"
  "real-estate-reel-01|real estate reel1.mp4"
  "gls-tint|GLS TINT_1_prob4.mp4"
  "construction-reel-01|construcion reel 1.mp4"
)

for entry in "${MAP[@]}"; do
  slug="${entry%%|*}"
  fname="${entry#*|}"
  src="$SRC/$fname"
  vid_out="$OUT_VID/$slug.mp4"
  pos_out="$OUT_POS/$slug.jpg"

  if [[ ! -f "$src" ]]; then
    echo "MISSING SOURCE: $src"
    continue
  fi

  echo "==> $slug"
  "$FFMPEG" -y -loglevel error -ss 2 -t 5 -i "$src" -an -c:v libx264 -crf 28 -preset veryfast -pix_fmt yuv420p -vf "scale=1280:-2" -movflags +faststart "$vid_out" </dev/null
  "$FFMPEG" -y -loglevel error -ss 2 -i "$src" -frames:v 1 -vf "scale=1280:-2" -q:v 4 "$pos_out" </dev/null
done

echo "DONE."
