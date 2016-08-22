//What is this even doing! 1-4

var value = 0;

//step 1
value = updateA(value);

console.log("value after step 1: ", value);

//step 2
for(var i = 0; i < 5; i+=2){
	value = value * i;
}

console.log("value after step 2: ", value);

//step 3
value = updateB(value + 4);

console.log("value after step 3: ", value);

//step 4
var a = 67;

value = value + (a * a);

a = 2;

console.log("value after step 4: ", value);

//step 5
for(i = 0; i < 9; i++){
	value--;
}

console.log("value after step 5: ", value);

//step 6
var b = a + 43;

value += b;

console.log("value after step 6: ", value);

//step 7
var c = "01";

console.log("value after step 7: ", value);

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
console.log("Final value + c", value + c);
