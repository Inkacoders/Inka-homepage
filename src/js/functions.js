import { $burgerBtn } from "./selectors.js";

function menuHandle() {
  const isOpen = $burgerBtn.classList.toggle("burger-btn--pressed");
}

export { menuHandle };
