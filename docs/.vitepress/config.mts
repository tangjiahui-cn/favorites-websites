import { defineConfig } from "vitepress";
import pkg from "../../package.json";

// 构建目标
const target = process.env.target;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: target === "github" ? `/${pkg.name}/` : "/",
  title: "Front Website",
  description: "一个前端技术收藏站点",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "前端技术", link: "/article/front" },
      { text: "面试网站", link: "/article/face" },
      { text: "前端库", link: "/article/lib" },
    ],
    sidebar: [
      {
        text: "",
        items: [
          { text: "前端技术", link: "/article/front" },
          { text: "面试网站", link: "/article/face" },
          { text: "前端库", link: "/article/lib" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/tangjiahui-cn/favorites-websites",
      },
    ],
  },
});
