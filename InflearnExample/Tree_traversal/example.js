const tree = Array.from(new Array(6), () => new Array());
const visited = new Array(6).fill(0);
fillTree(1, 2);
fillTree(1, 3);
fillTree(2, 4);
fillTree(2, 5);

function fillTree(a, b) {
  tree[a].push(b);
}
function postOrder(s) {
  if (visited[s] === 0) {
    if (tree[s].length === 1) postOrder(tree[s][0]);
    else if (tree[s].length === 2) {
      postOrder(tree[s][0]);
      postOrder(tree[s][1]);
    }
    visited[s] = 1;
    console.log(s);
  }
}

console.log(tree);

function preOrder(s) {
  if (visited[s] === 0) {
    visited[s] = 1;
    console.log(s);
    if (tree[s].length === 1) postOrder(tree[s][0]);
    else if (tree[s].length === 2) {
      preOrder(tree[s][0]);
      preOrder(tree[s][1]);
    }
  }
}

function inOrder(s) {
  if (visited[s] === 0) {
    if(tree[s].length === 1) {
        inOrder(tree[s][0]);
        visited[s] = 1;
        console.log(s);
    }else if(tree[s].length === 2) {
        inOrder(tree[s][0]);
        visited[s] = 1;
        console.log(s);
        inOrder(tree[s][1]);
    }else {
        visited[s] = 1;
        console.log(s);
    }
  }
}

inOrder(1);
