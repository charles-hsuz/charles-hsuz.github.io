function setCookie(e,t,i){var o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3);var n="expires="+o.toGMTString();document.cookie=e+"="+t+"; "+n}function getCookie(e){for(var t=e+"=",i=document.cookie.split(";"),o=0;o<i.length;o++){var n=i[o].trim();if(0==n.indexOf(t))return n.substring(t.length,n.length)}return""}var time_count,old_title=document.title;function getFireConfirm(){"true"!=getCookie("noFire")&&(confirm("你想和我一起放烟花吗？")?location.href+="/fire.html":confirm("7天内不再提醒？")&&setCookie("noFire","true",7))}document.addEventListener("visibilitychange",(function(){document.hidden?time_count=setTimeout((function(){document.title="(つェ⊂)我藏好了哦~ "}),1e3):(clearTimeout(time_count),document.title=old_title)})),getFireConfirm();