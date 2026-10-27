# Vector Stock Generator

Perkakas stok prosedural buat kalangan sendiri: generator vektor, Vector Studio,
Pola (Koreksi), studio video, dan katalog 1200 aset unik. Semua jalan offline
di browser, tanpa API key. Halaman depan dipasangi gerbang password model
landing page.

## Isi folder

- `index.html` — Generator vektor prosedural (13 tema)
- `studio.html` — Vector Studio (1000 ikon x 100 pola)
- `pola.html` — Pola Koreksi (9 gaya pola, offline penuh)
- `video.html` — Studio video stok (50 scene)
- `aset.html` — Katalog 1200 aset unik (motif x susunan x aksen)
- `huruf.html` — Pola Huruf v3: huruf A-Z dalam 10 font open source SIL OFL (Inter, Montserrat, Bebas Neue, Playfair Display, Merriweather, Oswald, Anton, Space Grotesk, Zilla Slab, JetBrains Mono; subset A-Z di-embed base64, tanpa handwriting), 9 gaya pola incl. Sebar (ala Scatter Aset, saling tumpuk) + Tumpuk, 100 palet dari file Studio (disalin semua, tiap generate 40 palet berbeda, warna tidak terulang dalam satu grid), 40 varian, ekspor ZIP
- `gate.js` — Gerbang password landing page (dipakai semua halaman)
- `convert-stock.bat` / `convert-stock.sh` — Convert hasil rekaman video jadi
  MP4 siap stok (H.264 + faststart)
- `.nojekyll` — Supaya GitHub Pages tidak memproses situs ini pakai Jekyll

## Cara publish ke GitHub Pages (tanpa terminal)

1. Buat repo baru di github.com (boleh private, tapi Pages gratis hanya jalan
   dari repo publik).
2. Upload semua file di folder ini ke repo (drag-drop di web UI).
3. Buka Settings → Pages → Build and deployment → Source: Deploy from a branch
   → Branch: main, folder: / (root) → Save.
4. Tunggu sekitar 1 menit. Situs live di `https://<username>.github.io/<repo>/`.

## Cara ganti password gerbang

1. Buka file `gate.js`, baris paling atas: `var GATE_PASSWORD = '...';`
2. Ganti `'GANTI-DENGAN-PASSWORD-KAMU'` dengan password pilihan kamu.
3. Commit/upload ulang `gate.js`.

Catatan jujur: password ini terlihat di source code halaman, jadi pakai password
khusus buat gerbang ini saja, jangan password akun penting. Gerbang ini
penghalang kasual buat kalangan sendiri, bukan pengaman serius.

## Update

Tiap ada update, upload ulang file yang berubah (atau push via git kalau
pakai terminal). File-file di sini adalah salinan dari folder `dist` sumber.
