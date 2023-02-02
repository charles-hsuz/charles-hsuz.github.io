function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

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

// 烟花
function getFireConfirm() {
    if(getCookie("noFire") == "true") return;
    if (confirm("你想和我一起放烟花吗？")) {
        location.href += "/fire.html";
    } else {
        if (confirm("7天内不再提醒？")) {
            setCookie("noFire", "true", 7);
        }
    }
    return;
}

getFireConfirm();



