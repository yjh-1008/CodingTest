class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

}

class BST {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(data) {
    let node = this.root;
    let parent = this.root;

    while(node != null) {
      parent = node;
      if(data > node.data) {
        node = node.right;
      } else {
        node = node.left;
      }
    }


    if(parent === null) {
      this.root = new Node(data);
    } else if(parent.data > data) {
      parent.left = new Node(data);
    } else {
      parent.right = new Node(data);
    }

  }


  remove(key) {
    const ret = this.root;
    this.removeNode(this.root, key);
    return tmp;
  }

  removeNode(node, key) {
    if(node === null) return null;
    else if(node.data > key) {
      node.left = removeNode(node.left, key)
    } else if(node.data < key) {
      node.right = removeNode(node.right, key);
    } else {
      if(node.left === null && node.right === null) {
        node = null
        return node;
      }

      if(node.left === null)
      {
          node = node.right;
          return node;
      }else if(node.right === null)
      {
          node = node.left;
          return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;
 
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if(node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
  }
}

// class BST {
//   constructor() {
//     this.root = null;
//     this.count = 0;
//     // this.count = 0;
//   }

//   insert(data) {
//     let node = this.root;
//     let parent = this.root;

//     while(node != null) {
//       parent = node;
//       if(node.data > data) {
//         node = node.left;
//       } else {
//         node = node.right;
//       }
//     }

//     //만약 트리가 비어있다면, 루트에 삽입
//     if(parent === null) {
//       this.root = new Node(data);
//     } else if(parent.data > data){
//       parent.left = new Node(data);
//     } else {
//       parent.right = new Node(data);
//     }
//   }

//   minimun(node) {
//     while(node.left != null) {
//       node = node.left;
//     }
//     return node;
//   }

//   remove(data){
//     let tmp = this.root;
//     this.root = this.removeNode(this.root, data);
//     return tmp;
//   }
//   removeNode(node, key){
//     // if the root is null then tree is 
//     // empty
//     if(node === null)
//         return null;
 
//     // if data to be delete is less than 
//     // roots data then move to left subtree
//     else if(key < node.data)
//     {
//         node.left = this.removeNode(node.left, key);
//         return node;
//     }
 
//     // if data to be delete is greater than 
//     // roots data then move to right subtree
//     else if(key > node.data)
//     {
//         node.right = this.removeNode(node.right, key);
//         return node;
//     }
 
//     // if data is similar to the root's data 
//     // then delete this node
//     else
//     {
//          // deleting node with no children
//         if(node.left === null && node.right === null)
//         {
//             node = null;
//             return node;
//         }
 
//         // deleting node with one children
//         if(node.left === null)
//         {
//             node = node.right;
//             return node;
//         }else if(node.right === null)
//         {
//             node = node.left;
//             return node;
//         }
 
//         // Deleting node with two children
//         // minimum node of the right subtree
//         // is stored in aux
//         var aux = this.findMinNode(node.right);
//         node.data = aux.data;
 
//         node.right = this.removeNode(node.right, aux.data);
//         return node;
//     }
//   }

//   findMinNode(node) {
//     // if left of a node is null
//     // then it must be minimum node
//     if(node.left === null)
//         return node;
//     else
//         return this.findMinNode(node.left);
//   }
// }