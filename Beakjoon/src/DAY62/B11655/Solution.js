const fs = require('fs')
const input = fs.readFileSync('./index.txt').toString().split('');

const result = input.map((data)=> {
    let ascii = data.charCodeAt()

    if(ascii >= 65 && ascii <= 90) {//대문자
        let slide = ascii + 13 
        if(slide > 90) {
            return String.fromCharCode(slide-91 +65)
        }else {
            return  String.fromCharCode(slide);;
        }
    }
    else if(ascii>=97 && ascii<=122) {//소문자
        let slide = ascii + 13 
        if(slide > 122) {
            return String.fromCharCode(slide-123 +97)
        }else {
            return  String.fromCharCode(slide);
        }
    }else {
        return String.fromCharCode(ascii)
    }
})

console.log(result.join(''))