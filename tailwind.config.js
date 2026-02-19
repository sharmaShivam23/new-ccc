

import { transform } from 'framer-motion';
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: { poppins: ['Poppins', 'sans-serif'],
				albert: ['Albert Sans', 'sans-serif'],
				jetbrains: ['JetBrains Mono', 'sans-serif'],
				playwrite: ['Playwrite VN', 'serif'],
        rubik: ['Rubik Vinyl', 'serif'],
				bebas: ['Bebas Neue', 'serif'],
				jersey: ['Jersey 15', 'serif'],
				major: ['Major Mono Display', 'serif'], 
		 },
  		keyframes: {
  			zoomUp: {
  				'0%': {
  					transform: 'scale(0)'
  				},
  				'100%': {
  					transform: 'scale(1)'
  				}
  			},
				popp : {
					'0%': {
  					transform: 'scale(1)'
  				},
					'50%' : {
						 transform: 'scale(1.2)'
					},
  				'100%': {
  					transform: 'scale(1)'
  				}
          
				},
  			slideIn: {
  				'0%': {
  					transform: 'translateX(-100%)  rotate(360deg)'
  				},
  				'100%': {
  					transform: 'translateX(0%) rotate(0)'
  				}
  			},
  			slideOut: {
  				'0%': {
  					transform: 'translateX(0%)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translateX(-100%)',
  					opacity: '0'
  				}
  			},
  			slideo: {
  				'0%': {
  					transform: 'translateX(-400%)  rotate(100deg)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0%)  rotate(0deg)',
  					opacity: '1'
  				}
  			},
  			click: {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			sUp: {
  				'0%': {
  					transform: 'translateY(100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			sUp2: {
  				'0%': {
  					transform: 'translateY(100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			sUp3: {
  				'0%': {
  					transform: 'translateY(100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			rotate: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			bounce: {
  				'0%, 100%': {
  					transform: 'translateY(-5%)',
  					animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
  				},
  				'50%': {
  					transform: 'translateY(0)',
  					animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
  				}
  			},
  			bounce2: {
  				'0%, 100%': {
  					transform: 'translateY(-7%)',
  					animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
  				},
  				'50%': {
  					transform: 'translateY(0)',
  					animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
  				}
  			},
  			bounce3: {
  				'0%, 100%': {
  					transform: 'translateY(-4%)',
  					animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
  				},
  				'50%': {
  					transform: 'translateY(0)',
  					animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
  				}
  			},
  			// bounce4: {
  			// 	'0%, 100%': {
  			// 		transform: 'translateY(-30%)',
  			// 		animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
  			// 	},
  			// 	'50%': {
  			// 		transform: 'translateY(0)',
  			// 		animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
  			// 	}
  			// },
				bounce4: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          }
				},
  			'shimmer-slide': {
  				to: {
  					transform: 'translate(calc(100cqw - 100%), 0)'
  				}
  			},
  			'spin-around': {
  				'0%': {
  					transform: 'translateZ(0) rotate(0)'
  				},
  				'15%, 35%': {
  					transform: 'translateZ(0) rotate(90deg)'
  				},
  				'65%, 85%': {
  					transform: 'translateZ(0) rotate(270deg)'
  				},
  				'100%': {
  					transform: 'translateZ(0) rotate(360deg)'
  				}
  			},
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			},
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			}
  		},
  		animation: {
  			zoomUp: 'zoomUp 3s ease-in-out',
  			rotate: 'rotate 5s ease-in-out',
  			slideIn: 'slideIn 1s ease-in-out 0s',
  			slideOut: 'slideOut 3s ease-in-out',
  			slideo: 'slideo 3s ease-in-out',
  			click: 'click 3s ease-in-out',
  			bounce: 'bounce 2s infinite',
  			bounce2: 'bounce2 2s infinite',
  			bounce3: 'bounce3 2s infinite',
  			bounce4: 'bounce4 1s infinite 0s ease-in-out',
  			bounce5: 'bounce4 1s infinite 0.4s ease-in-out',
  			bounce6: 'bounce4 1s infinite 0.8s ease-in-out',
  			su: 'sUp 1s ease-in-out 0s',
  			su2: 'sUp2 2s ease-in-out 1s',
  			su3: 'sUp3 3s ease-in-out 2s',
  			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
  			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			meteor: 'meteor 5s linear infinite',
  			shine: 'shine var(--duration) infinite linear',
				popp : 'popp 2s ease-in-out infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
