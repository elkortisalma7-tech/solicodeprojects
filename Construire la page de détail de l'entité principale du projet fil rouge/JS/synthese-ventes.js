let ventes =[20,13,40,7,19,35,9];

let somme=0;
let max=ventes[0];
let min=ventes[0];
let nombreEX=0;
let sommeEX=0;

for(let i=0;i<ventes.length;i++){
   let vente = ventes[i];
   somme=somme+ventes[i];
   if (ventes[i] > max){
    max=ventes[i];

}
if(ventes[i] <min){
    min=ventes[i];
}
if(ventes[i] >=25){
    nombreEX++;
    sommeEX=sommeEX+ventes[i];
}

}
console.log("totale vente :" , ventes .length);
console.log("d'affiche ventes :" , somme );
console.log("ventes max :" ,max);
console.log("ventes min " ,min );
console.log( " nombre vente EX :", nombreEX)
console.log( "  CA des ventes  " ,sommeEX) 