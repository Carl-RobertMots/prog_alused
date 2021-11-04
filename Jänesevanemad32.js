let ringid = prompt ("Sisestage ringide arv: ")
let porgandid = 0;

let ring = 1;
while(ring <= ringid){
    if(ring % 2 ==0){
        porgandid = porgandid + ring;
    }
    ring++;
}
console.log("Porgandite koguarv on " + porgandid)