window.onbeforeunload = ()=>{
    for (const form of document.getElementsByTagName('form'))form.reset();
} // // Function to update favicon based on theme
 // function updateFavicon(theme) {
 //   const favicon = document.querySelector('link[rel="icon"]') || 
 //                  document.createElement('link');
 //   favicon.rel = 'icon';
 //   favicon.type = 'image/svg+xml';
 //   favicon.href = theme === 'dark' ? "../assets/logo/Unfurl-Logo-Favicon.svg" : "../assets/logo/Unfurl-Logo-Favicon-Light.svg";
 //   if (!document.querySelector('link[rel="icon"]')) {
 //     document.head.appendChild(favicon);
 //   }
 // }
 // // Listen for system theme changes
 // if (window.matchMedia) {
 //   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
 //   // Set initial favicon
 //   updateFavicon(mediaQuery.matches ? 'dark' : 'light');
 //   // Listen for changes
 //   mediaQuery.addEventListener('change', (e) => {
 //     updateFavicon(e.matches ? 'dark' : 'light');
 //   });
 // }
;

//# sourceMappingURL=Unfurl-Website.44983732.js.map
