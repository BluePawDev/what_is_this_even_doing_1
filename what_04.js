//What is this even doing! 1-4

var value = 0;

//step 1
value = updateA(value);

console.log("value after step 1: ", value);//25

//step 2
for(var i = 0; i < 5; i+=2){
	value = value * i;
	console.log("step 2 loop - i:", i, "value:", value);
}

console.log("value after step 2: ", value);//0

//step 3
value = updateB(value + 4);

console.log("value after step 3: ", value); //159

//step 4
var a = 67;

value = value + (a * a);

a = 2;

console.log("value after step 4: ", value); //4648

//step 5
for(i = 0; i < 9; i++){
	value--;
	console.log("step 5 loop - i:", i, "value:", value);
}

console.log("value after step 5: ", value); //4639

//step 6
var b = a + 43;

value += b;

console.log("value after step 6: ", value); //4684

//step 7
var c = "01";

console.log("value after step 7: ", value); //4684

function updateA(val){
	val += 5;
	val = val * val;
	return val;
}

function updateB(val){ //4
	val = updateA(val) * 2; //162
	val -= 3;
	return val; //159
}

//What is value + c?
console.log("Final value + c: ", value + c); //"468401"
