function fibonacci(num) {
	let a = 0, b = 1;
	let c = 0;
	if(num==1)
		return 0;
	else if(num==2)
		return 1;
	else{
		for(let i=1; i<=num-2; i++){
			c = a + b;
			a = b;
			b = c;
		}
		return c;
	}
}

module.exports = fibonacci;
