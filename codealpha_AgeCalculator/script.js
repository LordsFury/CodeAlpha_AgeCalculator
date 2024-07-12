let birthdate=document.querySelector("#age");
let curr=document.getElementById("curr");
let btn=document.querySelector("button");
let msg=document.getElementById("msg");
let currdate=new Date();
let currday=currdate.getDate();
let currmonth=currdate.getMonth()+1;
let curryear=currdate.getFullYear();

if(currday.toString().length){
    currday='0'+currday;
}
if(currmonth.toString().length){
    currmonth='0'+currmonth;
}

curr.value=curryear+'-'+currmonth+'-'+currday;
currmonth=parseInt(currmonth);
curryear=parseInt(curryear);
currday=parseInt(currday);

function calculateAge(){
    let dobyear=birthdate.value.substring(0,4);
    let dobmonth=birthdate.value.substring(5,7);
    let dobday=birthdate.value.substring(8,10);
    month=parseInt(dobmonth);
    year=parseInt(dobyear);
    day=parseInt(dobday);
    var ageyear=curryear-dobyear;
    if(currmonth>=dobmonth){
        var agemonth=currmonth-dobmonth;
    }
    else{
        ageyear--;
        var agemonth=12+currmonth-dobmonth;
    }
    if(currday>=dobday){
        var ageday=currday-dobday;
    }
    else{
        agemonth--;
        var ageday=31+currday-dobday;
        if(agemonth<0){
            agemonth=11;
            ageyear--;
        }
    }
    let age={
        day: ageday,
        month: agemonth,
        year: ageyear
    };
    let agestring="";
    let daystring="";
    let monthstring="";
    let yearstring="";
    if(age.year>1){
        yearstring=" Years";
    }
    else{
        yearstring=" Year";
    }
    if(age.month>1){
        monthstring=" Months";
    }
    else{
        monthstring=" Month";
    }
    if(age.day>1){
        daystring=" Days";
    }
    else{
        daystring=" Day";
    }
    if(age.year>0 && age.month>0 && age.day>0){
        agestring="You are "+age.year+yearstring+","+age.month+monthstring+" and "+age.day+daystring+" old.";
    }
    else if(age.year==0 && age.month==0 && age.day>0){
        agestring="You are Only "+age.day+daystring+" old!";
    }
    else if(age.year>0 && age.month==0 && age.day==0){
        agestring="You are "+age.year+yearstring+" old. Happy BirthDay!!";
    }
    else if(age.year>0 && age.month>0 && age.day==0){
        agestring="You are "+age.year+yearstring+" and "+age.month+monthstring+" old.";
    }
    else if(age.year==0 && age.month>0 && age.day>0){
        agestring="You are "+age.month+monthstring+" and "+age.day+daystring+" old.";
    }
    else if(age.year>0 && age.month==0 && age.day>0){
        agestring="You are "+age.year+yearstring+" and "+age.day+daystring+" old.";
    }
    else if(age.year==0 && age.month>0 &&age.day==0){
        agestring="You are "+age.month+monthstring+" old!";
    }
    else if(dobyear==curryear && dobmonth==currmonth && dobday==currday){
        agestring="Congratulations! You Born Today";
    }
    else{
        agestring="Oops! Invalid Date of Birth";
    }
    msg.innerText=agestring;
}

btn.addEventListener("click",calculateAge);
