import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0e8a73',
        'secondary': '#6ec4a5',
        'tertiary': '#f06974',
        'quaternary': '#ff66c4',
        'quinary': '#f8d25a',
      },
    },
  },
  plugins: [],
}
export default config