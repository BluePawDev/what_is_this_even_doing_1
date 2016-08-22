//What is this even doing! 1-3

var value = 0;

//step 1
if(value === 0){
	value = 5;
} else {
	value = 43;
}

console.log("value after step 1: ", value);//5

//step 2
var a = 0;

while(a < 5){
	value++;
	a++;
	console.log("step 2 loop - a:", a, "value:", value);
}

console.log("value after step 2: ", value); //10

//step 3
if(value <= 7){
	augmentA(value);
} else {
	value = augmentA(value + 2);
}

console.log("value after step 3: ", value); //3081

//step 4
var b = 72;

value += b;

console.log("value after step 4: ", value); //3153

//step 5
var i = 0;

for(i = 5; i < 12; i++){
	value -= 3;
	console.log("step 5 loop - i:", i, "value:", value);
}

console.log("value after step 5: ", value); //3132

//step 6
while(i > 0){
	value++;
	i--;
	console.log("step 6 loop - i:", i, "value:", value);
}

console.log("value after step 6: ", value); //3143

//step 7
var c = 27;

var d = 1;

value = value + c + d;

console.log("value after step 7: ", value); //3171

function augmentA(val){
	for(var i = 0; i < 8; i++){
		val *= 2;
	}
	val += 9;
	return val;
}

//what is value + d?
console.log("Final value + d: ",value + d); //3172
