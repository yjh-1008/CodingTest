const fs = require('fs');
let input = fs.readFileSync('./text.txt').toString().trim();

function Solution() {
  const words = ["pi","ka","chu"];

  for(let i=0;i<3;i++) {
    input = input.replaceAll(words[i],"@");
  }
  
  for(let i=0;i<input.length;i++) {
    if(input.charAt(i) !== '@') {
      console.log('NO');
      return;
    }
  }
  // console.log(?input)
  console.log('YES')
}

Solution();

