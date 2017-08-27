(function(){

    var _TU = function(){
    }
    
    _TU.prototype.loadPiano = function(n){
        var newPiano = document.createElement("div");
        newPiano.className = "piano"+n;
        
        for(i=0;i<n;i++){
            newPiano.innerHTML += "<div id='pianokey"+(i+1)+"' class='pianokey' onclick='TU.playSound()'><audio src='sounds/sound"+n+"-"+(i+1)+".m4a' preload></audio></div>"
        }
        
        newPiano.innerHTML += "<div id='keyboard' tabindex='-1' onkeydown='TU.keydown(event);'></div>"
        
        document.body.appendChild(newPiano);
        
        var keyboard = document.getElementById("keyboard");
        keyboard.onfocus = function(){keyboard.innerText = "键盘:on";};
        keyboard.onblur = function(){keyboard.innerText = "开启键盘";};
        keyboard.focus();
    }
    
    _TU.prototype.playSound = function(n){
        if(!n){
            thisDiv = event.srcElement;
        }else{
            thisDiv = document.getElementById("pianokey"+n);
        }
        if(thisDiv){
            res = thisDiv.firstChild;
            res.currentTime = 0;
            res.play();
        }
    }
    
    _TU.prototype.keydown = function(e){
        var keynum = window.event ? e.keyCode : e.which;
        
        if(keynum>48){
            TU.playSound(keynum-48);
        }
        
    }
    
    window.TU = new _TU();

})();
