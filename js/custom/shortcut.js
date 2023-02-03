window.onload = function () {
    document.onkeydown = function (event) {
        event = event || window.event;
        if (event.shiftKey && (event.key === 'k' || event.key === 'K')) {
            openSearch()
        }
    }
}