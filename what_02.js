//What is this even doing! 1-2

var value = 0;

// step 1
if(value >= 0){
	value = 8;
} else {
	value = 10;
}

console.log(value);

// step 2
var a = 0;

while(a > 5){
	value++;
	a++;
}

console.log(value);

// step 3
a = 3;

while(a > 0){
	value = updateA(value + i);
	a--;
}

console.log(value);

// step 4
if(value > 25 && a === 0){
	value = 2;
} else {
	value = 1;
}

console.log(value);

// step 5
var i = 0;

for(i = 0; i < 7; i++){
	value *= 3;
}

console.log(value);

// step 6
var b = "25";

updateB(value);

function updateA(val){
	if(val > 5){
		val *= 2;
	} else {
		val += val;
	}
	
	return val;
}

function updateB(val){
	var i = 0;
	while(i < 3){
		val += i;
		i++;
	}
	return val;
}

//what is value + b?
console.log(value + b);
