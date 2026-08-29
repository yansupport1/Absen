# Absensi Digital — SMPN 7 Surakarta

Versi ini memakai **Firebase Realtime Database saja** untuk akun username, profil, kelas, QR, serta absensi. Tidak ada Gmail/email, seed murid, guru, kelas, QR, atau absensi bohongan di source aplikasi.

## Konfigurasi

Salin nilai Firebase Web Config yang diberikan pemilik proyek ke `.env.local` dengan nama `VITE_FIREBASE_*`. File `.env.local` dipakai saat development/build lokal dan tidak boleh diisi password admin. Firebase Web API key bukan password; akses data dikunci oleh `database.rules.json`.

## Membuat admin pertama

Buat node profil admin langsung di Realtime Database dengan username unik. Tidak ada akun admin atau password admin yang ditulis di source code. Contoh node:

```json
{
  "users": {
    "UID_ADMIN": {
      "uid": "UID_ADMIN",
      "name": "Administrator",
      "username": "admin-smp7",
      "role": "admin",
      "status": "approved"
    }
  }
}
```

Password disimpan sebagai hash SHA-256 di node `credentials`, bukan teks biasa. Admin adalah satu-satunya role yang seharusnya dapat menyetujui guru melalui UI. Karena sistem username-only tanpa server/Auth, jangan gunakan Rules publik untuk data produksi sensitif; gunakan Rules yang membatasi write admin pada deployment serius.

## Alur guru dan kelas

Guru mendaftar memakai username, password, nama, dan nama kelas yang dibuat sendiri. Profil guru dan kelas dibuat dengan status `pending`. Setelah admin menekan persetujuan, status profil berubah menjadi `approved` dan status kelas menjadi `active`. Murid hanya dapat mendaftar ke kelas yang sudah aktif.

## Alur absensi realtime

Guru menampilkan QR kelas. QR berisi `classId`, token unik, tanggal Jakarta, dan waktu kedaluwarsa 00.00. Guru melihat absensi kelasnya melalui listener realtime. Murid dapat memindai lewat kamera atau mengimpor foto QR dari galeri. Satu murid hanya dapat menyimpan satu absensi per tanggal dan kelas.

Aplikasi melakukan refresh state setiap 5 detik. Ketika tanggal berubah atau QR kedaluwarsa, guru otomatis membuat token QR baru. Data absensi dipisahkan berdasarkan tanggal sehingga status harian tidak tercampur dengan hari sebelumnya.

## Deploy Rules

```bash
firebase deploy --only database
```

Pastikan `database.rules.json` diterapkan di Firebase Realtime Database. Username-only berarti autentikasi dikelola oleh adapter aplikasi; untuk keamanan tingkat produksi, tambahkan backend terpercaya atau Firebase Auth/Cloud Functions sebelum membuka akses publik.

## Menjalankan

```bash
pnpm install
pnpm check
pnpm build
pnpm dev
```

Mode tema dapat dipilih melalui tombol Dark mode / White mode. Sesi login Firebase menggunakan persistensi browser; logout memanggil Firebase Auth dan membersihkan profil lokal.
