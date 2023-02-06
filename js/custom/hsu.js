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
      }      
}

$(window).on("keydown", function (event) {
    if (event.shiftKey) {
        let func = hsu.keyCombo['Shift'][event.key.toLowerCase()]
        if (func != undefined) {
            func()
            if (hsu.Debug) console.log('快捷键' + 'Shift + ' + event.key.toLowerCase() + ' 启用 : ' + func)
        }else if(hsu.Debug){
            console.log('没有该快捷键')
        }
    }
})

window.onkeydown = function (e) {
    if (e.key === 'F12') {
        btf.snackbarShow('开发者模式已打开，请遵循GPL协议', false, 3000)
    }
}