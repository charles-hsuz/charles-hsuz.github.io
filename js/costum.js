var old_title = document.title;
var time_count;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        time_count = setTimeout(function () {
            document.title = '(つェ⊂)我藏好了哦~ '
        }, 1000);
    }
    else {
        clearTimeout(time_count);
        document.title = old_title;
    }
});

function getConfirmation() {
    var hr = location.href;
    var retVal = confirm("你想和我一起放烟花吗？");
    if (retVal == true) {
        location.href = hr + "/fire.html";
        return;
    } else {
        return;
    }
}

getConfirmation();

