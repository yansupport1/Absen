# Deploy ke GitHub Pages

Paket ini tidak memerlukan VPS. Setelah diekstrak, push seluruh isi folder ke branch `main` repository GitHub.

## 1. Tambahkan Firebase secrets

Di GitHub buka **Settings → Secrets and variables → Actions → New repository secret**, lalu tambahkan:

`VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_DATABASE_URL`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`, dan `VITE_FIREBASE_MEASUREMENT_ID`.

Gunakan nilai dari `firebase.config.json`.

## 2. Aktifkan Pages

Buka **Settings → Pages**, pilih **GitHub Actions** sebagai source. Setelah push ke `main`, workflow `.github/workflows/deploy-pages.yml` akan membangun dan menerbitkan web secara otomatis.

## 3. Catatan Firebase

Rules Realtime Database dan file import berada di root proyek. GitHub Pages hanya menyajikan frontend; data tetap tersimpan di Firebase Realtime Database. Jangan commit `.env.local` jika berisi nilai yang ingin Anda kelola lewat GitHub Secrets.
