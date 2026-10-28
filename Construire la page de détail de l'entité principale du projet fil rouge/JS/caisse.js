let panier=[12,15,8,19,9,20];
let somme=0;
let nombrechers=0;
let sommechers=0;

for(let i=0;i<panier.length;i++){
    somme=somme+panier[i];

    if(panier[i] >=12){
        nombrechers++;
        sommechers=sommechers+panier[i];
    }


}
console.log("totale panier :",somme);
console.log("nombre d'article paniere :",nombrechers);
console.log("montant des article :",sommechers);