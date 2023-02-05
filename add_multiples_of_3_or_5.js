/**
 * get  all the natural numbers below 10 that are multiples of 3 or 5
 */
const get_multiples = (num, range) => {
    let total = 0;
    for (let i = 0; i < range; i++){
        if(i % num[0] == 0 || i % num[1] == 0){
            total = total + i
        }
    }
    return total
}

let ans = get_multiples([3,5],1000)

console.log(ans)