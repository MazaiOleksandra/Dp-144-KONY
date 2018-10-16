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
      while(prelastNode.next!==null){
        prelastNode=prelastNode.next;
      }
      prelastNode.next=newNode;
    }
    lng++;
    return true;

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
    return true;
  };

  this.deleteValue = function(value){
    var currentNode = first;
    var previousNode;
    if(currentNode.value === value){
        first = currentNode.next;
    } else {
        while(currentNode.value !== value) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
    previousNode.next = currentNode.next;
    }
    lng --;
    return true;

  };

}

var list = new LinkedList();
list.add('test1');
list.add('test2');
list.add('test3');
list.add('test4');
list.deleteLast();
list.deleteLast('test2');

console.log(list.cnt);
