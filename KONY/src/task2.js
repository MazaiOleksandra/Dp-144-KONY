// Анализ конвертов
// Есть два конверта со сторонами (a,b) и (c,d). Требуется определить, 
//можно ли один конверт вложить в другой. Программа должна обрабатывать ввод чисел с плавающей точкой.
// Входные параметры: объекты конверт1 и конверт2
// Выход: номер конверта, если вложение возможно, 0 – если вложение невозможно.
//Сортируем стороны по увеличению
function sortSide(cover){
	var maxSide;
	if(cover.side1<cover.side2){
		maxSide=cover.side2;
		cover.side2=cover.side1;
		cover.side1=maxSide;
	}
	return cover;
}
//Сравнение covers
function coversComparison(cov1,cov2) {
	if(sideComparison(cov1.side1,cov2.side1)){
		if(sideComparison(cov1.side2,cov2.side2)){
			return 'first';
		}
	}
	else{
		if(sideComparison(cov2.side2,cov1.side2)){
			return 'second';
		}
	}
	return 0;	
}
//Сравнение по сложной формуле
//функция определния возможности вложить конверт
//comparison two param
function sideComparison(side1,side2){
	if(side1>side2){
		return true;
	}
	return false;
}


function checkInscribeCovers(param) {	
	if(!validationParam(arguments,2)){
		return 'Неверные параметры для задачи,перечитайте условие';
	}
	sortSide(param.cover1);
	sortSide(param.cover2);
	return coversComparison(param.cover1,param.cover2);	
}


