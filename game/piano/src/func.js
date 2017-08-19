(function(){

    var _TU = function(){
    }
    
    _TU.prototype.loadPiano = function(n){
        var newPiano = document.createElement("div");
        newPiano.className = "piano"+n;
        for(i=0;i<n;i++){
            newPiano.innerHTML += "<div id='pianokey"+(i+1)+"' class='pianokey' onclick='TU.playSound()'><audio src='sounds/sound"+n+"-"+(i+1)+".m4a' preload></audio></div>"
        }
        document.body.appendChild(newPiano);
    }
    
    _TU.prototype.playSound = function(){
        thisDiv = event.srcElement;
        res = thisDiv.firstChild;
        res.currentTime = 0;
        res.play();
    }
    
    window.TU = new _TU();

})();