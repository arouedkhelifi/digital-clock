function updatetime(){
    const now= new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let ampm=hours >=12 ? "PM" : "AM";
    hours= hours % 12;

    /*whenever hours are 0 make it 12*/
    /*we used hours = to store the result into hours*/
    hours = hours/*if hours is not 0*/ ? hours : 12;
hours= hours <10 ? "0"+ hours:hours;
minutes= minutes <10 ? "0"+ minutes:minutes;
seconds= seconds <10 ? "0"+ seconds:seconds;
document.getElementById("hours").textContent=hours;
document.getElementById("minutes").textContent=minutes;
document.getElementById("seconds").textContent=seconds;
document.getElementById("ampm").textContent=ampm;


}
/*repeatedly execute the return value of updatetime every 1 s*/
setInterval(updatetime, 1000);
updatetime();
