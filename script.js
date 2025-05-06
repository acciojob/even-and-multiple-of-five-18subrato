function checkNumber(num) {
	if(typeof num === 'string'){
		return false;
	}

	num = +num;
	if(num <(-10 ** 9) && num>(10**9)){
		return false;
	}

	if(num %2 === 0 && num%5 ===0){
		return true;
	} else {
		return false;
	}
	
}

const num = parseInt(prompt("Enter a number."));
alert(checkNumber(num));
