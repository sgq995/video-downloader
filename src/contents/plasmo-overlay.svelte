<script context="module" lang="ts">
  import plasmoOverlayCSS from "data-text:~/contents/plasmo-overlay.css";
  import styleCSS from "data-text:~/style.css";
  import type { PlasmoCSConfig } from "plasmo";

  export const config: PlasmoCSConfig = {
    matches: ["https://www.plasmo.com/*"],
  };

  export const getStyle = () => {
    const style = document.createElement("style");
    style.textContent = `${styleCSS}${plasmoOverlayCSS}`;
    return style;
  };
</script>

<span class="bg-red-500 text-white">Every living thing wants to survive</span>
