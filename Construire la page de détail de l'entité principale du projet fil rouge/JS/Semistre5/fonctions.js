 function calculSomme(tableau){
    let somme =0;
        for(let i =0;i<tableau.length;i++){
        somme+=tableau[i]
        }
    return somme;
 }

 function calculeMoyenne(tableau){
    let somme=calculSomme(tableau);
    return somme /tableau.length;
 }

 let notes=[12,14,10];
 console.log("Moyenne calcule :" +calculeMoyenne(notes));




 function trouverMaxi(tableau){
    let max=tableau[0];
    for(let i=1;i<tableau.length;i++){
        if(tableau[i]>max){
            max=tableau[i];
        }
    }
    return max;
 }

 let scores=[45,82,63];
 let moyenne=calculeMoyenne(notes);
 let noteMax=trouverMaxi(notes);

 console.log("moyenne:" +moyenne);
 console.log("meuileure note:" +noteMax);
