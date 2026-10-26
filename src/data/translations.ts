export interface Translations {
  nav: {
    features: string;
    demo: string;
    specs: string;
    permissions: string;
    changelog: string;
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
    starsCount: string;
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
    size: string;
    license: string;
    previousVersionsTitle: string;
    previousVersionsSubtitle: string;
    viewChangelogBtn: string;
    allReleasesGithub: string;
    noPreviousYet: string;
  };
  changelog: {
    badge: string;
    title: string;
    subtitle: string;
    latestBadge: string;
    previousBadge: string;
    downloadDmg: string;
    viewOnGithub: string;
    releaseNotesTitle: string;
    noPreviousReleases: string;
    features: Array<{
      category: string;
      desc: string;
    }>;
  };
  comparison: {
    badge: string;
    title: string;
    subtitle: string;
    colNotchify: string;
    colNotchifyTag: string;
    colPaid: string;
    colElectron: string;
    ctaNote: string;
    ctaBtn: string;
    rows: Array<{
      metric: string;
      notchify: string;
      paid: string;
      electron: string;
    }>;
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
      changelog: "Changelog",
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
      starsCount: "stars on GitHub",
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
      badge: "Engineered for Mac",
      title: "Your MacBook display. More capable than ever.",
      subtitle: "Engineered around your Mac's physical hardware contours to bring fluid file staging, instant controls, and daily workflow essentials right where your eyes already rest.",
      items: [
        {
          title: "Fluid File Staging at the Screen Bezel",
          desc: "Drag screenshots, documents, or assets directly into the notch to hold them while switching spaces, then release them into chats, emails, or folders.",
          tag: "Drop Shelf"
        },
        {
          title: "Audio Control & Synced Lyrics",
          desc: "Glanceable playback controls with real-time line-by-line lyrics for Apple Music, Spotify, and browser media without switching windows.",
          tag: "Media Engine"
        },
        {
          title: "Structured Focus Intervals",
          desc: "Customizable 25-minute Pomodoro sprints with gentle chimes and digital countdown right at the top of your display.",
          tag: "Deep Focus"
        },
        {
          title: "Instant Clipboard Memory",
          desc: "Retrieve recent snippets, copied links, and color values with one click without opening a separate clipboard manager.",
          tag: "Clipboard"
        },
        {
          title: "Peripherals & Battery HUD",
          desc: "Glanceable status pills when AirPods connect, charger is plugged in, or sound output changes.",
          tag: "Peripherals"
        },
        {
          title: "Mindful Hydration Milestones",
          desc: "Gentle hydration milestones during active working hours to keep you energized at your desk.",
          tag: "Wellness"
        },
        {
          title: "Real-Time Apple Silicon Telemetry",
          desc: "Live unified CPU activity, memory pressure (RAM), and thermal status engineered specifically for Apple Silicon efficiency.",
          tag: "Apple Silicon"
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
          q: "How large is the app and how much disk space does it take?",
          a: "Notchify is engineered purely with Swift and AppKit/SwiftUI with zero Electron bloat. The .dmg installer download is only ~8.45 MB, and once installed into your Applications folder, it occupies only around ~30 MB of storage.",
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
      size: "8.45 MB (.dmg) • ~30 MB on disk",
      license: "MIT Open Source",
      previousVersionsTitle: "Looking for earlier builds?",
      previousVersionsSubtitle: "Access previous stable releases and installation packages.",
      viewChangelogBtn: "Explore Changelog",
      allReleasesGithub: "GitHub Releases Archive",
      noPreviousYet: "v1.0.0 is the initial release. Previous versions will automatically appear here as new updates are published.",
    },
    changelog: {
      badge: "Release Notes",
      title: "Version History & Changelog",
      subtitle: "Explore what's new, updated, and refined across all Notchify versions.",
      latestBadge: "Latest Release",
      previousBadge: "Previous Versions",
      downloadDmg: "Download .dmg",
      viewOnGithub: "View Release on GitHub",
      releaseNotesTitle: "Release Highlights",
      noPreviousReleases: "v1.0.0 is the initial public release. Previous versions will automatically be listed here as new updates are published.",
      features: [
        {
          category: "Media & Synced Lyrics",
          desc: "Universal controls for Spotify, Apple Music, and web players with karaoke-style synchronized lyrics (<0.4s) and dynamic ambient art glow."
        },
        {
          category: "Smart Clipboard Manager",
          desc: "Live text search, snippet pinning, and automatic data detection for colors, web URLs, emails, and currencies."
        },
        {
          category: "Drop Zone Shelf",
          desc: "Drag-and-drop holding shelf near the notch with native macOS AirDrop, Mail, and Messages sharing."
        },
        {
          category: "Focus Pomodoro Timer",
          desc: "Customizable focus/break intervals, detached dynamic pill overlay, and native macOS audio chime notifications."
        },
        {
          category: "Camera Mirror & HD Recorder",
          desc: "Instant pre-meeting camera preview with warm virtual ring light and in-tab HD video recording."
        },
        {
          category: "System & Network Monitor",
          desc: "Real-time CPU, RAM, battery telemetry, and a high-precision live download/upload network speedometer."
        },
        {
          category: "Interactive Notch Companion",
          desc: "Expressive dynamic mascot with 120 BPM head-bob music rhythm and activity-aware idle detection."
        },
        {
          category: "Universal 2 Architecture",
          desc: "Natively compiled for Apple Silicon (M1/M2/M3/M4) and Intel Macs with a featherlight footprint (~8.45 MB .dmg, ~30 MB on disk)."
        }
      ]
    },
    comparison: {
      badge: "Engineering Benchmark",
      title: "Engineered for pure efficiency.",
      subtitle: "See how Notchify's native Swift & AppKit architecture delivers a lighter footprint, zero latency, and genuine respect for your Mac's battery.",
      colNotchify: "Notchify",
      colNotchifyTag: "Native & Open Source",
      colPaid: "Paid Notch Apps",
      colElectron: "Web / Electron Apps",
      ctaNote: "Ready to experience the fastest, lightest dynamic island on Mac?",
      ctaBtn: "Download Notchify Free",
      rows: [
        {
          metric: "Architecture & Framework",
          notchify: "Pure Swift & AppKit / SwiftUI",
          paid: "Swift / Mixed Frameworks",
          electron: "Chromium & Node.js Engine"
        },
        {
          metric: "Installer Download (.dmg)",
          notchify: "8.45 MB (Featherlight)",
          paid: "30 MB – 80 MB",
          electron: "150 MB – 300 MB+"
        },
        {
          metric: "Disk Footprint (Installed)",
          notchify: "~30 MB on disk",
          paid: "80 MB – 150 MB",
          electron: "300 MB – 600 MB+"
        },
        {
          metric: "Active RAM Usage",
          notchify: "~25 MB (Ice Cold)",
          paid: "60 MB – 120 MB",
          electron: "250 MB – 500 MB+"
        },
        {
          metric: "Idle CPU & Battery Impact",
          notchify: "0.0% (Zero background drain)",
          paid: "0.5% – 2.0%",
          electron: "2.0% – 5.0% continuous"
        },
        {
          metric: "Integrated Utility Suite",
          notchify: "7 Utilities in 1 Island",
          paid: "1–2 Single Tools",
          electron: "Fragmented per tool"
        },
        {
          metric: "Privacy & Telemetry",
          notchify: "100% On-Device, Zero Telemetry",
          paid: "Closed Source / Analytics",
          electron: "Third-party tracking"
        },
        {
          metric: "Price & License",
          notchify: "100% Free & Open Source (MIT)",
          paid: "$15 – $35 / Monthly Sub",
          electron: "Freemium / Paid Tier"
        }
      ]
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
      changelog: "Changelog",
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
      starsCount: "bintang di GitHub",
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
      badge: "Dibuat Khusus untuk Mac",
      title: "Layar MacBook Anda, kini jauh lebih berguna.",
      subtitle: "Notchify memanfaatkan lekukan perangkat keras Mac untuk menghadirkan kendali instan, ruang singgah berkas, dan produktivitas harian—tepat di garis pandang mata Anda.",
      items: [
        {
          title: "Ruang Singgah Berkas di Bezel Layar",
          desc: "Seret screenshot, dokumen, atau aset ke notch untuk menahannya saat berpindah ruang kerja, lalu lepaskan langsung ke chat atau folder tujuan.",
          tag: "Drop Shelf"
        },
        {
          title: "Kendali Audio & Lirik Real-Time",
          desc: "Kendalikan pemutaran Spotify, Apple Music, atau YouTube dengan tampilan lirik baris-per-baris tanpa perlu membuka jendela pemutar.",
          tag: "Media Engine"
        },
        {
          title: "Ritme Fokus Pomodoro",
          desc: "Jalankan interval kerja produktif 25 menit dengan hitung mundur digital dan lonceng istirahat halus langsung di atas layar Anda.",
          tag: "Fokus"
        },
        {
          title: "Riwayat Papan Klip Cepat",
          desc: "Akses cuplikan teks dan kode warna yang baru disalin dalam satu klik, tanpa aplikasi clipboard terpisah.",
          tag: "Papan Klip"
        },
        {
          title: "Status Perangkat & Pengisian Daya",
          desc: "Pemberitahuan hening saat AirPods tersambung, persentase daya baterai saat charger dicolok, atau perubahan output audio.",
          tag: "Periferal"
        },
        {
          title: "Pengingat Hidrasi Harian",
          desc: "Tetapkan target minum harian dengan pengingat ramah selama jam kerja aktif di Mac Anda.",
          tag: "Kesehatan"
        },
        {
          title: "Telemetri Apple Silicon Real-Time",
          desc: "Pantau beban kerja unified CPU, tekanan memori (RAM), dan konsumsi daya M-series secara hening dengan konsumsi daya baterai mendekati nol.",
          tag: "Apple Silicon"
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
          q: "Berapa ukuran file dan kapasitas penyimpanan yang dibutuhkan?",
          a: "Notchify dibangun secara native menggunakan Swift dan SwiftUI murni tanpa framework Electron yang berat. Installer .dmg hanya berukuran ~8,45 MB, dan setelah terpasang di folder Applications hanya memakan ruang sekitar ~30 MB di disk Mac Anda.",
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
      size: "8,45 MB (.dmg) • ~30 MB di disk",
      license: "Lisensi MIT",
      previousVersionsTitle: "Mencari versi rilis sebelumnya?",
      previousVersionsSubtitle: "Akses versi stabil sebelumnya dan arsip paket instalasi resmi.",
      viewChangelogBtn: "Lihat Catatan Rilis",
      allReleasesGithub: "Arsip Rilis GitHub",
      noPreviousYet: "v1.0.0 adalah rilis perdana. Versi sebelumnya akan otomatis tertera di sini saat rilis berikutnya diluncurkan.",
    },
    changelog: {
      badge: "Catatan Rilis",
      title: "Riwayat Versi & Catatan Rilis",
      subtitle: "Pelajari fitur baru, peningkatan performa, dan penyempurnaan di setiap versi Notchify.",
      latestBadge: "Rilis Terbaru",
      previousBadge: "Versi Sebelumnya",
      downloadDmg: "Unduh .dmg",
      viewOnGithub: "Lihat Rilis di GitHub",
      releaseNotesTitle: "Sorotan Rilis",
      noPreviousReleases: "v1.0.0 adalah rilis publik perdana. Versi sebelumnya akan otomatis tertera di sini saat rilis pembaruan berikutnya diterbitkan.",
      features: [
        {
          category: "Media & Lirik Tersinkron",
          desc: "Kontrol universal untuk Spotify, Apple Music, dan browser dengan lirik karaoke scrolling super cepat (<0,4 detik) dan ambient glow."
        },
        {
          category: "Smart Clipboard Manager",
          desc: "Pencarian teks instan, pin klip penting, dan deteksi otomatis untuk kode warna, URL web, email, dan mata uang."
        },
        {
          category: "Drop Zone Shelf",
          desc: "Area penampung seret & lepas berkas di dekat notch dengan integrasi native macOS AirDrop, Mail, dan Pesan."
        },
        {
          category: "Focus Pomodoro Timer",
          desc: "Interval fokus & istirahat kustom, overlay kapsul melayang yang dinamis, serta notifikasi suara native macOS."
        },
        {
          category: "Camera Mirror & Perekam HD",
          desc: "Pratinjau kamera instan sebelum rapat dengan virtual ring light hangat dan perekaman video HD langsung dari tab."
        },
        {
          category: "System & Network Monitor",
          desc: "Telemetri CPU, RAM, dan baterai real-time, dilengkapi speedometer presisi tinggi untuk mengukur kecepatan unduh & unggah."
        },
        {
          category: "Maskot Notch Interaktif",
          desc: "Karakter dinamis responsif dengan goyangan kepala mengikuti ritme musik 120 BPM serta deteksi otomatis saat Mac idle."
        },
        {
          category: "Universal 2 Architecture",
          desc: "Kompilasi native untuk Mac Apple Silicon (M1/M2/M3/M4) dan prosesor Intel dengan ukuran sangat ringan (~8,45 MB .dmg, ~30 MB di disk)."
        }
      ]
    },
    comparison: {
      badge: "Tolok Ukur Rekayasa",
      title: "Dirancang untuk efisiensi murni.",
      subtitle: "Lihat bagaimana arsitektur native Swift & AppKit Notchify menghadirkan ukuran paling ringan, nol latensi, dan hemat baterai MacBook Anda.",
      colNotchify: "Notchify",
      colNotchifyTag: "Native & Open Source",
      colPaid: "Aplikasi Notch Berbayar",
      colElectron: "Aplikasi Berbasis Web",
      ctaNote: "Siap mencoba Dynamic Island paling cepat dan ringan untuk Mac Anda?",
      ctaBtn: "Unduh Notchify Gratis",
      rows: [
        {
          metric: "Arsitektur & Bahasa",
          notchify: "SwiftUI & AppKit Murni",
          paid: "Swift / Campuran Framework",
          electron: "Engine Chromium & Node.js"
        },
        {
          metric: "Ukuran Installer (.dmg)",
          notchify: "8,45 MB (Sangat Ringan)",
          paid: "30 MB – 80 MB",
          electron: "150 MB – 300 MB+"
        },
        {
          metric: "Ruang Penyimpanan (Terpasang)",
          notchify: "~30 MB di disk",
          paid: "80 MB – 150 MB",
          electron: "300 MB – 600 MB+"
        },
        {
          metric: "Penggunaan RAM Aktif",
          notchify: "~25 MB (Sangat Dingin)",
          paid: "60 MB – 120 MB",
          electron: "250 MB – 500 MB+"
        },
        {
          metric: "Konsumsi Baterai & CPU Idle",
          notchify: "0.0% (Nol beban latar belakang)",
          paid: "0,5% – 2,0%",
          electron: "2,0% – 5,0% terus-menerus"
        },
        {
          metric: "Kelengkapan Utilitas",
          notchify: "7 Utilitas dalam 1 Notch",
          paid: "1–2 Fitur Terpisah",
          electron: "Terpisah per aplikasi"
        },
        {
          metric: "Privasi & Telemetri",
          notchify: "100% On-Device, Tanpa Telemetri",
          paid: "Kode Tertutup / Analitik",
          electron: "Melacak data online"
        },
        {
          metric: "Biaya & Lisensi",
          notchify: "100% Gratis & Open Source (MIT)",
          paid: "$15 – $35 / Langganan",
          electron: "Freemium / In-App Purchase"
        }
      ]
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
