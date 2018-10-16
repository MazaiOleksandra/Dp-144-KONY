//construnct LL

function LinkedList() {
  var first=null;
  var lng=0;
  this.cnt=function() {
    return lng;
  }

  var Node=function(value){
    this.value=value;
    this.next=null;
  }

  this.add=function(value){
    var newNode=new Node(value);
    if(first===null){
      first=newNode;
    }
    else{
      var prelastNode=first;
      //find last null next
      while(prelastNode.next!==null){
        prelastNode=prelastNode.next;
      }
      //
      prelastNode.next=newNode;
    }
    lng++;
  };


    this.deleteLast = function(){
      var currentNode = first;
      var previousNode;
      if(currentNode.next === null){
          first = currentNode.next;
      } else {
          while(currentNode.next !== null) {
              previousNode = currentNode;
              currentNode = currentNode.next;
          }

          previousNode.next = currentNode.next;
      }
      lng --;
    };


}

var list = new LinkedList();
list.add('test1');
list.add('test2');
list.add('test3');
list.add('test4');

console.log(list.cnt);
