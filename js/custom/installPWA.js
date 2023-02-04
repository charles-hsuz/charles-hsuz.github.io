var deferredPrompt = null;

// 监听beforeinstallprompt事件，该事件在网站满足PWA安装条件时触发，保存安装事件
window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e;
});

// 监听appinstalled事件，该事件在用户同意安装后触发，清空安装事件
window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
});

function addToDesktop() {
    deferredPrompt.prompt();
}