import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			gold: {
  				'50': '#FFFDF5',
  				'100': '#FDF8EC',
  				'200': '#F5E6B8',
  				'300': '#E8C96A',
  				'400': '#C9A84C',
  				'500': '#A8852A',
  				'600': '#8B6914',
  				'700': '#6B5200',
  				'800': '#4A3800',
  				'900': '#2C1F00',
  				'950': '#1A1200'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			playfair: [
  				'var(--font-playfair)',
  				'Georgia',
  				'serif'
  			],
  			cormorant: [
  				'var(--font-cormorant)',
  				'Georgia',
  				'serif'
  			],
  			montserrat: [
  				'var(--font-montserrat)',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			shimmer: {
  				'0%': {
  					backgroundPosition: '-200% center'
  				},
  				'100%': {
  					backgroundPosition: '200% center'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-12px)'
  				}
  			},
  			rotateSlow: {
  				from: {
  					transform: 'rotate(0deg)'
  				},
  				to: {
  					transform: 'rotate(360deg)'
  				}
  			},
  			fadeUp: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(28px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			pulseGold: {
  				'0%, 100%': {
  					boxShadow: '0 0 0 0 rgba(201,168,76,0.4)'
  				},
  				'50%': {
  					boxShadow: '0 0 0 20px rgba(201,168,76,0)'
  				}
  			}
  		},
  		animation: {
  			shimmer: 'shimmer 3s linear infinite',
  			float: 'float 3s ease-in-out infinite',
  			rotateSlow: 'rotateSlow 30s linear infinite',
  			fadeUp: 'fadeUp 0.8s ease both',
  			pulseGold: 'pulseGold 3s ease-in-out infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
