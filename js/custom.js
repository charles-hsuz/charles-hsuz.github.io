let directoryPath = '/js/custom/';
const p_files = ['fire.js', 'ex-search.js', 'installPWA.js'];
p_files.forEach(function (file) {
  if (file.endsWith('.js')) {
    const script = document.createElement('script');
    script.setAttribute('data-pjax', '')
    script.setAttribute('async', '')
    script.src = directoryPath + file;
    document.head.appendChild(script);
  }
})
const files = ['music.js', 'ascii.js', 'PublicSacrificeDay.js'];
files.forEach(function (file) {
  if (file.endsWith('.js')) {
    const script = document.createElement('script');
    script.setAttribute('async', '')
    script.src = directoryPath + file;
    document.head.appendChild(script);
  }
});;
