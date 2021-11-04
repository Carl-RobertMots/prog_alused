let arv = prompt("Täringute arv: ")

for (var i = 1; i <= arv; i++){
    let täring = Math.floor(Math.random()* 6) +1
    console.log(täring);
}