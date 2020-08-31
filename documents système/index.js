  
const  Discord  =  require ( "discord.js" ) ;
 client  const =  nouveau  Discord . Client ( ) ;
const  fs  =  require ( "fs" ) ;
 moment  const =  exiger ( "moment" ) ;


client . commandes  =  nouveau  Discord . Collection ( ) ;
client . alias  =  nouveau  Discord . Collection ( ) ;



// Handler pour commandes
fs . readdir ( "./commands/" ,  ( erreur ,  f )  =>  {
    si ( erreur )  console . log ( erreur ) ;

    laissez  commandes  =  f . filtre ( f  =>  f . split ( "." ) . pop ( )  ===  "js" ) ;
    if ( commandes . length <= 0 )  retourne la  console . log ( "Aucune commande trouvée!" ) ;

    commandes . forEach ( ( f )  =>  {
        laissez  commande  =  require ( `./commands/ $ { f } ` ) ;
        console . log ( ` $ { f } chargé!` ) ;

        client . commandes . set ( commande . help . name ,  commande ) ;

        if ( commande . help . alias )  {
        commande . aide . alias . forEach ( alias  =>  {
            client . alias . set ( alias ,  commande . help . name ) ;
        } ) } ;
    } ) ;
} ) ;


// Handler pour les événements
fs . readdir ( "./events/" ,  ( erreur ,  f )  =>  {
    si ( erreur )  console . log ( erreur ) ;
    console . log ( ` $ { f . length } chargés d'événements` ) ;

    f . forEach ( ( f )  =>  {
         événements  const =  require ( `./events/ $ { f } ` ) ;
         événement  const =  f . split ( "" ) [ 0 ] ;

    client . on ( événement ,  événements . bind ( null ,  client ) ) ;
    } ) ;
} ) ;
 
 
 client . connexion ( "NzE2OTU4NzM3MTg5MDQ0Mjg0.XwIuhA.v1q5xb5Fnh1teB_z3toLJT5-DYs" ) ;


client . on ( "ready" ,  ( )  =>  console . log ( "connecté" ) ) ;
client . on ( "ready" , ( )  =>  client . utilisateur . setActivity ( "Salut!" ) ) ;
