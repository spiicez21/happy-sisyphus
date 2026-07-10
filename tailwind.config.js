/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/renderer/index.html', './src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: 'var(--c-page-bg)',
        bg: 'var(--c-bg)',
        surface1: 'var(--c-surface1)',
        surface2: 'var(--c-surface2)',
        surface3: 'var(--c-surface3)',
        surface4: 'var(--c-surface4)',
        line: 'var(--c-line)',
        'line-strong': 'var(--c-line-strong)',
        'line-faint': 'var(--c-line-faint)',
        fg1: 'var(--c-fg1)',
        fg2: 'var(--c-fg2)',
        fg3: 'var(--c-fg3)',
        accent: {
          DEFAULT: 'var(--c-accent)',
          soft: 'var(--c-accent-soft)',
          bg: 'var(--c-accent-bg)'
        },
        success: 'var(--c-success)',
        warning: 'var(--c-warning)',
        danger: 'var(--c-danger)'
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Cascadia Code"', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 1.2s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
