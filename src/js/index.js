import "../styles/main.css";
import "../styles/icon.css";
import "../styles/wrapper.css";
import "../styles/home.css";
import "../styles/form.css";
import "../styles/header.css";
import "../styles/burger-btn.css";
import "../styles/menu.css";
import "../styles/grid-gallery.css";
import "../styles/community.css";
import "../styles/card.css";

import { $burgerBtn } from "./selectors.js";
import { menuHandle } from "./functions.js";

$burgerBtn.addEventListener("click", menuHandle);
