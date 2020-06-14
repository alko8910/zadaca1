var givenNumbers = [0,2,3,5,7,5];

var val = 5;

for( var i = 0; i< givenNumbers.length; i++){
    if(givenNumbers[i] == val){
        givenNumbers.splice(i,1); 
        i--;
    }
}
console.log(givenNumbers.length);