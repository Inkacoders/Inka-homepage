import "../styles/styles.scss";

import "../styles/elements/body.css";

import "../styles/objects/wrapper.css";

import "../styles/components/burger-btn.css";
import "../styles/components/card.css";
import "../styles/components/community.css";
import "../styles/components/grid-gallery.css";
import "../styles/components/header.css";
import "../styles/components/home.css";
import "../styles/components/icon.css";
import "../styles/components/logo.css";
import "../styles/components/menu.css";
import "../styles/components/portfolio.css";
import "../styles/components/services.css";
import "../styles/components/testimonial.css";
import "../styles/components/social-media.css";
import "../styles/components/form.css";
import "../styles/components/footer-menu.css";
import "../styles/components/footer.css";

import { $burgerBtn } from "./selectors.js";
import { menuHandle, resetMenu } from "./functions.js";

$burgerBtn.addEventListener("click", menuHandle);

window.addEventListener("resize", () => {
  window.innerWidth >= 1000 && resetMenu();
});
