//What is this even doing! 1-5

var value = 0;

//step 1
var i = 10;

while(i > 5){
	value += 12;
	i--;
	console.log("step 1 loop - i:", i, "value:", value);
}

console.log("value after step 1: ", value);

//step 2
if(value >= 60){
	value = 6;
} else {
	value = 5;
}

console.log("value after step 2: ", value);

//step 3
var a = 63;
var b = 26;
var c = 86;

a = a + (b - c);

value += a;

console.log("value after step 3: ", value);

//step 4
for(i = i; i > 0; i--){
	value--;
	console.log("step 4 loop - i:", i, "value:", value);
}

console.log("value after step 4: ", value);

//step 5
value = updateA(value);

console.log("value after step 5: ", value);

//step 6
b = updateA(c - 7);
b = (b / 100);

for(i = 0; i < 6; i++){
	value += b;
	console.log("step 6 loop - i:", i, "value:", value);
}

console.log("value after step 6: ", value);

//step 7
i = 6;

while(i > 0){
	value -= 2;
	i--;
	console.log("step 7 loop - i:", i, "value:", value);
}

console.log("value after step 7: ", value);

//step 8
value = value - 230;
var d = "123";

function updateA(val){
	val = val * val;
	return val;
}

console.log("value after step 8: ", value);

//What is value + d?
console.log("Final value + d", value + d);
