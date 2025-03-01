//if (localStorage.getItem("nom")!=null)
  //  modifie.textContent=`bonjours ${localStorage.getItem("nom")}`

//button.onclick=()=>{
 //   localStorage.setItem("nom",nom.value);
//}
// Création de l'observateur avec les options
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // Ajouter la classe 'visible' à l'élément lorsqu'il est visible
          entry.target.classList.add('visible');
          // entry.target.classList.remove("quete")
          entry.target.classList.remove("deux")
      }
  });
}, {
  threshold: 0.5 // L'élément doit être visible à 50% pour que l'animation se déclenche
});

// Sélectionner tous les éléments à observer
// const elements = document.querySelectorAll('.quete');
const textes= document.querySelectorAll(".deux")

// Observer chaque élément
// elements.forEach(element => {
  // observer.observe(element);
// });

textes.forEach(texte=>{
  observer.observe(texte);
})
