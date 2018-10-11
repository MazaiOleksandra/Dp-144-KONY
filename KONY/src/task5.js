function countLuckyTicket(obj){
	var cnt1=0;
	var cnt2=0;
	var left,right,odd,even;
	var min=obj.min;
	var result;
	for(var i=0;min<=obj.max;i++){
        var tmparr=String(min).split('').map(Number);
        left=tmparr[0]+tmparr[1]+tmparr[2];
        right=tmparr[3]+tmparr[4]+tmparr[5];
        odd =tmparr[1]+tmparr[3]+tmparr[5];
        even=tmparr[0]+tmparr[2]+tmparr[4];
		if(left==right){
			cnt1++
		}
		if(odd==even){
			cnt2++
		}
		min++;
	}
	if(cnt1>cnt2){
		result='Победивший метод "простой" с результатом:'
		 + cnt1+' проиграл "сложный" метод с результатом: ' 
		 + cnt2;
	}
	else if(cnt1<cnt2){
		result='Победивший метод "сложный" с результатом:' 
		+ cnt2+' проиграл "простой" метод с результатом: ' 
		+ cnt1;

	}
	else {
		result='Ничья! Результат "сложного" и "простого" метода: ' 
		+ cnt2;
	}
	return result;
}