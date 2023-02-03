const directoryPath = '/js/custom/';
const files = ['fire.js', 'ascii.js', 'rightmenu.js', 'ex-search.js', 'shortcut.js', 'installPWA.js'];
files.forEach(function (file) {
  if (file.endsWith('.js')) {
    const script = document.createElement('script');
    script.src = directoryPath + file;
    document.head.appendChild(script);
  }
});
