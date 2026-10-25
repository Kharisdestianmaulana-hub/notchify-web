/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#030408',
        panel: '#0B0D15',
        'panel-subtle': '#121520',
        'notch-black': '#000000',
        'mac-line': 'rgba(255, 255, 255, 0.08)',
        'mac-glow': '#0A84FF',
        'apple-blue': '#0A84FF',
        'apple-green': '#30D158',
        'apple-red': '#FA2D48',
        'apple-purple': '#BF5AF2',
        'apple-orange': '#FF9F0A',
        ink: '#ECEFF7',
        mist: '#8E95A5',
      },
      fontFamily: {
        sans: [
          '"Geist"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"Geist Mono"',
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      borderRadius: {
        'notch-sm': '14px',
        'notch-md': '22px',
        'notch-lg': '32px',
      },
      boxShadow: {
        'notch': '0 20px 45px -12px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'mac-glow': '0 0 40px -10px rgba(10, 132, 255, 0.45)',
        'drop-glow': '0 0 30px rgba(191, 90, 242, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'waveform': 'waveform 1.1s ease-in-out infinite alternate',
      },
      keyframes: {
        waveform: {
          '0%': { height: '25%' },
          '100%': { height: '100%' },
        },
      },
    },
  },
  plugins: [],
};
