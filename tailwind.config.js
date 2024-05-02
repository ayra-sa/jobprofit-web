/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xs": "370px",
      },
    },
    extend: {
      colors: {
        pending: "hsl(var(--pending))",
        success: "hsl(var(--success))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        code_label: {
          DEFAULT: "hsl(var(--code-label))",
          foreground: "hsl(var(--code-label-foreground))",
        }
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}

