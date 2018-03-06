(function(){
		var initNumber = 0;
		var count = 0;
		var imgContainer = document.getElementById("imgs");
		var imgUrl;
		var img;
		var loadNextImg = function(){
			imgUrl = (initNumber + count) + ".jpg";
			count++;
			img = new Image();
			imgContainer.appendChild(img);
			img.onload = function(){
				console.log(this.src);
				if (count < 20)
					loadNextImg();
			}
			img.src = imgUrl;
		}
		loadNextImg();
})()
