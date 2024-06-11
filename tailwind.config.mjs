export default {
  content: [
    'index.html',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.svelte',
    './src/**/*.scss',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.75rem', // 12px
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        lg: '1.2rem', // 19px
        xl: '1.5rem', // 24px
        '2xl': '1.75rem', // 28px
        '3xl': '2rem', // 32px
        '4xl': '2.5rem', // 40px
      },
      spacing: {
        '4xs': '1px',
        '3xs': '2px',
        '2xs': '4px',
        xs: '6px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '80px',
        '6xl': '96px',
        '7xl': '128px',
        '8xl': '160px',
        btn: '64px',
        'text-input': '46px',
        header: '100px',
      },
      borderRadius: {
        '4xs': '1px',
        '3xs': '2px',
        '2xs': '4px',
        xs: '6px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '80px',
        '6xl': '96px',
        '7xl': '128px',
        '8xl': '160px',
      },
      borderWidth: {
        sm: '0.5px',
        md: '1px',
        lg: '2px',
      },
      blur: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
      },
      fontWeight: {
        light: '100',
        book: '300',
        medium: '500',
      },

      textColor: {
        a: 'var(--color-white-s100)',
        b: 'var(--color-white-t100)',
        'bad-a': 'var(--color-red-s100)',
        'bad-b': 'var(--color-red-t100)',
      },
      borderColor: {
        a: 'var(--color-white-t100)',
        b: 'var(--color-white-t200)',
        bad: 'var(--color-red-s100)',
      },
      fill: {
        a: 'var(--color-white-s100)',
        b: 'var(--color-white-t100)',
        bad: 'var(--color-red-s100)',
      },
      backgroundColor: {
        a: 'var(--color-grey-s300)',
        b: 'var(--color-grey-s200)',
        c: 'var(--color-grey-s100)',
        d: 'var(--color-black-t100)',
        e: 'var(--color-black-t200)',
        bad: 'var(--color-red-s100)',
        good: 'var(--color-green-s100)',
      },
      backgroundImage: {
        multi: 'var(--color-multi-s100)',
        gradient: 'var(--color-gradient-s100)',
      },
      keyframes: {
        'ping-slow': {
          '30%, 100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        'pulse-strong': {
          '0%, 100%': {
            opacity: 0.75,
          },
          '50%': {
            opacity: 0.1,
          },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        jiggle: {
          '0%, 100%': { '@apply translate-x-0': {} },
          '25%': { '@apply -translate-x-1': {} },
          '50%': { '@apply translate-x-1': {} },
          '75%': { '@apply -translate-x-0.5': {} },
        },
      },
      animation: {
        jiggle: 'jiggle 0.2s ease',
        'ping-slow': 'ping-slow 5s cubic-bezier(0, 0, 0.01, 1) infinite',
        'pulse-strong': 'pulse-strong 5s cubic-bezier(0.1, 0, 0.8, 1) infinite',
        'spin-slow': 'spin-slow 4s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      const newBase = {
        'html, body': {
          '@apply scroll-smooth antialiased text-a bg-a font-gotham transition-all duration-100 scrollbar-hide':
            {},
        },
        'h1, h2, h3, h4, h5, h6': {
          '@apply font-medium text-a': {},
        },
        h1: {
          '@apply text-4xl leading-snug': {},
        },
        h2: {
          '@apply text-3xl leading-normal': {},
        },
        h3: {
          '@apply text-2xl leading-normal': {},
        },
        h4: {
          '@apply text-xl': {},
        },
        h5: {
          '@apply text-xl': {},
        },
        h6: {
          '@apply text-lg': {},
        },
        p: {
          '@apply text-base font-book leading-relaxed tracking-normal': {},
        },
        ul: {
          '@apply list-none': {},
        },
        li: {
          '@apply text-base font-book leading-relaxed': {},
        },
        label: {
          '@apply text-lg font-book flex': {},
        },
      };
      addBase(newBase, ['responsive', 'hover']);
    },

    function ({ addUtilities }) {
      const newUtilities = {
        // Text color
        '.text-hl-a': {
          '@apply bg-cover bg-multi bg-clip-text text-transparent saturate-150 brightness-150 hue-rotate-15':
            {},
        },
        '.text-hl-b': {
          '@apply bg-gradient bg-clip-text text-transparent saturate-150': {},
        },
        // Icon color
        '.icon-a': {
          '@apply fill-a': {},
        },
        '.icon-b': {
          '@apply fill-b': {},
        },
        '.icon-bad': {
          '@apply fill-bad': {},
        },
        // List styles
        '.list-disc': {
          'list-style-type': 'disc',
          '@apply pl-xl': {},
        },
        '.list-decimal': {
          'list-style-type': 'decimal',
          '@apply pl-xl': {},
        },
        // Scrollbar
        '.scrollbar-hide': {
          '&::-webkit-scrollbar': { '@apply hidden': {} },
          'scrollbar-width': 'none',
        },

        // Highlight text
        '.highlight': {
          '@apply relative inline-block text-hl-a': {},
        },
        '.highlight::before': {
          content: 'attr(data-text)',
          '@apply absolute text-hl-a blur-7 opacity-50 scale-[0.97] translate-y-[3%]':
            {},
        },

        label: {
          '@apply flex-col items-start gap-sm': {},
        },

        // Text inputs
        input: {
          '@apply py-md px-sm items-center w-full rounded-sm border-sm border-b bg-transparent font-light text-sm text-a focus:outline-none focus:border-a':
            {},
        },
        'input::placeholder': {
          '@apply text-b font-light': {},
        },
        '.input-error': {
          '@apply text-bad-a': {},
        },
        'input-error::placeholder': {
          '@apply text-bad-b': {},
        },
        textarea: {
          '@apply font-light text-a text-sm focus:outline-none focus:border-a min-h-36 resize-y py-md px-sm items-center w-full rounded-sm border-b border-sm overflow-hidden bg-transparent':
            {},
        },
        'textarea::placeholder': {
          '@apply text-b font-light': {},
        },
        '.error-message': {
          '@apply text-bad-a text-xs': {},
        },
        '.scroll-hidden': {
          '@apply opacity-0 blur-1 -translate-x-2 scale-[0.98] transition-all duration-300':
            {},
        },
        '.scroll-show': {
          '@apply opacity-100 blur-0 translate-x-0 scale-100 transition-all duration-300 delay-100':
            {},
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    function ({ addComponents }) {
      const newComponents = {
        // Section
        '.section': {
          '@apply flex flex-col justify-center min-h-fit items-baseline w-full  max-w-screen-xl px-xl py-6xl gap-2xl self-center justify-self-center scroll-m-24 sm:pt-3xl sm:px-5xl':
            {},
        },

        // Button
        '.btn': {
          '@apply px-xl h-btn flex items-center justify-center min-h-sm min-w-fit cursor-pointer text-lg text-a rounded-md transition ease-in gap-md duration-200':
            {},
          '&:active, &.pressed': {
            '@apply scale-[0.97] transition ease-in duration-75': {},
          },
          '&:hover span': {
            '@apply highlight': {},
          },
        },
        '.primary': {
          '@apply btn font-medium bg-b': {},
          '&:hover span': {
            '@apply highlight': {},
          },
          '&:hover': {
            '@apply bg-c': {},
          },
        },
        '.secondary': {
          '@apply btn bg-transparent border-sm border-b': {},
          '&:hover span': {
            '@apply highlight': {},
          },
          '&:hover': {
            '@apply bg-d': {},
          },
        },
        '.tertiary': {
          '@apply btn px-0 h-fit font-book flex-row': {},
          span: {
            '@apply text-a': {},
          },
        },
        // Toast
        '.toast': {
          '@apply sm:ml-xl fixed flex items-start justify-center z-10 bg-d backdrop-blur-4 text-a font-book text-base text-start left-0 right-0 bottom-0 gap-md rounded-t-md sm:rounded-b-md p-lg pr-2xl pb-2xl sm:py-lg sm:pl-lg sm:left-auto sm:right-xl sm:bottom-xl':
            {},
          '&.show': {
            '@apply visible transition-all ease-in duration-500': {},
          },
          button: {
            '@apply bg-none border-none cursor-pointer': {},
            svg: {
              '@apply icon-a overflow-visible fixed right-lg top-lg scale-110 focus:scale-125 active:scale-95 hover:scale-125 animate-pulse':
                {},
            },
          },
        },

        // Tile
        '.tile': {
          '@apply hover:scale-[98%] bg-b flex-none w-fit h-4xl flex items-center justify-center px-xl py-md rounded-md':
            {},
        },
        '.image-carousel-a': {
          '@apply flex relative w-full h-6xl': {},
          '.image-carousel-b': {
            '@apply absolute top-0 left-0 right-0 h-fit rounded-sm justify-start items-start gap-2 flex self-stretch overflow-scroll scrollbar-hide':
              {},
          },
        },

        // Lists
        '.tools-skills-list': {
          '@apply flex flex-col gap-xs': {},
          li: {
            '@apply gap-sm flex items-center': {},
          },
        },
      };

      addComponents(newComponents);
    },
  ],
};
