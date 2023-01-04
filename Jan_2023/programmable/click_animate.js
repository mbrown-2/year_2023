function clickEffect(e) {
    var d=document.createElement("div");
    d.className="clickEffect";
    d.style.top=e.clientY+"px";
    d.style.left=e.clientX+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}



function changeBackground() {
    document.body.style.backgroundColor = "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
}

//"rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ");";
// "rgb(155, 102, 102)";
document.addEventListener('click',clickEffect);

document.getElementById('Change_Color').addEventListener('click', changeBackground);
// addEventListener('DOMContentLoaded', onLoadAnimationHandler);

/**
 * Location finder
 * 
 * map features drag-n-drop feature
 * aside will show top n nearby locations based on selection bar
 * 
 */