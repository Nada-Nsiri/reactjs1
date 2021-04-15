import Secondchild from "./second" ;
const tab= [
  { nom: ' aiden peace', commentaire: 'tu vas continuer tes playlist ou tu tes arreter avec le jquery etc de ton site a continuer ?' },
  { nom: 'David Eugene', commentaire: 'Merci bcp :)' },
  { nom: 'FirstMike Genesis', commentaire: 'Merci Monsieur Giraud votre travail intensif na pas été vain... Regardez 2020 la saga continue Grand MERCI'},
  { nom: 'amal', commentaire: 'Bonjour, je suis vos cours avec beaucoup de plaisir. Jai fait un peu de html et css, mais vu le site que je veux créer, jai besoin de connaître le javascript et le php. Je débute justement le javascript et petit problème dans léditeur komodo. Quand je mets "var" avant les chiffres, le trait rouge derreur saffiche, ce qui nest pas le cas quand jenlève le mot. Deuxième problème, dans le var avec le nom ou le prénom. Que jenlève ou que je mette "var" il y a toujours le trait derreur. Cest le même problème que reveluv on orbit. Cela na pas dincidence pour la suite de la formation notamment quand des scripts plus complexes seront abordés ? '}
]
function Firstchild() {
  return (
    <div>
      <div className="row">
  <div className="col-md-7">
    
   <iframe className="video" width="956" height="538" src="https://www.youtube.com/embed/VZLflMqC6dI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <br></br><br></br>
  {tab.map((el) => (
    <div className="video">     
<h6>{el.nom}</h6>

<p>{el.commentaire}</p>
</div> ))}
 </div>
   <div className="col-md-5">

<Secondchild/> ;

   </div>

   </div>
   </div>
  );
}

export default Firstchild;
