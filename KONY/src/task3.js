// Сортировка треугольников
// Вывести треугольники в порядке убывания их площади.
// Входные параметры: массив объектов треугольник
// Выход: упорядоченный массив имён треугольников
// Примечание:
// Расчёт площади треугольника должен производится по формуле Герона.
// Каждый треугольник определяется именами вершин и длинами его сторон.
// Приложение должно обрабатывать ввод чисел с плавающей точкой:
//  {
//     vertices: ‘ABC’,
//     side1: 10,
//     side2: 20,
//     side3: 22.36
//  }



//главная функция сортировки массива
function mainSortTriangle(arrTriang){
	var newArr=checkAbilityDrowTriangl(arrTriang);
	var resultArray=sortArrayTriangles(newArr);
	return returnResult(resultArray);
}



//calc half perimetr of  object
function calcHalfPerim() {
	var half=0.5;
	calcPerim.apply(this);
	this.halfPerpimetr=this.perimetr*half;
	delete this.perimetr;
	return this.halfPerpimetr;
}

//calc perimetr of  object
function calcPerim() {
	this.perimetr=0;
	for(key in this){
		if(checkisNum(this[key])&&key!=='perimetr'){
			this.perimetr+=this[key];
		}
	}
	return this.perimetr;
}

//S=Math.sqrt(p (p−a) (p−b) (p−c) )
function calcAreaTriangle() {
	calcHalfPerim.apply(this);
	this.area=0;
	this.area=Math.sqrt(this.halfPerpimetr*(this.halfPerpimetr-this.side1)
		*(this.halfPerpimetr-this.side2)*(this.halfPerpimetr-this.side3));
	return this.area;
}


//сортировка массива по заданому принципу
function sortArrayTriangles(array){
	var newArr=checkAbilityDrowTriangl(array);
	newArr.sort(compareArea);
	return newArr;
}


//возврат результата
function returnResult(array) {
	var resultArray=[];
	var lngArr=array.length;
	for(var i=0;i<lngArr;i++){
		resultArray.push(array[i].vertices);
	}
	return resultArray;
}



function checkAbilityDrowTriangl(array){
	var newArr=[];
	lngArray=array.length;
	for(var i=0;i<lngArray;i++){
		calcAreaTriangle.apply(array[i]);
		if(array[i].area>0){
			newArr.push(array[i]);
		}
	}
	return newArr;
}


// логика сортировки массива 
function compareArea(triangle1, triangle2) {
  return triangle2.area - triangle1.area;
}


//check param is positive number
function checkisNum(number) {
    if(typeof number=== 'number' && number>0 ){
        return true;
    }
    return false;
}