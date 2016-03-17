//What is this even doing! 1-5

var value = 0;

//step 1
var i = 10;

while(i > 5){
	value += 12;
	i--;
}

//step 2
if(value >= 60){
	value = 6;
} else {
	value = 5;
}

//step 3
var a = 63;
var b = 26;
var c = 86;

a = a + (b - c);

value += a;

//step 4
for(i = i; i > 0; i--){
	value--;
}

//step 5
value = updateA(value);

//step 6
b = updateA(c - 7);
b = (b / 100);

for(i = 0; i < 6; i++){
	value += b;
}

//step 7
i = 6;

while(i > 0){
	value -= 2;
	i--;
}

//step 8
value = value - 230;
var d = "123";

function updateA(val){
	val = val * val;
	return val;
}

//What is value + d?
console.log(value + d);
