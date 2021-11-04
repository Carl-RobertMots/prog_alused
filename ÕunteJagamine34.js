let pöialpoisid = prompt("Mitu pöialpoissi õunu tahab: [0-7]")

let õunadmax = 14
for (let i = 1; i <= pöialpoisid; i++) {
    let õunad = Math.floor(Math.random()*2) +1
    õunadmax = õunadmax - õunad
    console.log(i + ". pöialpoiss sai " + õunad)
}

console.log("Lumivalgekesele jäi alles " + õunadmax + " õuna")