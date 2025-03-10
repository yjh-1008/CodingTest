// 그래프의 노드의 개수가 n개 일 때
// 자기 자신이 부모 노드로 존재하는 배열 생성
let parent = [];
for(let i=0; i<=n; i++) parent[i] = i;

// 만들기
// x가 어떤 집합에 속해있는지 재귀 함수를 이용해서 찾는다.
const getParent = (parent, x) => {
  if(parent[x] === x) return x;
  return parent[x] = getParent(parent, parent[x]);
}

// x와 y가 속한 집합(parent)을 찾아
// 둘중 더 작은 부모 값으로 합친다.
const unionParent = (parent, x, y) => {
  const s1 = getParent(parent,x);
  const s2 = getParent(parent,y);
  if(s1<s2) return parent[s2] = s1;
  else return parent[s1] = s2;
}

// 찾기
// x와 y가 속한 집합(parent)이 같은 부모를 갖는지 확인한다.
const findParent = (parent, x, y) => {
  const s1 = getParent(parent,x);
  const s2 = getParent(parent,y);
  if(s1===s2) return true;
  else return false;
}