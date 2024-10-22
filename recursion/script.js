
num = 1;

function multiply(num){
    if(num > 10){
        return;
    }
    else{
        console.log(10 * num);
        multiply(num + 1);
    }
}

multiply(num);

