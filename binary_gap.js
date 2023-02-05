function binaryConverter(number) {
	const temp_bin = []; let whole; let rem_bin;
	whole = number;
	let count = 0;
	while(number> 1) {
		if (number !== 1) {
			whole = Math.floor(number / 2);
			rem_bin = Math.floor(number % 2);
			temp_bin.push(rem_bin)
			number = whole;
		}
		count ++
	}

	if (number === 1) {
		temp_bin.push(number)
	}
	
	return temp_bin.reverse()
}


function solution(N) {
	const numbers = binaryConverter(N);
	let first_one = numbers.indexOf(1);
	let second_one = numbers.indexOf(1, first_one + 1);
	let count_zero = 0; let temp_zero = 0
	if(first_one === -1 || second_one === -1 ){
		return 0
	}

	while(first_one !== -1 && second_one !== -1) {
		for (let i = first_one + 1; i < second_one; i++) {
			if (numbers[i] === 0) {
				temp_zero++;
			}
		}
		
		if(temp_zero > count_zero) {
			count_zero = temp_zero
		}

		temp_zero = 0;
		first_one = second_one
		second_one = numbers.indexOf(1, second_one + 1)
	}
	
	return(count_zero)
}

console.log(solution(66561))