export function getThemeScript() {
  const META_THEME_COLORS = {
    light: "#ffffff",
    dark: "#09090b"
  };

  return `
    (function () {
     
      try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
                
      
    })();
  `;
}

/*const theme = JSON.parse(localStorage.getItem("shadcn-theme-settings") || "{}")?.state;
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
}*/
