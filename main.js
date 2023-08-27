function takeNumber(){
    let number = document.getElementById("numberBox").value;
    if (validateNumber(number) === true){
        displayNumber(number);
    }
};

function validateNumber (number){
    result = !isNaN(number) &&  number>=0 && number <=999;
    if (!result){
        alert("Please enter a valid number from 0 to 999!");
    }
    return result;
}


function displayNumber(number) {
    let digits = number.padStart(3, '0').split('').map(Number);

    resetSegments();

    for (let i=0; i<digits.length ; i++){
        
        switch(digits[i]){
            case 0:
                zero(i);
                break;
            case 1:
                one(i);
                break;
            case 2:
                two(i);
                break;
            case 3:
                three(i);
                break;
            case 4:
                four(i);
                break;
            case 5:
                five(i);
                break;
            case 6:
                six(i);
                break;
            case 7:
                seven(i);
                break;
            case 8:
                eight(i);
                break;
            case 9:
                nine(i);
                break;
        };
    };
}

function zero(i){
    applyRedColorToSegments('a', i);
    applyRedColorToSegments('b', i);
    applyRedColorToSegments('c', i);
    applyRedColorToSegments('e', i);
    applyRedColorToSegments('f', i);
    applyRedColorToSegments('d', i);
}

function one(i){
    applyRedColorToSegments('b', i);
    applyRedColorToSegments('c', i);
}

function two(i){
    applyRedColorToSegments('a', i);
    applyRedColorToSegments('b', i);
    applyRedColorToSegments('g', i);
    applyRedColorToSegments('e', i);
    applyRedColorToSegments('d', i);
}
function three(i){
    applyRedColorToSegments('a', i);
    applyRedColorToSegments('b', i);
    applyRedColorToSegments('g', i);
    applyRedColorToSegments('c', i);
    applyRedColorToSegments('d', i);

}
function four(i){
    applyRedColorToSegments('f', i);
    applyRedColorToSegments('g', i);
    applyRedColorToSegments('b', i);
    applyRedColorToSegments('c', i);
}
function five(i){
    applyRedColorToSegments('a', i);
    applyRedColorToSegments('f', i);
    applyRedColorToSegments('g', i);
    applyRedColorToSegments('c', i);
    applyRedColorToSegments('d', i);

}
function six(i){
    applyRedColorToSegments('a', i);
    applyRedColorToSegments('f', i);
    applyRedColorToSegments('g', i);
    applyRedColorToSegments('e', i);
    applyRedColorToSegments('d', i);
    applyRedColorToSegments('c', i);

}
function seven(i){
    applyRedColorToSegments('a', i);
    applyRedColorToSegments('b', i);
    applyRedColorToSegments('c', i);
}
function eight(i){
    applyRedColorToSegments('a', i);
    applyRedColorToSegments('b', i);
    applyRedColorToSegments('c', i);
    applyRedColorToSegments('d', i);
    applyRedColorToSegments('e', i);
    applyRedColorToSegments('f', i);
    applyRedColorToSegments('g', i);
}

function nine(i){
    applyRedColorToSegments('g', i);
    applyRedColorToSegments('f', i);
    applyRedColorToSegments('a', i);
    applyRedColorToSegments('c', i);
    applyRedColorToSegments('d', i);
    applyRedColorToSegments('b', i);
}

function resetSegments(){
    let allSegments = document.querySelectorAll('.seg');
    for (let i=0 ; i<allSegments.length ; i++ ){
        allSegments[i].style.backgroundColor = "lightgray";
    };
}

function applyRedColorToSegments(segment, digitIndex){
    let segmentElement = document.querySelector(`.seg-${segment}-${digitIndex}`);
    segmentElement.style.backgroundColor = "red";
}
