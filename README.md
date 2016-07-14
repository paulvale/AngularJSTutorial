# AngularJSTutorial
==========================
Formation en AngularJs 1, donnée par Grafikart, permettant d'apprendre les différents concepts de ce framework tout en construisant une web application

Au programme de ce tutoriel :
1°) La Base :
- Les Directives 
- Les Controllers et le Scope 
- Les Modules 
- Les Routes 
- Les Services 
- Les Promesses 
- Les Filtres 

2°)Pour aller plus loin
- Créer ses directives
- Les Resources
- $apply, $watch et $digest


Chaine Youtube de la formation : http://www.youtube.com/watch?v=aBE0St5yI7U&list=PLjwdMgw5TTLUDlJyx4yIPQjoI-w-7Zs1r


Code pour JSON Generator
-----------
Code nécessaire pour générer le fichier JSON du tutorial sur http://www.json-generator.com/
[{
  'repeat(5, 7)': {
    id: "{{index()}}",
    picture: "http://lorempixel.com/400/20{{index()}}/",
    name: "{{company()}}",
    content:"{{lorem(6)}}",
    comments : [
      {
       'repeat(5, 7)' : {
          username:"{{firstName()}}",
          city: "{{city()}}",
          phone:"{{phone()}}",
          content:"{{lorem(5)}}"
      	}
      }
    ]
      
  }
}]