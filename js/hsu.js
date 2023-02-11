const hsu = {
    // 上上下下左右左右abab
    Dmode: function () {
        this.Debug = true;
        return '已启用Debug模式'
    },
    Debug: false,
    keyCombo: {
        'Shift': {},
        'Alt': {},
        'Ctrl': {}
    },
    KCadd: function (fkey, ckey, func) {
        ckey = ckey.toLowerCase()
        if (this.keyCombo[fkey] == undefined) {
            throw '功能键只能为 Shift/Alt/Ctrl'
        } else if (this.keyCombo[fkey][ckey] != undefined) {
            throw 'keyCombo has existed!'
        } else if (typeof fkey != 'string' || typeof ckey != 'string') {
            throw 'keyCombo should be string type!'
        }
        else {
            this.keyCombo[fkey][ckey] = func
            if (this.Debug) console.log(fkey + "+" + ckey + "已绑定" + func)
        }
    },
    reloadScript: function (url) {
        var script = document.querySelector(`script[src="${url}"]`);
        if (!script) return;

        var newScript = document.createElement("script");
        newScript.src = url;
        script.parentNode.insertBefore(newScript, script);
        script.remove();
    },
}

$(window).on("keydown", function (event) {
    if (event.shiftKey) {
        let func = hsu.keyCombo['Shift'][event.key.toLowerCase()]
        if (func != undefined) {
            func()
            if (hsu.Debug) console.log('快捷键' + 'Shift + ' + event.key.toLowerCase() + ' 启用 : ' + func)
        } else if (hsu.Debug) {
            console.log('没有该快捷键')
            console.log(event.key.toLowerCase())
        }
    }
})

window.onkeydown = function (e) {
    if (e.key === 'F12') {
        btf.snackbarShow('开发者模式已打开，请遵循GPL协议', false, 3000)
    }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    alert('移动端适配ing，显示可能有问题，建议使用PC访问')
} else {
}




// 禁用整个页面的所有浏览器默认右击事件
// document.oncontextmenu = function(){
//     return false;
// }
// 点击此div出现右键菜单
// let contextMenu = document.getElementsByClassName('app-tabs-main')[0]
// 点击出现的菜单div
// let divCon = document.getElementsByClassName('context-menu-tab')[0];
// 给div绑定右击事件
// contextMenu.addEventListener('contextmenu', function (event) {
    // 设置右键菜单显示
    // divCon.style.display = 'block'
    // 设置右键菜单的展示位置
    // divCon.style.left = event.clientX + 'px'
    // divCon.style.top = event.clientY + 'px'
    // 添加页面的监听事件 - 点击页面任意一处菜单隐藏
    // document.addEventListener('click', removeClickFun)
    // 隐藏掉右键菜单
    // function removeClickFun () {
        // 隐藏菜单
        // divCon.style.display = 'none';
        // 取消页面的监听
        // document.removeEventListener('click', removeClickFun)
//     }
// })