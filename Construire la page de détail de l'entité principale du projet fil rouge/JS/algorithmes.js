let nombre=[12,14,9,20,6,18];

let max=nombre[0];
let min=nombre[0];
let postionMAX=0;
let positioMIN=0;

for(let i=0;i<nombre.length;i++){
    if(nombre[i]>max){
        max=nombre[i];
        postionMAX=i;
    }
    if(nombre [i]<min){
        min=nombre[i];
        positioMIN=i
    }
} 
console.log("max ",max ,"( index :" ,postionMAX +")");
console.log("min " ,min ,"(index :" ,positioMIN +")");

let recherche=14;
let position=-1;
for(let i=0;i<nombre.length;i++){
    if(nombre[i] === recherche){
        position=i;
        break;
    }
}
if(position !== -1){
    console.log("la valeure " ,+ recherche , "present en tableaux .");
}else{
    console.log("la valeure " ,+ recherche , " absent en tableaux .")
}