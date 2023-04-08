const yearOut = document.getElementById('year-output');
const monthOut = document.getElementById('month-output');
const dayOut = document.getElementById('day-output');

const submit = document.getElementById("submit-btn")

// const yearIn = document.getElementById("year").value;
// const monthIn = document.getElementById("month").value;
// const dayIn = document.getElementById("day").value;

yearOut.innerText = '--';
monthOut.innerText = '--';
dayOut.innerText = '--';

let d1 = 0;
    let m1 = 0;
    let y1 = 0;


function age() {
    

    let y1 = document.getElementById("year").value;
    let m1 = document.getElementById("month").value;
    let d1 = document.getElementById("day").value;
    
    let date = new Date(); // get current date data
    let d2 = date.getDate(); // get current date
    let m2 = 1 + date.getMonth(); // get month date
    let y2 = date.getFullYear(); // get year data
    console.log(y2)
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  //days in each month
    if (d1 > d2) { //calculate day
        d2 += month[m2 - 1]; 
        m2 -= 1;
    }
    if (m1 > m2) { //calculate month
        m2 += 12;
        y2 -= 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    console.log("Your Age is " + y + " Years " + m + " Months " + d + " Days")
    
    yearOut.innerText = y;
    monthOut.innerText = m;
    dayOut.innerText = d;    

    const form = document.getElementById('form');
    form.reset()
    
}

submit.addEventListener('click', ()=>{  
    age()
})


