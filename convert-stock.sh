#!/bin/bash
# convert-stock.sh — ubah hasil rekaman STOCKGEN (.webm / .mp4) jadi MP4 siap upload situs stok.
# Syarat: ffmpeg terinstall (PC: https://ffmpeg.org/download.html, HP Termux: pkg install -y ffmpeg).
# Cara pakai: taruh script ini di folder berisi hasil rekaman, lalu: bash convert-stock.sh
# Hasil: *_stock.mp4 (H.264 + yuv420p + faststart) di folder yang sama. File asli tidak dihapus.
set -euo pipefail
shopt -s nullglob
count=0
for f in *.webm *.mp4; do
  case "$f" in *_stock.mp4) echo "SKIP   $f  (sudah hasil convert)"; continue;; esac
  out="${f%.*}_stock.mp4"
  if [ -f "$out" ]; then echo "SKIP   $f  (sudah ada ${out})"; continue; fi
  echo "CONVERT  $f  ->  $out"
  ffmpeg -y -hide_banner -loglevel error -i "$f" -c:v libx264 -pix_fmt yuv420p -crf 18 -preset veryfast -movflags +faststart "$out"
  count=$((count + 1))
done
shopt -u nullglob
if [ "$count" -eq 0 ]; then echo "Tidak ada file baru untuk dikonversi."; else echo "Selesai: $count file dikonversi. Upload file *_stock.mp4 ke situs stok."; fi
