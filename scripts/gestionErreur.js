try {
    // code qui peut échouer
    const result = operationDangereuse();
    console.log(result);
    
} catch (erreur) {
    // gestion d'erreur
    console.error("une erreur est survenue",erreur.message);
    
    
}finally{
    // code executé dans tous les cas
    console.log("Opération terminée");
    
}
// Erreur personnalisée
class monErreur extends Error{
    constructor(message){
        super(message);
            this.nom = "MonErreur";
        
    }
}
throw new Error("Quelques chose s'est mal passé");

