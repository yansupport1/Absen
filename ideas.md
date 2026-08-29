# Arah Desain — Absensi Sekolah Test

## Tiga Pendekatan

### Theme Name: Civic Blueprint
**Very Brief Intro:** Dashboard institusi yang rapi dengan nuansa biru tinta, kertas hangat, dan aksen hijau validasi. Terasa terpercaya, terstruktur, dan cocok untuk operasional sekolah.

**Probability:** 0.07

### Theme Name: Quiet Campus
**Very Brief Intro:** Antarmuka terang yang tenang, memakai warna kapur, navy lembut, dan detail garis seperti buku catatan. Fokus pada keterbacaan dan ritme kerja harian.

**Probability:** 0.03

### Theme Name: Signal Room
**Very Brief Intro:** Sistem operasi absensi dengan bidang gelap, aksen neon, dan status realtime yang tegas. Lebih berani dan teknis, tetapi tetap fungsional.

**Probability:** 0.09

## Pendekatan Terpilih: Civic Blueprint

### Design Movement
Swiss International Style yang dipadukan dengan editorial civic-tech: tipografi tegas, struktur modular, dan hierarki visual yang jernih.

### Core Principles
1. **Clarity before decoration:** setiap angka, status, dan tindakan penting harus bisa dipindai dalam beberapa detik.
2. **Institutional warmth:** biru tinta memberi rasa percaya, sementara kertas hangat dan hijau daun menghindari kesan korporat yang dingin.
3. **Operational rhythm:** layout dashboard memakai sidebar tetap, kolom kerja asimetris, dan panel yang terasa seperti meja kerja digital.
4. **Evidence-led states:** status aktif, hadir, pending, dan error selalu terlihat melalui kombinasi label, warna, dan ikon—bukan warna saja.

### Color Philosophy
Navy tinta menjadi fondasi otoritas dan keterbacaan. Aksen **school-leaf green** dipakai hanya untuk validasi dan progres, sehingga tindakan sukses terasa bermakna. Latar parchment yang hangat memberi konteks sekolah dan membantu kartu putih tetap punya kedalaman.

### Layout Paradigm
Persistent sidebar di kiri sebagai jangkar orientasi, dengan header kerja yang ringan dan konten utama memakai komposisi asimetris: ringkasan cepat di atas, area data lebar di bawah, dan panel aktivitas yang lebih sempit sebagai rail.

### Signature Elements
1. Garis koordinat tipis dan label uppercase kecil seperti lembar blueprint.
2. Motif kotak QR yang dipakai sebagai aksen mikro di header dan empty states.
3. Status pill berbentuk kapsul pendek dengan ikon, bukan badge besar yang dekoratif.

### Interaction Philosophy
Interaksi harus memberi konfirmasi cepat dan terasa aman. Tombol utama punya respons tekan yang singkat, dialog memakai transisi snappy, dan perubahan data memunculkan toast yang menjelaskan apa yang baru terjadi.

### Animation
Gunakan entrance fade-up ringan 180–240ms untuk panel utama, stagger 40ms pada item live attendance, dan transisi transform/opacity saja. QR preview boleh memakai pulse halus saat aktif. Semua animasi non-esensial dihentikan pada prefers-reduced-motion.

### Typography System
Heading memakai **Space Grotesk** dengan weight 600–700 untuk karakter teknis yang tetap ramah. Body memakai **DM Sans** untuk keterbacaan tabel dan label. Angka statistik memakai Space Grotesk dengan tracking sedikit rapat; label metadata uppercase memakai DM Sans 11–12px dengan letter spacing 0.12em.

### Brand Essence
Platform absensi sekolah yang membantu admin, guru, dan murid menjaga kehadiran tetap akurat, cepat, dan transparan—tanpa alur yang membingungkan.

**Personality:** terpercaya, sigap, teratur.

### Brand Voice
Headline terdengar jelas dan aktif; CTA spesifik pada tindakan; microcopy menjelaskan konsekuensi tanpa nada menggurui.

Contoh headline: **"Kehadiran hari ini, terpantau."**

Contoh CTA: **"Buat QR hari ini"** dan **"Buka daftar murid"**.

### Wordmark & Logo
Mark berbentuk kotak terbuka dengan empat modul sudut yang mengisyaratkan QR dan denah kelas; wordmark menggunakan Space Grotesk semi-bold dengan satu potongan garis hijau pada huruf awal.

### Signature Brand Color
**School-leaf green — #2F8F6B**, dipakai sebagai sinyal kehadiran tervalidasi dan elemen aksen yang paling mudah dikenali.

## Keputusan Implementasi Versi Test

Versi ini menggunakan **localStorage** sebagai adapter penyimpanan sementara. Data seed berisi akun admin, guru approved, murid, kelas, dan contoh absensi. Lapisan data akan dipisahkan dalam `client/src/lib/testStore.ts` agar pada versi Firebase, fungsi baca/tulis dapat diganti tanpa mengubah komponen UI.

QR dibuat sebagai token sesi dinamis di sisi browser untuk simulasi, memiliki `sessionId`, `classId`, `date`, `expiresAt`, dan token acak. Validasi scan memeriksa kelas, tanggal, status aktif, masa berlaku, dan duplikasi absensi harian. Karena ini versi frontend-only, kontrol keamanan server-side dari spesifikasi final masih menjadi pekerjaan wajib saat migrasi ke Firebase/backend.

## Style Decisions

- Login screens use a civic split-sheet composition: ink-navy blueprint field for institutional identity, parchment access panel for action, with QR-corner geometry repeated subtly on both sides.
- The NADI wordmark must never appear as plain text only; it is always paired with the open-square QR/classroom mark and a small school-leaf green cut/detail.
- School-leaf green `#2F8F6B` is reserved for validated states, primary entry actions, and key headline emphasis; neutral structure should come from navy, parchment, white panels, and fine blueprint linework.
- The access panel uses editorial metadata, fine rules, and a restrained blueprint grid so the login surface belongs to the same operating system as the dashboard.
