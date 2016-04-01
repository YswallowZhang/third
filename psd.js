var more = document.querySelectorAll(".more");
var back = document.querySelector('.back');
var p = document.querySelector('.secondLeftP2');
var put = document.querySelector('.put');
var up = document.querySelector('up');
back.addEventListener('click', function(ev) {
	document.documentElement.scrollTop = document.body.scrollTop = 0;

})
more[0].addEventListener('click',function(ev) {
	ev.preventDefault();
	if(put.innerHTML == 'more') {
		p.style.overflow = 'visible';
    p.innerHTML = nocutString(p.innerHTML);
    put.innerHTML = '收起';
    put.style.fontSize = "10px";
	} else {
		put.innerHTML = 'more';
		p.innerHTML = cutString(p.innerHTML,96);
		put.style.fontSize = "14px";
	}
})
function nocutString(str) {
	return window.hh;
}
function cutString(str,len) {
	if(str.length <= len) {
		return str;
	}
	var strlen = 0;
	var s = '';
	for(var i = 0; i < str.length; i ++) {
		s = s + str.charAt(i);
		if(str.charCodeAt(i) > 256) {
			strlen = strlen + 2;
			if(strlen >= len) {
				return s.substring(0,s.length - 2) + '...';
			} 
		} else {
				strlen = strlen + 1;
				if(strlen >= len) {
					return s.substring(0,s.length - 1) + '...';
				}
		}		
	}	
	return s;
}
window.hh = p.innerHTML;
window.addEventListener('load',function() {
	p.innerHTML = cutString(p.innerHTML,96);
})