// Числовая последовательность
// Вывести через запятую ряд длиной n, состоящий из натуральных чисел, квадрат которых не меньше заданного m.
// Входные параметры: длина и значение минимального квадрата
// Выход: строка с рядом чисел

function outputNumbers(param){
	if(!validationParam(arguments,6)){
		return 'Неверные параметры для задачи,перечитайте условие';
	}
	var startNum=getFirstNum(param.minSqr);
	var resultArr=[startNum];
	for(var i=0;i<param.lng-1;i++){
		resultArr.push(resultArr[i]+1);
	}
	return resultArr.join(',');
}


function getFirstNum(minSqr) {
	var firstNum=Math.floor(Math.sqrt(minSqr))+1;
	return firstNum;
}

