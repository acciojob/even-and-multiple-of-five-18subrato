function checkNumber(num) {
	num = +num;
	
	if(num %2 === 0 && num%5 ===0){
		return true;
	} else {
		return false;
	}
	
	if(typeof num === 'string'){
		return false;
	}

	
	

	
	
}

const num = parseInt(prompt("Enter a number."))
alert(checkNumber(num));
