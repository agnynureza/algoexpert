// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
//you can test in algoexpert test

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
          array.push(this.name)
          for(const child of this.children){
              child.depthFirstSearch(array)
          }
        return array
    }
  }
  
  // Do not edit the line below.
  exports.Node = Node;