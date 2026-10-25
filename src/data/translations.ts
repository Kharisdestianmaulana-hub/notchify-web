export interface Translations {
  nav: {
    features: string;
    demo: string;
    specs: string;
    permissions: string;
    faq: string;
    download: string;
    github: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    lede: string;
    downloadBtn: string;
    githubBtn: string;
    downloadsCount: string;
    versionInfo: string;
    universalBadge: string;
    releaseNotice: string;
    statusDev: string;
    statusReleased: string;
    downloadDisabled: string;
    devVersionTag: string;
    devNotice: string;
  };
  simulator: {
    title: string;
    subtitle: string;
    tabIdle: string;
    tabMedia: string;
    tabClipboard: string;
    tabShelf: string;
    tabPomodoro: string;
    tabSystem: string;
    nowPlaying: string;
    artist: string;
    track: string;
    shelfHint: string;
    shelfSub: string;
    pomoWork: string;
    pomoRest: string;
    cpu: string;
    ram: string;
    explanations: Record<string, {
      title: string;
      tagline: string;
      desc: string;
    }>;
  };
  moreUtilities: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc: string;
      tag: string;
    }>;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc: string;
      tag: string;
    }>;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    shortcutTitle: string;
    shortcutDesc: string;
    triggerTitle: string;
    triggerDesc: string;
    fullscreenTitle: string;
    fullscreenDesc: string;
  };
  permissions: {
    title: string;
    subtitle: string;
    accessibilityTitle: string;
    accessibilityDesc: string;
    screenTitle: string;
    screenDesc: string;
    privacyPromiseTitle: string;
    privacyPromiseDesc: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  downloadSec: {
    title: string;
    subtitle: string;
    readyNotice: string;
    btnLabel: string;
    statusDevBanner: string;
    statusReleasedBanner: string;
    btnDevLabel: string;
    btnDevTag: string;
    devNotice: string;
    buildFromSourceBtn: string;
    buildFromSourceDesc: string;
    specsTitle: string;
    minOs: string;
    arch: string;
    license: string;
  };
  footer: {
    desc: string;
    linksTitle: string;
    legalTitle: string;
    disclaimer: string;
    rights: string;
  };
}

export const translations: Record<'en' | 'id', Translations> = {
  en: {
    nav: {
      features: "Features",
      demo: "Live Preview",
      specs: "Specs",
      permissions: "Permissions",
      faq: "FAQ",
      download: "Download .dmg",
      github: "GitHub",
    },
    hero: {
      badge: "macOS 12.0 Monterey to Latest",
      title: "The Dynamic Island,",
      titleHighlight: "built for Mac.",
      lede: "A refined desktop utility that rests seamlessly on your MacBook notch. Control playback with synced lyrics, hold files temporarily, view recent clipboard items, and monitor hardware without breaking focus.",
      downloadBtn: "Download for Mac",
      githubBtn: "Source Code",
      downloadsCount: "downloads",
      versionInfo: "Universal Binary (Apple Silicon & Intel)",
      universalBadge: "Open Source",
      releaseNotice: "Direct .dmg download from official GitHub Releases",
      statusDev: "In Development",
      statusReleased: "Public Release Available",
      downloadDisabled: "Installer in Development",
      devVersionTag: "v0.1.0 (Dev)",
      devNotice: "Official .dmg installer is being prepared. It will become downloadable here upon release.",
    },
    simulator: {
      title: "Interactive Notch",
      subtitle: "Experience how Notchify naturally expands from your hardware notch into an adaptable productivity panel.",
      tabIdle: "Resting",
      tabMedia: "Music",
      tabClipboard: "Clipboard",
      tabShelf: "Dropzone",
      tabPomodoro: "Focus Timer",
      tabSystem: "System Monitor",
      nowPlaying: "Now Playing",
      artist: "Charlie Puth",
      track: "Cheating on You",
      shelfHint: "Drop files to stage",
      shelfSub: "Temporary shelf for easy drag-and-drop",
      pomoWork: "Focus Session",
      pomoRest: "Short Break",
      cpu: "Apple Silicon CPU",
      ram: "Unified Memory",
      explanations: {
        idle: {
          title: "Resting Notch State",
          tagline: "Zero distraction when idle",
          desc: "A slender hardware contour showing a subtle green status indicator, current clock, and the golden resting mascot eyes. Expands naturally on hover or keyboard shortcut."
        },
        music: {
          title: "Now Playing & Synced Lyrics",
          tagline: "Real-time lyric engine for Apple Music & Spotify",
          desc: "Displays current track artwork, playback progress, playback controls, and synchronized live lyrics with zero audio delay or system lag."
        },
        clipboard: {
          title: "Smart Clipboard History",
          tagline: "Quick access to your recent copies",
          desc: "Stores your recent clips in secure volatile memory. Re-copy snippets or paste with a single tap, with automatic detection of sensitive tokens."
        },
        shelf: {
          title: "Dropzone Staging Shelf",
          tagline: "Temporary holding area for files & folders",
          desc: "Drag files or screenshots directly to the notch to hold them while switching spaces or applications, then drop them into your target window."
        },
        pomodoro: {
          title: "Pomodoro Focus Timer",
          tagline: "Structured productivity intervals",
          desc: "Customizable 25-minute focus intervals and short rest breaks directly at the top of your display, keeping you focused without intrusive popups."
        },
        system: {
          title: "System Hardware Monitor",
          tagline: "Real-time Apple Silicon performance",
          desc: "Tracks unified CPU activity percentage, memory pressure (RAM GB), and battery charge status with low-power efficiency."
        }
      }
    },
    moreUtilities: {
      badge: "Built-in Utilities",
      title: "Everything you glance at, all in one place.",
      subtitle: "Hover near the notch to open, move away to close. Nothing to configure or pin.",
      items: [
        {
          title: "Music from any player",
          desc: "Spotify, Apple Music, YouTube in browser: view playing track, skip, pause, and seek without switching windows.",
          tag: "Music"
        },
        {
          title: "Synced lyrics",
          desc: "Click the lyrics button, the notch splits in two, and each line highlights in real-time as it's sung. Click any line to jump directly to it.",
          tag: "Lyrics"
        },
        {
          title: "Focus timer",
          desc: "Start a Pomodoro session and track the countdown right in the notch. A subtle chime notifies you when it's time for a break.",
          tag: "Focus"
        },
        {
          title: "Hydration reminder",
          desc: "Set your bottle volume and daily goal. Notchify reminds you during active hours and keeps track of your daily intake.",
          tag: "Health"
        },
        {
          title: "File shelf",
          desc: "Drag files to the notch to hold them temporarily, then drag them out into chats, emails, or another folder.",
          tag: "Shelf"
        },
        {
          title: "To-dos with reminders",
          desc: "Jot down tasks, schedule deadlines, and the notch gently alerts you when the time arrives.",
          tag: "Tasks"
        },
        {
          title: "Volume, brightness, and HUD",
          desc: "Sleek indicators for volume and display brightness, plus subtle heads-up banners for Caps Lock and input source changes.",
          tag: "System HUD"
        },
        {
          title: "Battery, Wi-Fi, and audio",
          desc: "Instant glanceable banners when your charger is connected, network drops, or earbuds connect.",
          tag: "Peripherals"
        }
      ]
    },
    features: {
      title: "Thoughtful Desktop Details",
      subtitle: "Designed around native AppKit and SwiftUI ergonomics to feel like part of macOS.",
      items: [
        {
          title: "Fluid Spring Dynamics",
          desc: "Elastic, hardware-tuned physics ensure the notch expands and snaps back without layout jank or window flicker.",
          tag: "Spring Physics",
        },
        {
          title: "Automatic Fullscreen Evasion",
          desc: "Retracts into the bezel when watching movies or running full-screen games, then reappears when you exit.",
          tag: "Auto-hide",
        },
        {
          title: "Global Shortcut Access",
          desc: "Toggle Notchify from anywhere on your system with Cmd + Shift + N, leaving your cursor undisturbed.",
          tag: "Cmd + Shift + N",
        },
        {
          title: "Staging File Shelf",
          desc: "Drag files up to the notch to hold them while switching spaces or full-screen apps, then drop them into your target window.",
          tag: "Drag and Drop",
        },
        {
          title: "Synced Lyrics and Audio Control",
          desc: "Compact player with synchronized lyrics for Apple Music and Spotify with zero audio delay.",
          tag: "Music and Lyrics",
        },
        {
          title: "Near-Zero Footprint",
          desc: "Idles under 50 MB memory and below 0.5% CPU. Built directly against system APIs with zero webview overhead.",
          tag: "Low Overhead",
        },
        {
          title: "Dual Language Support",
          desc: "Includes comprehensive English and Indonesian localization toggleable at any time.",
          tag: "Bilingual",
        },
        {
          title: "Zero Remote Telemetry",
          desc: "Your clipboard history, staged files, and habits stay in local volatile memory. Nothing is tracked or transmitted.",
          tag: "Private",
        },
      ],
    },
    howItWorks: {
      title: "Designed for Everyday Workflow",
      subtitle: "Minimal presence when idle, instant information when summoned.",
      shortcutTitle: "Keyboard First",
      shortcutDesc: "Summon or dismiss Notchify instantly with Cmd + Shift + N from any application or space.",
      triggerTitle: "Configurable Triggers",
      triggerDesc: "Choose whether to expand on mouse hover or require an explicit click on the notch area.",
      fullscreenTitle: "Intelligent Auto-Hide",
      fullscreenDesc: "Automatically detects full-screen video players and slide presentations to prevent visual obstruction.",
    },
    permissions: {
      title: "System Permissions Explained",
      subtitle: "We believe in complete transparency regarding macOS system permissions.",
      accessibilityTitle: "Accessibility API",
      accessibilityDesc: "Used exclusively to capture the global Cmd + Shift + N key combination across applications.",
      screenTitle: "Screen Recording Permission",
      screenDesc: "Used strictly to read window geometry so Notchify knows when an app enters full screen. Screen pixels are never captured or saved.",
      privacyPromiseTitle: "Open Source Assurance",
      privacyPromiseDesc: "No database. No user analytics. No remote telemetry. Inspect the complete code on GitHub anytime.",
    },
    faq: {
      title: "Questions and Answers",
      subtitle: "Everything you need to know about compatibility, security, and setup.",
      items: [
        {
          q: "Is Notchify completely free?",
          a: "Yes. Notchify is free open-source software distributed under the MIT license.",
        },
        {
          q: "Which Mac models and OS versions are supported?",
          a: "Notchify supports macOS 12.0 Monterey all the way to the latest macOS versions. It is compiled natively as a Universal Binary, running seamlessly with zero emulation on both Apple Silicon (M1/M2/M3/M4) and Intel Macs.",
        },
        {
          q: "What if my Mac has no camera notch?",
          a: "On external monitors, iMacs, or older MacBooks, Notchify automatically adapts as a floating pill positioned just below the menu bar.",
        },
        {
          q: "How do updates work?",
          a: "Download the latest release from this site or GitHub, then drag the updated app into your Applications folder.",
        },
        {
          q: "Can I inspect or build the source code myself?",
          a: "Yes. Clone the repository and compile directly with Xcode or xcodebuild in your terminal.",
        },
      ],
    },
    downloadSec: {
      title: "Download Notchify",
      subtitle: "Get the latest release for your Mac. Fast, private, and open source.",
      readyNotice: "Download button connects directly to official GitHub Release builds.",
      btnLabel: "Download for Mac",
      statusDevBanner: "Status: In Development — Public .dmg installer has not been released yet",
      statusReleasedBanner: "Status: Public Release Available",
      btnDevLabel: "Installer in Development",
      btnDevTag: "Coming Soon",
      devNotice: "Notchify is currently under active development. The .dmg installer will be automatically downloadable here once the first GitHub Release is published.",
      buildFromSourceBtn: "Build from Source via Terminal",
      buildFromSourceDesc: "Clone and compile with xcodebuild locally",
      specsTitle: "System Specifications",
      minOs: "macOS 12.0 Monterey to Latest",
      arch: "Universal (Apple Silicon & Intel)",
      license: "MIT Open Source",
    },
    footer: {
      desc: "Notchify is an independent open-source utility bringing dynamic desktop overlay features to macOS.",
      linksTitle: "Resources",
      legalTitle: "Open Source",
      disclaimer: "Notchify is an independent project and is not affiliated with or endorsed by Apple Inc.",
      rights: "Distributed under the MIT License.",
    },
  },
  id: {
    nav: {
      features: "Fitur",
      demo: "Pratinjau",
      specs: "Spesifikasi",
      permissions: "Izin & Privasi",
      faq: "FAQ",
      download: "Unduh .dmg",
      github: "GitHub",
    },
    hero: {
      badge: "macOS 12.0 Monterey hingga Terbaru",
      title: "Dynamic Island,",
      titleHighlight: "kini untuk Mac.",
      lede: "Utilitas desktop yang menyatu di area notch MacBook Anda. Kontrol musik dengan lirik tersinkron, simpan berkas sementara, kelola clipboard, dan pantau performa hardware tanpa memecah konsentrasi.",
      downloadBtn: "Unduh untuk Mac",
      githubBtn: "Kode Sumber",
      downloadsCount: "unduhan",
      versionInfo: "Universal Binary (Apple Silicon & Intel)",
      universalBadge: "Sumber Terbuka",
      releaseNotice: "Unduhan file .dmg langsung dari rilis resmi GitHub",
      statusDev: "Dalam Pengembangan",
      statusReleased: "Rilis Publik Tersedia",
      downloadDisabled: "Installer Dalam Pengembangan",
      devVersionTag: "v0.1.0 (Dev)",
      devNotice: "Berkas installer .dmg resmi sedang disiapkan. Akan otomatis dapat diunduh di sini saat rilis.",
    },
    simulator: {
      title: "Notch Interaktif",
      subtitle: "Lihat bagaimana Notchify mekar dari notch fisik menjadi panel produktivitas yang adaptif.",
      tabIdle: "Istirahat",
      tabMedia: "Musik",
      tabClipboard: "Papan Klip",
      tabShelf: "Dropzone",
      tabPomodoro: "Timer Fokus",
      tabSystem: "Status Sistem",
      nowPlaying: "Sedang Diputar",
      artist: "Charlie Puth",
      track: "Cheating on You",
      shelfHint: "Lepas berkas di sini",
      shelfSub: "Penyimpanan sementara untuk seret dan lepas berkas",
      pomoWork: "Sesi Fokus",
      pomoRest: "Istirahat",
      cpu: "Apple Silicon CPU",
      ram: "Unified Memory",
      explanations: {
        idle: {
          title: "Status Istirahat (Idle)",
          tagline: "Tanpa distraksi saat tidak digunakan",
          desc: "Bentuk notch ramping dengan cincin status hijau, jam waktu, dan mata maskot emas yang rileks. Mengembang otomatis saat kursor disentuhkan atau via shortcut."
        },
        music: {
          title: "Musik & Lirik Sinkron",
          tagline: "Mesin lirik real-time untuk Apple Music & Spotify",
          desc: "Menampilkan sampul album, durasi lagu, kontrol pemutar musik, dan baris lirik yang bergulir otomatis mengikuti alunan lagu tanpa latensi."
        },
        clipboard: {
          title: "Riwayat Papan Klip Cerdas",
          tagline: "Akses kilat ke teks yang disalin",
          desc: "Menyimpan teks yang baru disalin di memori lokal yang aman. Salin ulang atau tempel dengan satu klik, lengkap dengan deteksi token pintar."
        },
        shelf: {
          title: "Dropzone Penampung Berkas",
          tagline: "Area transit sementara untuk file & folder",
          desc: "Tarik berkas atau screenshot ke area notch untuk menampungnya sementara saat berpindah antar layar aplikasi, lalu lepaskan ke tujuan."
        },
        pomodoro: {
          title: "Timer Fokus Pomodoro",
          tagline: "Manajemen interval kerja terstruktur",
          desc: "Siklus fokus 25 menit dan jeda istirahat tepat di atas layar, membantu ritme kerja produktif tanpa popup jendela yang mengganggu."
        },
        system: {
          title: "Monitor Performa Sistem",
          tagline: "Status performa Apple Silicon real-time",
          desc: "Memantau beban kerja CPU, pemakaian memori RAM terpadu, dan persentase baterai secara akurat dengan efisiensi daya maksimal."
        }
      }
    },
    moreUtilities: {
      badge: "Utilitas Lengkap",
      title: "Semua yang sering kamu lirik, di satu tempat.",
      subtitle: "Arahkan kursor ke notch untuk membukanya, dan menjauh untuk menutupnya. Tidak ada yang perlu diatur atau disematkan.",
      items: [
        {
          title: "Musik dari pemutar apa pun",
          desc: "Spotify, Apple Music, YouTube di browser: lihat lagu yang diputar, ganti lagu, jeda, dan geser posisi lagu tanpa pindah jendela.",
          tag: "Musik"
        },
        {
          title: "Lirik tersinkron",
          desc: "Klik tombol lirik, notch terbagi dua, dan setiap baris menyala saat dinyanyikan. Klik satu baris untuk melompat ke bagian itu.",
          tag: "Lirik"
        },
        {
          title: "Timer fokus",
          desc: "Mulai sesi Pomodoro dan lihat hitung mundurnya di notch. Bunyi lembut memberi tahu kapan waktunya istirahat.",
          tag: "Fokus"
        },
        {
          title: "Pengingat minum",
          desc: "Atur ukuran botol dan target harianmu. Notchify mengingatkan di jam aktifmu dan mencatat berapa banyak yang sudah kamu minum.",
          tag: "Kesehatan"
        },
        {
          title: "Rak file (Shelf)",
          desc: "Seret file ke notch untuk menyimpannya sementara, lalu seret keluar ke chat, email, atau folder lain.",
          tag: "Rak File"
        },
        {
          title: "To-do dengan pengingat",
          desc: "Catat tugas, beri waktu, dan notch akan mengingatkanmu saat waktunya tiba.",
          tag: "Tugas"
        },
        {
          title: "Volume, kecerahan, dan tombol",
          desc: "Tampilan rapi untuk volume dan kecerahan, plus pemberitahuan saat Caps Lock menyala atau bahasa keyboard berganti.",
          tag: "HUD Sistem"
        },
        {
          title: "Baterai, Wi-Fi, dan headphone",
          desc: "Pemberitahuan singkat saat charger dicolok, koneksi terputus, atau earbuds tersambung.",
          tag: "Perangkat"
        }
      ]
    },
    features: {
      title: "Dibuat Khusus untuk macOS",
      subtitle: "Dirancang menggunakan AppKit dan SwiftUI native agar menyatu sempurna dengan sistem operasi.",
      items: [
        {
          title: "Animasi Spring Responsif",
          desc: "Fisika gerak elastis memastikan notch membuka dan menutup secara mulus tanpa lag atau gangguan tata letak.",
          tag: "Spring Physics",
        },
        {
          title: "Deteksi Layar Penuh Otomatis",
          desc: "Notchify otomatis bersembunyi saat menonton video atau presentasi layar penuh, dan muncul kembali saat selesai.",
          tag: "Auto-hide",
        },
        {
          title: "Akses Pintasan Global",
          desc: "Panggil atau sembunyikan notch dari jendela mana pun dengan kombinasi tombol Cmd + Shift + N.",
          tag: "Cmd + Shift + N",
        },
        {
          title: "Rak Berkas Sementara",
          desc: "Tarik berkas ke notch untuk menampungnya saat berpindah ruang kerja, lalu lepas ke aplikasi tujuan.",
          tag: "Drag and Drop",
        },
        {
          title: "Lirik Tersinkron & Kontrol Audio",
          desc: "Menampilkan lirik lagu berjalan secara real-time untuk Apple Music dan Spotify dengan latensi nol.",
          tag: "Musik & Lirik",
        },
        {
          title: "Konsumsi Sumber Daya Minimal",
          desc: "Membutuhkan kurang dari 50 MB memori dan di bawah 0.5% CPU saat idle tanpa menguras daya baterai.",
          tag: "Hemat Daya",
        },
        {
          title: "Dukungan Bahasa Ganda",
          desc: "Dilengkapi terjemahan lengkap Bahasa Indonesia dan Inggris yang dapat diubah kapan saja.",
          tag: "Bilingual",
        },
        {
          title: "Privasi Tanpa Telemetri",
          desc: "Riwayat clipboard dan berkas sementara hanya berada di RAM lokal Anda. Tidak ada data yang dikirim ke server.",
          tag: "100% Privat",
        },
      ],
    },
    howItWorks: {
      title: "Praktis untuk Alur Kerja Harian",
      subtitle: "Tak terlihat saat diam, instan saat dibutuhkan.",
      shortcutTitle: "Utamakan Keyboard",
      shortcutDesc: "Tekan Cmd + Shift + N dari aplikasi apa pun untuk membuka Notchify tanpa menggeser kursor.",
      triggerTitle: "Pilihan Pemicu",
      triggerDesc: "Tentukan apakah notch ingin dibuka cukup dengan disentuh kursor atau harus diklik secara manual.",
      fullscreenTitle: "Sembunyi Otomatis",
      fullscreenDesc: "Mendeteksi aplikasi layar penuh secara otomatis agar tidak mengganggu tontonan atau presentasi Anda.",
    },
    permissions: {
      title: "Transparansi Perizinan macOS",
      subtitle: "Penjelasan lengkap mengenai izin sistem yang diperlukan oleh aplikasi.",
      accessibilityTitle: "Izin Aksesibilitas (Accessibility)",
      accessibilityDesc: "Diperlukan khusus untuk mendeteksi kombinasi pintasan keyboard Cmd + Shift + N dari semua aplikasi.",
      screenTitle: "Izin Perekaman Layar (Screen Recording)",
      screenDesc: "Hanya digunakan untuk membaca batas jendela agar Notchify tahu kapan aplikasi lain masuk ke mode layar penuh. Piksel layar tidak pernah direkam atau disimpan.",
      privacyPromiseTitle: "Jaminan Sumber Terbuka",
      privacyPromiseDesc: "Tanpa database. Tanpa analitik. Tanpa telemetri jarak jauh. Kode sumber terbuka dan dapat diaudit secara bebas di GitHub.",
    },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      subtitle: "Informasi seputar kompatibilitas, keamanan, dan penggunaan aplikasi.",
      items: [
        {
          q: "Apakah Notchify sepenuhnya gratis?",
          a: "Ya. Notchify adalah perangkat lunak sumber terbuka (open source) yang bebas digunakan di bawah lisensi MIT.",
        },
        {
          q: "Model Mac dan versi macOS apa saja yang didukung?",
          a: "Notchify mendukung macOS 12.0 Monterey hingga versi macOS terbaru. Aplikasi dikompilasi secara native sebagai Universal Binary sehingga berjalan mulus tanpa emulasi di Mac berbasis Apple Silicon (M1/M2/M3/M4) maupun Intel.",
        },
        {
          q: "Bagaimana jika Mac saya tidak memiliki notch kamera fisik?",
          a: "Pada monitor eksternal, iMac, atau MacBook tipe lama, Notchify otomatis tampil sebagai kapsul melayang tepat di bawah bilah menu.",
        },
        {
          q: "Bagaimana cara melakukan pembaruan?",
          a: "Unduh file .dmg terbaru dari situs ini atau GitHub Releases, lalu seret aplikasi baru ke folder Applications untuk menimpa versi lama.",
        },
        {
          q: "Bisakah saya mengompilasi sendiri dari kode sumber?",
          a: "Tentu saja. Clone repositori dan lakukan build menggunakan Xcode atau xcodebuild langsung dari terminal.",
        },
      ],
    },
    downloadSec: {
      title: "Unduh Notchify",
      subtitle: "Dapatkan versi terbaru untuk Mac Anda. Cepat, privat, dan bebas lisensi komersial.",
      readyNotice: "Tombol unduh terhubung langsung ke berkas rilis resmi GitHub.",
      btnLabel: "Unduh untuk Mac",
      statusDevBanner: "Status: Dalam Pengembangan — Berkas installer .dmg belum dirilis ke publik",
      statusReleasedBanner: "Status: Rilis Publik Tersedia",
      btnDevLabel: "Installer Dalam Pengembangan",
      btnDevTag: "Segera Hadir",
      devNotice: "Notchify saat ini masih dalam tahap pengembangan aktif. Berkas installer .dmg akan otomatis dapat diunduh di sini segera setelah rilis pertama di GitHub dipublikasikan.",
      buildFromSourceBtn: "Kompilasi dari Terminal",
      buildFromSourceDesc: "Clone dan build lokal menggunakan xcodebuild",
      specsTitle: "Spesifikasi Sistem",
      minOs: "macOS 12.0 Monterey hingga Terbaru",
      arch: "Universal (Apple Silicon & Intel)",
      license: "Lisensi MIT",
    },
    footer: {
      desc: "Notchify adalah utilitas desktop independen yang menghadirkan pengalaman overlay dinamis untuk macOS.",
      linksTitle: "Tautan",
      legalTitle: "Open Source",
      disclaimer: "Notchify adalah proyek independen dan tidak terafiliasi dengan Apple Inc.",
      rights: "Didistribusikan di bawah Lisensi MIT.",
    },
  },
};
