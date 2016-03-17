//What is this even doing! 1-6

var value = 0;

//step 1
var i = 13;

while(i > 6){
	value += 6;
	i--;
}

console.log(value);

//step 2
while(i >= 8){
	value -= 2;
	i--;
}
console.log(value);

//step 3
while(i < 10){
	value = augmentA(value); 
	i++;
}
console.log(value);

//step 4
while(i > 0){
	value -= 1;
	i--;
}
console.log(value);

//step 5
if(value > 23){
	value = 23;
} else {
	value = 0;
}
console.log(value);

//step 6
for(i = 0; i <11; i++){
	value++;
}
console.log(value);

//step 7
var a = "24";

function updateA(val){
	val += (val * 2);
	val -= 8;
	return val;
}

//What is value + a?
console.log(value + a);
