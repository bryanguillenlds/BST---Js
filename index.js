class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  //method to inser a node in the tree
  insert(value) {
    //create a node
    let newNode = new Node(value);

    //if there is not a root (if tree is emtpy)...
    if (!this.root) {
      //make new node be the root and return
      this.root = newNode;
      return this;
    } else {
      //if there are nodes...
      //grab reference to root
      let currentNode = this.root;
      
      //iterate and decide the place of insertion
      //this loop will only break by returning out of it
      while (true) {
        //if the value is less than the current node...
        if (val < currentNode.value) {
          //we go left and check if there is NOT a node already there
          if (!currentNode.left) {
            //insert node there and break out of loop
            currentNode.left = newNode;
            return this;
          }

          //if there is something already on the left of the current node...
          //make the one on the left to be the new current
          //to keep us looping until there isn't a left node
          currentNode = currentNode.left;
        } else {
          //if the value is greater or equal to current node in the iteration
          //we go to the right and check if there's nothing there already...
          if (!currentNode.right) {
            //insert node there and break out of loop
            currentNode.right = newNode; 
            return this;
          }

          //if there is something already on the right of the current node...
          //make the one on the right to be the new current
          //to keep us looping until there isn't a right node
          currentNode = currentNode.right;
        }
      }
    }
  }
}