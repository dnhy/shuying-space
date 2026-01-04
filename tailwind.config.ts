import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     keyframes: {
  //       scrollIndicatorAnimation: {
  //         "0%": { transform: "scaleY(0)" },
  //         "5%": { transform: "scaleY(0)" },
  //         "45%": { transform: "scaleY(1)" },
  //         "55%": { transform: "translateY(0) scaleY(1)" },
  //         "95%": { transform: "translateY(100%) scaleY(1)" },
  //         "100%": { transform: "translateY(100%) scaleY(1)" },
  //       },
  //     },
  //     animation: {
  //       scrollIndicator:
  //         "scrollIndicatorAnimation 3s infinite cubic-bezier(0.83, 0, 0.17, 1)",
  //     },
  //     //   fontFamily: {
  //   //     'shufa': ['var(--font-ma-shan-zheng)', 'cursive'],  // 马善政书法体
  //   //     'qingke': ['var(--font-zcool-qingke-huangyou)', 'cursive'],  // 站酷庆科黄油体
  //   //     'xiaowei': ['var(--font-zcool-xiaowei)', 'serif'],  // 站酷小薇体
  //   //     'libian': ['STLiti', 'LiSu', 'serif'],  // 隶书
  //   //     'xingshu': ['STXingkai', 'KaiTi', 'serif'],  // 行书/楷书
  //   //     'yuanti': ['FZShuTi', 'STKaiti', 'serif'],  // 舒体/楷体
  //   //   }
  //   }
  // },
  // plugins: [
  //   plugin(function ({ addUtilities }) {
  //     addUtilities({
  //       ".writing-vertical-rl": {
  //         "writing-mode": "vertical-rl",
  //       },
  //       ".writing-vertical-lr": {
  //         "writing-mode": "vertical-lr",
  //       },
  //     });
  //   }),
  // ],
};
export default config;
