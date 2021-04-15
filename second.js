import React from "react";

const array = [
  { lien: 'https://www.youtube.com/embed/lDO14MA0C_o?list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI', titre: 'COURS COMPLET JAVASCRIPT [2/65] - Introduction au JavaScript' },
  { lien: 'https://www.youtube.com/embed/dNIJUmjZeMI?list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI', titre: 'COURS COMPLET JAVASCRIPT [3/65] - Environnement de travail' },
  { lien: 'https://www.youtube.com/embed/gpdierJ5-kw?list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI', titre: 'COURS COMPLET JAVASCRIPT [4/65] - Où écrire le code JavaScript  '},
  { lien: 'https://www.youtube.com/embed/AtUwagcoDL8?list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI', titre: 'COURS COMPLET JAVASCRIPT [5/65] - Syntaxe, indentation et commentaires '},
  { lien: 'https://www.youtube.com/embed/9jGQLBaw32Q?list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI', titre: 'COURS COMPLET JAVASCRIPT [6/65] - Présentation des variables en JavaScript'} 

]
  function Secondchild() {
    return (
      <div>

{array.map((el) => (
                <div className="liste" >

<iframe className="video" width="250" height="90" src={el.lien} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<a href={el.lien}>{el.titre}</a>
<br/> <br/><br/><br/>

                </div>
            ))}


     </div>
    );
  }
  export default Secondchild;
 