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

function sortArrayTriangles(array){
	var newArr=checkAbilityDrowTriangl(array);
	newArr.sort(compareArea);
	return newArr;
}

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


// логика сортировки массива для сортировки массива
function compareArea(triangle1, triangle2) {
  return triangle2.area - triangle1.area;
}

function mainSortTriangle(arrTriang){
	var newArr=checkAbilityDrowTriangl(arrTriang);
	var resultArray=sortArrayTriangles(newArr);
	return returnResult(resultArray);
}

var arr=[{
	vertices: "A",
	side1: 1.4,
	side2: 1.4,
	side3: 1.4
},{
	vertices: "B",
	side1: 2,
	side2: 2,
	side3: 2
},{
	vertices: "C",
	side1: 10,
	side2: 25,
	side3: 10
},{
	vertices: "D",
	side1: 10,
	side2: 25,
	side3: 20
},{
	vertices: "E",
	side1: 5,
	side2: 25,
	side3: 10
}] 


console.log(mainSortTriangle(arr));


//check param is positive number
function checkisNum(number) {
    if(typeof number=== 'number' && number>0 ){
        return true;
    }
    return false;
}