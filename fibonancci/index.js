//solution 1 
// function getNthFib(n) {
// 	if (n == 2){
// 		return 1;
// 	}else if(n == 1){
// 		return 0;
// 	}else{
// 		return getNthFib(n-1) + getNthFib(n-2);
// 	}
// }

// //solution 2 
// function getNthFib(n,init={1:0,2:1}){
// 	if(n in init){
// 		return init[n]
// 	}else{
// 		init[n] = getNthFib(n-1, init) + getNthFib(n-2,init)
// 		return init[n]
// 	}
// }

//solution 3
function getNthFib(n){
	let fibonacci = [0,1]
	let counter = 3

	if(n == 1){
		return fibonacci[0]
	}
	while(counter <= n){
		let nextFibonacci = fibonacci[0] + fibonacci[1]
		fibonacci [0] = fibonacci[1]
		fibonacci [1] = nextFibonacci
		counter++
	}

	return n > 1 ? fibonacci[1] : fibonacci[0]
}

exports.getNthFib = getNthFib;

