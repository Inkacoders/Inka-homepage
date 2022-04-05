import "../styles/settings/fonts.css"
import "../styles/settings/variables.css"

import "../styles/elements/body.css"
import "../styles/elements/icon.css"
import "../styles/elements/wrapper.css"

import "../styles/objects/burger-btn.css"

import "../styles/components/card.css";
import "../styles/components/community.css";
import "../styles/components/form.css";
import "../styles/components/grid-gallery.css";
import "../styles/components/header.css";
import "../styles/components/home.css";
import "../styles/components/menu.css";
import "../styles/components/portfolio.css";
import "../styles/components/services.css";
import "../styles/components/testimonial.css";

import "../styles/elements/body.css";
import "../styles/elements/icon.css";
import "../styles/elements/wrapper.css";

import "../styles/objects/burger-btn.css";

import "../styles/settings/fonts.css";
import "../styles/settings/variables.css";


import { $burgerBtn } from "./selectors.js";
import { menuHandle } from "./functions.js";

$burgerBtn.addEventListener("click", menuHandle);