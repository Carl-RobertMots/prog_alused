let vanus = prompt("Sisestage vanus:");
let sugu = prompt("Sisestage sugu(m/n)(M/N):");
let treening = prompt("Sisestage treeningu tüüp(1, 2 või 3 ):");

let pulssavg;

if (sugu === "M" || sugu === "m"){
    pulssavg = 220 - vanus;
}
if (sugu === "N" || sugu === "n"){
    pulssavg = 206 - vanus * 0.88;
}
console.log(vanus);
console.log(sugu);
console.log(pulssavg);

//treening
let pulssmax;
let pulssmin;

if (treening === 1 ){
    pulssmin = pulssavg * 0.5;
    pulssmax = pulssavg * 0.7;
}
else if (treening === 2 ){
    pulssmin = pulssavg * 0.7;
    pulssmax = pulssavg * 0.8;
}
else if (treening === 3 ){
    pulssmax = pulssavg * 0.87;
    pulssmin = pulssavg * 0.8;
}
console.log("Pulsisagedus peals olema vahemikus " + Math.trunc(Math.round(pulssmin)) + " ja " + Math.trunc(Math.round(pulssmax)));