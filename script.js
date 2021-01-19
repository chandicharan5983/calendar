let date = new Date();


function currentMonth(){
    
    let monYear = document.querySelector(".monthYr");
    let preButton = document.querySelector(".pre");
    let nextButton = document.querySelector(".next");
    let week = document.querySelectorAll(".week");
    //let dayTd = document.querySelector(".week td");
    let days = document.querySelector(".days");

    let month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    //let json = JSON.stringify(date);

    //console.log(thisDate.getUTCFullYear());
    monYear.value = `${month[date.getMonth()]} ${date.getUTCFullYear()}`;

    let day = "";

    let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let firstDayIndex = firstDayOfMonth.getDay();
    let lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
    let currentDay = date.getDate();
    let lastDate = new Date(date.getFullYear() ,date.getMonth()+1,0).getDate();
    let preLastDay = new Date(date.getFullYear() ,date.getMonth(),0).getDate();
    let nextDay = 7- lastDayIndex -1;

    for(k=firstDayIndex; k>0; k--){
        day += `<div class="prev-date" onclick=alert()>${preLastDay-k +1}</div>`
        //dayTd.innerHTML = day;
    }

    let checkToday = new Date().toDateString();

    for(i=1; i<=lastDate; i++){
        if(i === new Date().getDate() && 
        date.getMonth() === new Date().getMonth() && 
        date.getFullYear() === new Date().getFullYear()){
            day += `<div class="currentDay">${i}</div>`;
        }
        else{
            day += `<div class="thisMonthDates">${i}</div>`;
        }
        //dayTd.innerHTML = day;
    }

    for(j = 1; j<= nextDay; j++){
        day += `<div class="next-date">${j}</div>`;
        days.innerHTML = day;
    }
}

currentMonth();

document.querySelector(".pre").addEventListener('click', ()=>{
    date.setMonth(date.getMonth()-1);
    currentMonth();
});

document.querySelector(".next").addEventListener('click', ()=>{
    date.setMonth(date.getMonth()+1);
    currentMonth();
});

//document.querySelector(".next-date").style.color = "red";
//console.log(day);

//console.log(lastDate);

//console.log(day);
