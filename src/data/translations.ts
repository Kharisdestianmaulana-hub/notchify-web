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
      badge: "macOS 12.0 Monterey or later",
      title: "The Dynamic Island,",
      titleHighlight: "built for Mac.",
      lede: "A refined desktop utility that rests seamlessly on your MacBook notch. Control playback with synced lyrics, hold files temporarily, view recent clipboard items, and monitor hardware without breaking focus.",
      downloadBtn: "Download for Mac",
      githubBtn: "Source Code",
      downloadsCount: "downloads",
      versionInfo: "Universal Binary for Apple Silicon and Intel",
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
      badge: "Built-in Suite",
      title: "Everyday Desktop Utilities",
      subtitle: "Engineered into the same native binary to eliminate single-purpose menu bar clutter.",
      items: [
        {
          title: "Instant Quick Calculator",
          desc: "4x4 keypad grid with live arithmetic expression evaluation and one-click clipboard copying. No need to open a separate calculator app.",
          tag: "Calculator"
        },
        {
          title: "Live Ambient Weather",
          desc: "Glanceable local temperature in Celsius, dynamic sky conditions (sunny, overcast, rain), and instant one-tap refresh.",
          tag: "Weather"
        },
        {
          title: "Agenda & Upcoming Meetings",
          desc: "Direct integration with calendar events. Shows upcoming meetings with one-click direct buttons to join Google Meet, Zoom, or FaceTime calls.",
          tag: "Calendar"
        },
        {
          title: "Quick Camera Mirror",
          desc: "Uses FaceTime HD camera under the physical lens for a discreet, fast video mirror check before joining video meetings.",
          tag: "FaceTime HD"
        },
        {
          title: "Scratchpad & Task Checklist",
          desc: "Instant notepad with live word count and persistent local storage, alongside a quick toggleable to-do checklist for daily priorities.",
          tag: "Scratchpad"
        },
        {
          title: "Network Radar & Speed Test",
          desc: "Instant benchmark for Wi-Fi download and upload speed in Mbps, connection latency (ping ms), and signal stability.",
          tag: "Speed Test"
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
          a: "Notchify supports macOS 12.0 Monterey and newer, including Ventura, Sonoma, and Sequoia on Apple Silicon (M1/M2/M3/M4) and Intel Macs.",
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
      minOs: "macOS 12.0 Monterey+",
      arch: "Universal (Apple Silicon and Intel)",
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
      badge: "macOS 12.0 Monterey ke atas",
      title: "Dynamic Island,",
      titleHighlight: "kini untuk Mac.",
      lede: "Utilitas desktop yang menyatu di area notch MacBook Anda. Kontrol musik dengan lirik tersinkron, simpan berkas sementara, kelola clipboard, dan pantau performa hardware tanpa memecah konsentrasi.",
      downloadBtn: "Unduh untuk Mac",
      githubBtn: "Kode Sumber",
      downloadsCount: "unduhan",
      versionInfo: "Universal Binary untuk Apple Silicon dan Intel",
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
      title: "Peralatan Kerja Sehari-hari",
      subtitle: "Terintegrasi langsung dalam binary native yang sama untuk menghilangkan aplikasi menu bar terpisah.",
      items: [
        {
          title: "Kalkulator Cepat",
          desc: "Grid 4x4 dengan kalkulasi ekspresi matematika instan dan tombol satu-klik salin hasil ke papan klip tanpa perlu membuka aplikasi lain.",
          tag: "Kalkulator"
        },
        {
          title: "Informasi Cuaca Langsung",
          desc: "Pantau suhu lokal dalam derajat Celsius, kondisi awan/hujan, dan lokasi secara sekilas dengan tombol penyegaran instan.",
          tag: "Cuaca"
        },
        {
          title: "Agenda & Jadwal Pertemuan",
          desc: "Sinkronisasi jadwal acara kalender harian dengan tombol langsung untuk bergabung ke panggilan Google Meet, Zoom, atau FaceTime.",
          tag: "Kalender"
        },
        {
          title: "Cermin Kamera Cepat",
          desc: "Menggunakan kamera FaceTime HD tepat di bawah lubang fisik notch untuk pratinjau cermin video instan sebelum bergabung ke video call.",
          tag: "FaceTime HD"
        },
        {
          title: "Catatan Coretan & Checklist",
          desc: "Papan catatan teks instan dengan penghitung kata otomatis serta daftar to-do checklist yang tersimpan aman di memori lokal.",
          tag: "Catatan"
        },
        {
          title: "Radar Jaringan & Speed Test",
          desc: "Uji kecepatan unduh & unggah internet (Mbps) secara instan, pengukuran latensi ping (ms), dan kestabilan koneksi Wi-Fi.",
          tag: "Speed Test"
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
          a: "Notchify mendukung macOS 12.0 Monterey ke atas, termasuk Ventura, Sonoma, dan Sequoia pada Mac berbasis Apple Silicon (M1/M2/M3/M4) maupun Intel.",
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
      minOs: "macOS 12.0 Monterey+",
      arch: "Universal (Apple Silicon dan Intel)",
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
