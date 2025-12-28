/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    //무조건 꽃을 심는게 좋다.
    // for(let i=0;)
    let count = 0;
    const N = flowerbed.length

    if(N === 1) {
        if(flowerbed[0] === 0) {
            count++;
        }
        return count >= n
    }

    if(flowerbed[0] === 0 && flowerbed[1] === 0) {
        flowerbed[0] = 1;
        count++;
    }

    if(flowerbed[N-1] === 0 && flowerbed[N-2] === 0) {
        flowerbed[N-1] = 1;
        count++;
    }

    for(let i=1;i<N - 1;i++) {
        if(count >= n) return true;
        if(flowerbed[i] === 0
         && flowerbed[i-1] === 0
         && flowerbed[i+1] === 0
        ) {
            flowerbed[i] = 1;
            count++;
        }
    }
    return count >= n;
};