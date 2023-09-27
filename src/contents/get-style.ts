import cssText from "data-text:~style.css";

export function getStyle() {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
}
