let id;

let count = 0;

function printTime(msg){

    console.log(msg, new Date());

    count++;

    if(count==10){

        clearInterval(id);

    console.log(count+"회");

    }

}



id = setInterval(printTime, 1000,"1초 간격");