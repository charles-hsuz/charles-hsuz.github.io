const directoryPath = '/js/custom/';
const files = ['fire.js', 'ascii.js', 'ex-search.js', 'installPWA.js', 'music.js'];
files.forEach(function (file) {
  if (file.endsWith('.js')) {
    const script = document.createElement('script');
    script.setAttribute('data-pjax', '')
    script.setAttribute('async', '')
    script.src = directoryPath + file;
    document.head.appendChild(script);
  }
});
