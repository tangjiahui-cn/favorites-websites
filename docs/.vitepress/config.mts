import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Front Website",
  description: "一个前端技术收藏站点",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "前端技术", link: "/article/front" },
      { text: "面试网站", link: "/article/face" },
    ],
    sidebar: [
      {
        text: "",
        items: [
          { text: "前端知识点", link: "/article/front" },
          { text: "面试八股文", link: "/article/face" },
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
