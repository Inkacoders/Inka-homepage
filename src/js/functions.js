import { $burgerBtn, $menuContainer, $body } from "./selectors.js";

function menuHandle() {
  const isOpen = $burgerBtn.classList.toggle("burger-btn--pressed");

  if (isOpen) {
    $menuContainer.classList.add("menu__container--expanded");
    $menuContainer.ariaExpanded = "true";
    $burgerBtn.ariaPressed = "true";
    $body.style.overflowY = "hidden";
    return;
  }

  $menuContainer.classList.remove("menu__container--expanded");
  $menuContainer.ariaExpanded = "false";
  $burgerBtn.ariaPressed = "false";
  $body.style.overflowY = "auto";
}

export { menuHandle };
