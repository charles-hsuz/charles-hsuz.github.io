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
    KCadd: function(fkey, ckey, func) {
        ckey = ckey.toLowerCase()
        if(this.keyCombo[fkey] == undefined) {
            throw '功能键只能为 Shift/Alt/Ctrl'
        } else if(this.keyCombo[fkey][ckey] != undefined) {
            throw 'keyCombo has existed!'
        } else if (typeof fkey != 'string' || typeof ckey != 'string') {
            throw 'keyCombo should be string type!'
        }
        else {
            this.keyCombo[fkey][ckey] = func
            if(this.Debug) console.log(fkey + "+" + ckey + "已绑定" + func)
        }
    },
}

$(window).on("keydown", function (event) {
    if(event.shiftKey){
        let func = hsu.keyCombo['Shift'][event.key.toLowerCase()]
        if(func != undefined){
            func()
            if(hsu.Debug) console.log('快捷键' + 'Shift + ' + event.key.toLowerCase() + ' 启用 : ' + func)
        }
    }
})