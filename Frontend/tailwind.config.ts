/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx,jsx,js}',
    './src/**/*.{ts,tsx,jsx,js}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        'mobile-md': '440px',
        'mobile-lg': '512px',
        'tablet-lg': '880px',
      },
    },
    extend: {
      colors: {
        'secondary-text': '#666',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        'primary-button': '#C9F270',
        // secondary: '#E8F0FE',
        link: '#3365e6',
        'create-button': '#4774e9',
        'primary-text': '#0e0e0e',
        // primary: '#FAFAFA',
        'gray-hover': '#f2f2f2',
        'gray-border': '#dadada',
        'gray-text': '#a6a6a6',
        'secondary-button': '#DAF996',
        'text-red': '#cc3341',
        'light-gray': '#DADADA',
        'light-red': '#FFF9FA',
        dot: '#4bcdbc',
        brown: '#949494',
        'light-purple': '#F0e6FF',
        'dark-green': '#001E1E',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'zoom-in-out': {
          '0%, 100%': {
            transform: 'scaleX(1) scaleY(1)',
          },
          '50%': {
            transform: 'scaleX(0.9) scaleY(0.9)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'zoom-in-out': 'zoom-in-out 2s infinite ease-in-out',
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      boxShadow: {
        nav: '0 2px 8px rgba(0, 0, 0, 0.16)',
        card: '0 2px 10px rgba(45, 42, 61, 0.1)',
        button: '0 1px 4px rgba(0, 0, 0, 0.16)',
        search: '0 1px 8px rgba(0, 0, 0, 0.16)',
        onboard: '0 2px 32px rgba(0, 0, 0, 0.08)',
        field: '0 0 0 1px #0e0e0e',
        error: '0 0 0 1px #cc3341',
      },

      backgroundPosition: {
        'bottom-left-signup': 'bottom 35% left 50% ',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
