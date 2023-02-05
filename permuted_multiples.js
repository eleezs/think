// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

let getMultiples = (num, x) => {
 let result  = num * x
 let res_string = String(result).split('').sort().join('') //change to string, individual character, sort, join as string
 return res_string //returns a string
}

let getX = () => {
    let number = 1
    while(1) {
        let  onex = getMultiples(number,1)		
		let twox = getMultiples(number,2)
		let threex = getMultiples(number,3)
		let fourx = getMultiples(number,4)
		let fivex = getMultiples(number,5)
		let sixx = getMultiples(number,6)
        //checks if all multiples are equal or not
		if (onex == twox && twox == threex && threex == fourx && fourx == fivex && fivex == sixx) {
            console.log(`this is the answer ${number}`)
            return
        }	
		number += 1
        console.log(number)
        
    }
}

getX()