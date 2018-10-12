//pop,push,shift,unshift,getObjekt,getIndex
//elem{sourse,target,value}

function Node(source,target,value) {
  this.source = source;
  this.target = target;
  this.value = value;
};

function LinkedList(){
	this.node=new Node(null,null,0);
}


var LinkedList1=new LinkedList();
console.log(LinkedList1);


function pushLinkedList(obj,elem) {
//find last elem
var last=findLastElem(obj);

//update last elem

}

function findLastElem(obj){
	var next=obj.target;
	var last;
	while(next==null){
		next=obj.target;
		last=obj.source;
	}	
	return last;
}





//console.log(findLastElem(LinkedList));
