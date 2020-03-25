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

//solution 2 
function getNthFib(n,init={1:0,2:1}){
	if(n in init){
		return init[n]
	}else{
		init[n] = getNthFib(n-1, init) + getNthFib(n-2,init)
		return init[n]
	}
}

exports.getNthFib = getNthFib;
