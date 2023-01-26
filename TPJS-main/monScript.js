ATTAQUE1 = document.getElementById("ATTAQUE1");
DEFENSE1 = document.getElementById("DEFENSE1");
BOULEDEFEU = document.getElementById("BOULEDEFEU");
ATTAQUE2 = document.getElementById("ATTAQUE2");
DEFENSE2 = document.getElementById("DEFENSE2");
TIRPUISSANT = document.getElementById("TIRPUISSANT");
ATTAQUE3 = document.getElementById("ATTAQUE3");
DEFENSE3 = document.getElementById("DEFENSE3");
TRUC = document.getElementById("TRUC");
VieLiche = document.getElementById("VieLiche");
VieSkeleton1 = document.getElementById("VieSkeleton1");
VieSkeleton2 = document.getElementById("VieSkeleton2");
VieMage = document.getElementById("VieMage");
VieRanger = document.getElementById("VieRanger");
VieGuerrier = document.getElementById("VieGuerrier");
DegatAttaque1 = document.getElementById("DegatAttaque1");
DegatAttaque2 = document.getElementById("DegatAttaque2");
DegatAttaque3 = document.getElementById("DegatAttaque3");
ATTAQUEMonstre = document.getElementById("ATTAQUEMonstre");
ManaMage = document.getElementById("ManaMage");
MagieMage = document.getElementById("MagieMage");

//Fait le lien avec l'HTML


ImgLich.onmouseover = function(){
  ImgLich.style.filter= "drop-shadow(0 0 0.75rem crimson)";
}; // Affiche une ombre rouge sous la liche quand la souris passe dessus

ImgLich.onmouseout = function(){
  ImgLich.style.filter= "none";
} //Enlève l'affichage si la souris quitte la liche

ImgSkeleton2.onmouseover = function(){
ImgSkeleton2.style.filter= "drop-shadow(0 0 0.75rem crimson)";
}; // Affiche une ombre rouge sous le squelette2 quand la souris passe dessus

ImgSkeleton2.onmouseout = function(){
 ImgSkeleton2.style.filter= "none";
} //Enlève l'affichage si la souris quitte le squelette2


ImgSkeleton1.onmouseover = function(){
  ImgSkeleton1.style.filter= "drop-shadow(0 0 0.75rem crimson)";
  }; // Affiche une ombre rouge sous le squelette1 quand la souris passe dessus

  ImgSkeleton1.onmouseout = function(){
   ImgSkeleton1.style.filter= "none";
} //Enlève l'affichage si la souris quitte le squelette1


ImgGuerrier.onmouseover = function(){
ImgGuerrier.style.filter= "drop-shadow(0 0 0.75rem #cdd6d5)";
}; // Affiche une ombre blanche sous le guerrier quand la souris passe dessus

ImgGuerrier.onmouseout = function(){
 ImgGuerrier.style.filter= "none";
} //Enlève l'affichage si la souris quitte le guerrier



ImgMage.onmouseover = function(){
  ImgMage.style.filter= "drop-shadow(0 0 0.75rem #cdd6d5)";
  }; // Affiche une ombre blanche sous le mage quand la souris passe dessus

  ImgMage.onmouseout = function(){
   ImgMage.style.filter= "none";
} //Enlève l'affichage si la souris quitte le mage

ImgRanger.onmouseover = function(){
ImgRanger.style.filter= "drop-shadow(0 0 0.75rem #cdd6d5)";
}; // Affiche une ombre blanche sous le guerrier quand la souris passe dessus

ImgRanger.onmouseout = function(){
 ImgRanger.style.filter= "none";
} //Enlève l'affichage si la souris quitte le guerrier

var Tour = 0; // Variable responsable du décompte de tour (WP)

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(11);
    return Math.floor(Math.random(11) * (max - min) + min);
} // Génére une valeur aléatoire entre 0 et 10 pour l'attaque

function getRandomInt2(min, max) {
    min = Math.ceil(0);
    max = Math.floor(11);
    return Math.floor(Math.random(11) * (max - min) + min);
} // Génére une seconde valeur aléatoire entre 0 et 10 pour ne pas écraser la précédente

function getRandomInt3(min, max) {
    min = Math.ceil(0);
    max = Math.floor(21);
    return Math.floor(Math.random(21) * (max - min) + min);
} // Génére une valeur aléatoire entre 0 et 21 pour la magie


ATTAQUE1.onclick = function() { // Lance une fonction si quelqu'un appuie sur ATTAQUE 
  if (parseInt (VieLiche.innerHTML)>0){ // Vérifie que la cible est en vie
    if (parseInt (VieMage.innerHTML)>0){ // Vérifie que le héro est en vie
      var degats = getRandomInt(); // Dégats infligés par le héro
     var dmg02 = getRandomInt2 (); // Dégats infligé par la contreattaque de la Liche (WP)
     VieLiche.innerHTML = parseInt (VieLiche.innerHTML) - degats;
      JaugeVieLiche.value = VieLiche.innerHTML // Diminue la vie de la Liche en fonction des dégats infligés
      DegatAttaque.innerHTML = "Vous infligez " + degats + " dégats !" // Phrases d'action
      VieMage.innerHTML = parseInt (VieMage.innerHTML) - dmg02; // Diminue la vie du héro en fonction des dégats de contre-attaque
      JaugeVie1.value = VieMage.innerHTML
      ATTAQUEMonstre.innerHTML = "L'ennemis riposte et vous inflige " + dmg02 + " dégats !" //Phrase d'action contre-attaque
      Tour += 1 // additione 1 au compteur de tour
      TourJoueur.innerHTML = "Tour :"+Tour // Affiche le total du compteur de tour (visible uniquement pour des raisons de test)
   } 
    else { 

    DegatAttaque.innerHTML = "Votre Héro est mort ! Il ne peut plus agir !" // Phrases d'action si le héro sélectionné est déjà mort

  }
}
else {
  DegatAttaque.innerHTML = "Ce monstre est déjà au sol ! Choisisez une autre cible !" // Phrases d'action si la cible sélectionnée est déjà morte
}

}

BOULEDEFEU.onclick = function(){  // Lance une fonction si quelqu'un appuie sur ATTAQUE 
  if (parseInt (VieLiche.innerHTML)>0){ // Vérifie que la cible est en vie
    if (parseInt (VieMage.innerHTML)>0){ // Vérifie que le héro est en vie
      if (parseInt (ManaMage.innerHTML)>0){ // Vérifie que le héro dispose encore de mana 
        var dmg3 = getRandomInt3 (); // Dégats infligés par la compétence du héro
        VieLiche.innerHTML = parseInt (VieLiche.innerHTML) - dmg3 
        JaugeVieLiche.value = VieLiche.innerHTML // Diminue la vie de la Liche en fonction des dégats infligés
        DegatAttaque.innerHTML = "Vous crachez une salve de flamme et infligez " +dmg3 + "dégats !" // Phrases d'action
       ManaMage.innerHTML = parseInt(ManaMage.innerHTML) -25
        JaugeMana1.value = ManaMage.innerHTML // Diminue le mana du héro de 25 pour chaque utilisation de la compétence
        Tour += 1 // additione 1 au compteur de tour
        TourJoueur.innerHTML = "Tour :"+Tour // Affiche le total du compteur de tour (visible uniquement pour des raisons de test)
     }
      else {
       DegatAttaque.innerHTML = "Pas assez de mana !" // Phrases d'action si le héro ne posséde pas suffisament de mana


    }
    }
    else {
      DegatAttaque.innerHTML = "Votre Héro est mort ! Il ne peut plus agir !" // Phrases d'action si le héro est mort

    }
  }
  else{

    DegatAttaque.innerHTML = "Ce monstre est déjà au sol ! Choisisez une autre cible !" // Phrases d'action si la cible est morte

  }  


}

ATTAQUE2.onclick = function() {
  if (parseInt (VieLiche.innerHTML)>0){
    if (parseInt (VieRanger.innerHTML)>0){
      var degats = getRandomInt();
     var dmg02 = getRandomInt2 ();
     VieLiche.innerHTML = parseInt (VieLiche.innerHTML) - degats;
      JaugeVieLiche.value = VieLiche.innerHTML
      DegatAttaque.innerHTML = "Vous infligez " + degats + " dégats !"
      VieRanger.innerHTML = parseInt (VieRanger.innerHTML) - dmg02;
      JaugeVie2.value = VieRanger.innerHTML
      ATTAQUEMonstre.innerHTML = "L'ennemis riposte et vous inflige " + dmg02 + " dégats !"
      Tour += 1
      TourJoueur.innerHTML = "Tour :"+Tour
   }
    else { 

    DegatAttaque.innerHTML = "Votre Héro est mort ! Il ne peut plus agir !"

  }
  }
  else {
  DegatAttaque.innerHTML = "Ce monstre est déjà au sol ! Choisisez une autre cible !"
  }

}

TIRPUISSANT.onclick = function(){
  if (parseInt (VieLiche.innerHTML)>0){
    if (parseInt (VieRanger.innerHTML)>0){
      if (parseInt (ManaRanger.innerHTML)>0){ 
        var dmg3 = getRandomInt3 ();
        VieLiche.innerHTML = parseInt (VieLiche.innerHTML) - dmg3
        JaugeVieLiche.value = VieLiche.innerHTML
        DegatAttaque.innerHTML = "Vous tirez un trait puissant et précis et infligez " +dmg3 + "dégats !"
       ManaRanger.innerHTML = parseInt(ManaRanger.innerHTML) -25
        JaugeMana2.value = ManaRanger.innerHTML
        Tour += 1
        TourJoueur.innerHTML = "Tour :"+Tour
     }
      else {
       DegatAttaque.innerHTML = "Pas assez de mana !"


    }
    }
    else {
      DegatAttaque.innerHTML = "Votre Héro est mort ! Il ne peut plus agir !"

    }
  }
  else{

    DegatAttaque.innerHTML = "Ce monstre est déjà au sol ! Choisisez une autre cible !"

  }  


}


ATTAQUE3.onclick = function() {
  if (parseInt (VieLiche.innerHTML)>0){
    if (parseInt (VieGuerrier.innerHTML)>0){
      var degats = getRandomInt();
     var dmg02 = getRandomInt2 ();
     VieLiche.innerHTML = parseInt (VieLiche.innerHTML) - degats;
      JaugeVieLiche.value = VieLiche.innerHTML
      DegatAttaque.innerHTML = "Vous infligez " + degats + " dégats !"
      VieGuerrier.innerHTML = parseInt (VieGuerrier.innerHTML) - dmg02;
      JaugeVie3.value = VieGuerrier.innerHTML
      ATTAQUEMonstre.innerHTML = "L'ennemis riposte et vous inflige " + dmg02 + " dégats !"
      Tour += 1
      TourJoueur.innerHTML = "Tour :"+Tour
   }
    else { 

    DegatAttaque.innerHTML = "Votre Héro est mort ! Il ne peut plus agir !"

  }
  }
  else {
  DegatAttaque.innerHTML = "Ce monstre est déjà au sol ! Choisisez une autre cible !"
  }
   

}

TRUC.onclick = function(){
  if (parseInt (VieLiche.innerHTML)>0){
    if (parseInt (VieGuerrier.innerHTML)>0){
      if (parseInt (ManaGuerrier.innerHTML)>0){ 
        var dmg3 = getRandomInt3 ();
        VieLiche.innerHTML = parseInt (VieLiche.innerHTML) - dmg3
        JaugeVieLiche.value = VieLiche.innerHTML
        DegatAttaque.innerHTML = "Vous crachez une salve de flamme et infligez " +dmg3 + "dégats !"
       ManaGuerrier.innerHTML = parseInt(ManaGuerrier.innerHTML) -25
        JaugeMana3.value = ManaGuerrier.innerHTML
        Tour += 1
     }
      else {
       DegatAttaque.innerHTML = "Pas assez de mana !"


    }
    }
    else {
      DegatAttaque.innerHTML = "Votre Héro est mort ! Il ne peut plus agir !"

    }
  }
  else{

    DegatAttaque.innerHTML = "Ce monstre est déjà au sol ! Choisisez une autre cible !"

  }  


}


