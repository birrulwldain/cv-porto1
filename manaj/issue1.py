import requests
import os

# Konfigurasi
REPO = "birrulwldain/cv-porto1"  # Ganti dengan repo kamu
TOKEN = os.getenv("GH_TOKEN")  # Set token via environment variable

headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Accept": "application/vnd.github+json"
}

issues = [
    {
        "title": "[EPIC] Struktur & Navigasi",
        "body": "Buat layout dasar, routing, dan landing page",
        "assignees": ["birrulwldain"],
        "labels": ["epic", "frontend"],
        "milestone": "v1.0",
        "projects": ["cv-porto-setup"]
    },
    {
        "title": "Landing Page",
        "body": "Nama, bidang, tombol CV, GitHub, Kontak",
        "assignees": ["birrulwldain"],
        "labels": ["frontend", "UI"],
        "milestone": "v1.0",
        "projects": ["cv-porto-setup"]
    },
    {
        "title": "Navigasi dan Routing",
        "body": "Buat navigasi ke /tentang, /portofolio, /kontak",
        "assignees": ["birrulwldain"],
        "labels": ["frontend", "routing"],
        "milestone": "v1.0"
    },
    {
        "title": "[EPIC] Halaman Tentang Saya",
        "body": "Profil singkat, latar pendidikan, link CV",
        "assignees": ["birrulwldain"],
        "labels": ["epic", "tentang-saya"],
        "milestone": "v1.0"
    },
    {
        "title": "[EPIC] Portofolio Proyek",
        "body": "Isi dengan skripsi, LSTM, dan proyek lainnya",
        "assignees": ["birrulwldain"],
        "labels": ["epic", "portofolio"],
        "milestone": "v1.0"
    },
    {
        "title": "Skripsi: Simulasi Spektrum",
        "body": "Tampilkan hasil, visualisasi, repo",
        "assignees": ["birrulwldain"],
        "labels": ["skripsi", "visualisasi", "data"],
        "milestone": "v1.0"
    },
    {
        "title": "Proyek LSTM",
        "body": "Visualisasi arsitektur model, prediksi spektrum",
        "assignees": ["birrulwldain"],
        "labels": ["machine-learning", "LSTM", "visualisasi"],
        "milestone": "v1.0"
    },
    {
        "title": "[EPIC] Kontak & Profil",
        "body": "Form kontak + link GitHub, LinkedIn",
        "assignees": ["birrulwldain"],
        "labels": ["epic", "kontak"],
        "milestone": "v1.0"
    },
    {
        "title": "[EPIC] Deployment",
        "body": "Setup CI/CD, domain, dan auto-deploy",
        "assignees": ["birrulwldain"],
        "labels": ["epic", "deployment", "CI/CD"],
        "milestone": "v1.0"
    }
]


for issue in issues:
    url = f"https://api.github.com/repos/{REPO}/issues"
    res = requests.post(url, headers=headers, json=issue)
    print(f"Issue '{issue['title']}': {res.status_code}")
