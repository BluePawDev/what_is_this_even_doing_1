//What is this even doing! 1-4

var value = 0;

//step 1
value = updateA(value);

//step 2
for(var i = 0; i < 5; i+=2){
	value = value * i;
}

//step 3
value = updateB(value + 4);

//step 4
var a = 67;

value = value + (a * a);

a = 2;

//step 5
for(i = 0; i < 9; i++){
	value--;
}

//step 6
var b = a + 43;

value += b;

//step 7
var c = "01";

function updateA(val){
	val += 5;
	val = val * val;
	return val;
}

function updateB(val){
	val = updateA(val) * 2;
	val -= 3;
	return val;
}

//What is value + c?
console.log(value + c);
