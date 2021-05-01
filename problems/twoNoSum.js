function twoNumberSum(array, targetSum) {
	array = array.sort((a,b)=> a-b);
	let lp = 0;
	let rp = array.length - 1;
	
	while(lp<rp){
		console.log(`lp and rp`+lp+rp);
	if (array[lp]+array[rp] === targetSum){
		console.log(array[lp],array[rp]);
		lp = lp+1;
		rp = rp -1;
	}
	else if(array[lp]+array[rp] < targetSum){
		lp = lp+1;
		console.log(`lp is ` + lp);
	}
	else if(array[lp]+array[rp] > targetSum){
		rp = rp-1;
		console.log(`rp is ` + rp);
	}
	}
}
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 7],14));