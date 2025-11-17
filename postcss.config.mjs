const config = {
  plugins: {
    "@tailwindcss/postcss": {
      darkMode: 'class',
      content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#1D1D1D',
              card: '#2D2D2D',
              border: '#3D3D3D',
            }
          },
          backgroundColor: {
            'dark-primary': '#1D1D1D',
          },
          textColor: {
            'dark-primary': '#FFFFFF',
          }
        },
      },
      plugins: [],
    },
  },
};

export default config;
