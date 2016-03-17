//What is this even doing! 1-1

var value = 0;

var a = "4";

// step 1
for(var i = 5; i < 10; i++){
	value++;
}

// step 2
if(value >= a || value <= 10){
	value = 1;
} else {
	value = 9;
}

// step 3
for(var i = 0; i < 3; i++){
	value++;
}

// step 4
var b = 2;

while(b < 10){
	value *= 2;
	b++;
}

// step 5
b = 0;

while (b < 2){
	value /= 2;
	b++;
}

// step 6
while (b <= 4){
	value++;
	b++;
}

// step 7
for(i = 0; i < 7; i++){
	value += 3;
}

// step 8
var c = "23";

//what is value + c?
console.log(value + c);
