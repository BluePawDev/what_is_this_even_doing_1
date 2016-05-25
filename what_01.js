//What is this even doing! 1-1

var value = 0;

var a = "4";

// step 1
for(var i = 5; i < 10; i++){
	value++;
	console.log("step 1 loop - i:", i, "value:", value);
}

console.log("value after step 1: ", value);

// step 2
if(value >= a || value <= 10){
	value = 1;
} else {
	value = 9;
}

console.log("value after step 2: ", value);

// step 3
for(var i = 0; i < 3; i++){
	value++;
	console.log("step 3 loop - i:", i, "value:", value);
}

console.log("value after step 3: ", value);
// step 4
var b = 2;

while(b < 10){
	value *= 2;
	b++;
	console.log("step 4 loop - b:", b, "value:", value);
}

console.log("value after step 4: ", value);

// step 5
b = 0;

while (b < 2){
	value /= 2;
	b++;
	console.log("step 5 loop - b:", b, "value:", value);
}

console.log("value after step 5: ", value);

// step 6
while (b <= 4){
	value++;
	b++;
	console.log("step 6 loop - b:", b, "value:", value);
}

console.log("value after step 6: ", value);

// step 7
for(i = 0; i < 7; i++){
	value += 3;
	console.log("step 7 loop - i:", i, "value:", value);
}

console.log("value after step 7: ", value);

// step 8
var c = "23";

console.log("value after step 8: ", value);

//what is value + c?
console.log("Final value + c: ", value + c);
