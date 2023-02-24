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

  //method to search a node in the tree
  find(value){
    //check if there is a root (if tree is empty)...
    if (!this.root) return false;

    let currentNode = this.root; //grab reference to root node

    //loop while there're nodes to loop through
    while(currentNode) {
      //if the value is less than current node
      if (value < currentNode.value) {
        //move to what's on the left of it by making it the current 
        //(to keep us looping until we find the node we're looking for)
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        //if the value is greater than current node...
        //move to what's on the right of it by making it the current
        //(to keep us looping until we find the node we're looking for)
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        //if we got a match, return it
        return currentNode;
      }
    }

    return false; //if cannot find anything after traversing
  }

  //Breadth First Search is a way of traversing the tree
  //by visiting each level sequentially.
  BFSIterative() {
    let nodesVisited = []; //to store the list and return it
    let queue = []; //a queue of nodes to be visited
    let node = this.root; //a reference to the root
    
    queue.push(this.root); //add the root to the queue to start
    
    //traverse while there is something inside the queue
    while(queue.length) {
      //Take first node out of queue and
      //update node variable so that it is 
      //the first in the arr (next in line)
      node = queue.shift();
      //push that node that we grabbed from the queue
      //to the list of visited nodes
      nodesVisited.push(node);

      //if it has a left node...
      if (node.left) {
        //push it...
        nodesVisited.push(node.left);
      }

      //if it has a right node...
      if (node.right) {
        //push it...
        nodesVisited.push(node.right);
      }
    }

    return nodesVisited; //return the list of nodes traversed
  }

  //Depth First: Means going down on the levels first.
  //Visiting nodes vertically.
  //With PreOrder, we visit current node, then all left children and 
  //then all right children
  DFSPreOrder() {
    let nodesVisited = []; //to store the list and return it
    let current = this.root; //a reference to current node starting at root

    //A method to traverse depth first and push the
    //current node being visited and also push it's left and right
    //children recursively.
    function traverse(node) {
      nodesVisited.push(node); //push the node being passed

      //if it has a left child or right child
      if (node.left) traverse(node.left); //traverse the left recursively
      if (node.right) traverse(node.right); //traverse the right recursively
    }

    //invoke traverse with current node
    traverse(current);

    return nodesVisited; //return the lsit of nodes visited in pre order
  }

  //With PostOrder, we visit left child & right child, 
  //then current/parent node
  DFSPostOrder() {
    
  }

  
}