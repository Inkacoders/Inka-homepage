import "../styles/main.css";
import "../styles/icon.css";
import "../styles/wrapper.css";
import "../styles/logo.css";
import "../styles/home.css";
import "../styles/form.css";
import "../styles/header.css";
import "../styles/burger-btn.css";
import "../styles/menu.css";
import "../styles/grid-gallery.css";
import "../styles/community.css";
import "../styles/services.css";
import "../styles/card.css";
import "../styles/testimonial.css";
import "../styles/portfolio.css";
import "../styles/footer.css";
import "../styles/footer-menu.css";
import "../styles/social-media.css";

import { $burgerBtn } from "./selectors.js";
import { menuHandle } from "./functions.js";

$burgerBtn.addEventListener("click", menuHandle);
