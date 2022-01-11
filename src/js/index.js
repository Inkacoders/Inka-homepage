import "../styles/main.css";
import "../styles/home.css";
import "../styles/form.css";
import "../styles/header.css";
import "../styles/burger-btn.css";
import "../styles/menu.css";
import "../styles/grid-gallery.css";

import { $burgerBtn } from "./selectors.js";
import { menuHandle } from "./functions.js";

$burgerBtn.addEventListener("click", menuHandle);
