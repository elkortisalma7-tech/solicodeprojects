let hauteure=5;

if(hauteure>0){
    for(let ligne=1;ligne <= 5 ;ligne++){
        let ligneTexte= " " ;
    
       for  (let s=1;s <=5 -ligne ;s++ ) {
        ligneTexte=ligneTexte + " ";
        }
        for(let e=1 ; e<= (2 * ligne) - 1 ; e++){
        ligneTexte=ligneTexte +"*";
        }

       console.log(ligneTexte);
    }

} else {
        console.log(" hauteure invalidé .");
}

