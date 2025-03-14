export function getThemeScript() {
  return `
    (function () {
      const theme = JSON.parse(localStorage.getItem("settings-storage") || "{}")?.state;
      if (theme) {
        const root = document.documentElement;
        
        if (theme.themeColor) {
          root.style.setProperty("--primary", theme.themeColor.value ?? theme.themeColor.primary);
          if(theme.themeColor?.foreground){
            root.style.setProperty("--primary-foreground", theme.themeColor.foreground);
          }
        }

        if (theme.roundedCorner !== undefined) {
          root.style.setProperty("--radius", theme.roundedCorner + "rem");
        }

        if (theme.contentLayout) {
          root.setAttribute("data-content-layout", theme.contentLayout);
        }

        if (theme.fontFamily) {
          root.style.setProperty("font-family", "var(--font-" + theme.fontFamily + ")");
        }
      }
    })();
  `;
}
