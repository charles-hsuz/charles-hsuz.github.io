function doStuff(){var e=0;try{ap=aplayers[0],ap.list,e=1}catch{return void setTimeout(doStuff,50)}if(e){if(ap.lrc.hide(),document.getElementsByClassName("aplayer-icon-menu")[0].click(),null!=localStorage.getItem("musicIndex")&&(musicIndex=localStorage.getItem("musicIndex"),ap.list.switch(musicIndex)),null!=sessionStorage.getItem("musicTime")){window.musict=sessionStorage.getItem("musicTime"),ap.setMode(sessionStorage.getItem("musicMode")),"1"!=sessionStorage.getItem("musicPaused")&&ap.play();var s=!0;ap.on("canplay",(function(){s&&(ap.seek(window.musict),s=!1)}))}else sessionStorage.setItem("musicPaused",1),ap.setMode("mini");null!=sessionStorage.getItem("musicVolume")&&(ap.audio.volume=Number(sessionStorage.getItem("musicVolume"))),ap.on("pause",(function(){sessionStorage.setItem("musicPaused",1),ap.lrc.hide()})),ap.on("play",(function(){sessionStorage.setItem("musicPaused",0),ap.lrc.show()})),ap.audio.onvolumechange=function(){sessionStorage.setItem("musicVolume",ap.audio.volume)},setInterval((function(){musicIndex=ap.list.index,musicTime=ap.audio.currentTime,localStorage.setItem("musicIndex",musicIndex),sessionStorage.setItem("musicTime",musicTime),sessionStorage.setItem("musicMode",ap.mode)}),200)}}doStuff();