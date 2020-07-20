var close = document.getElementById('close');

f = 0;

close.onclick = function target(){
	if(f==0){
		Menu.style.width = '0px'
		close.style.right = '0px'
		close.style.background = 'url("img/left.png") no-repeat 50% 50%'
		close.style.backgroundColor = '#D00355'
		f = 1;
	}
	else if(f==1){
		Menu.style.width = '230px'
		close.style.right = '230px'
		close.style.background = 'url("img/right.png") no-repeat 50% 50%'
		close.style.backgroundColor = '#D00355'
		f = 0;
	}
}


