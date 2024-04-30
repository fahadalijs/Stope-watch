// console.log(Stop-watch);

let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

function start() {
    timer = true;
    myFun();
}
function stop(){
    timer = false;
    myFun();
}
function Reset() {
    location.reload();
}

function myFun() {
    if(timer == true){
        milli = milli + 1;
        if (milli == 100) {
            sec = sec + 1
            milli = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1
            min = 0;
        }


        setTimeout("myFun()" ,10)
        document.getElementById("milli").innerHTML = milli;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("min").innerHTML = min;
        document.getElementById("hr").innerHTML = hr;


    }

}






































