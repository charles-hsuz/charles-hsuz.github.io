var deferredPrompt=null;
window.addEventListener("beforeinstallprompt",(e => {e.preventDefault(),deferredPrompt=e})),
window.addEventListener("appinstalled",(()=>{deferredPrompt=null}));
function addToDesktop(){deferredPrompt.prompt()}