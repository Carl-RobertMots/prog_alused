let valik = prompt(" Kas soovite valida isetekoht [ise] või [loosiga]: ");

if(valik === "ise"){
    console.log("Valisite ise");
    let koht =prompt("Kas soovid istuda [Aknakohal] või [Muu koht]? ");
    if(koht === "aken"){
        console.log("Aknakohal");
    } else {
        console.log("Muu koht");
    }
}
else {
    console.log("Istekoht loositi");
    let toenaosus = Math.trunc(Math.ceil(Math.random()*3));
    if(toenaosus === 1){
        console.log("Aknakoht");
    } else {
        console.log("Muu koht");
    }
}