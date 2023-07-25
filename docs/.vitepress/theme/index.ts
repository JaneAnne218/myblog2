// .vitepress\theme\index.ts
import Theme from "vitepress/theme";
import MyLayout from './MyLayout.vue'
// import "./style/var.css";

export default {
  ...Theme,
  // override the Layout with a wrapper component that injects the slots
  Layout: MyLayout,
};