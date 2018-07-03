var guerrier = {
  nom : "nico",
  age : 18,
  taille : 180,
  arme : "hache",
};
var mage = {
  nom : "hajar",
  age : 20,
  taille : 160,
  arme : "baton",
};
var paysan = {
  nom : "sylvie",
  age : 17,
  taille : 165,
  arme : "fourche",
};

var taille_nom_guerrier = guerrier.nom.length;
var troiseme_index_arme_guerrier = guerrier.arme.charAt(0);
var morceau_arme_mage = mage.arme.substr(2,4);
var fusion_noms_silvie_nico = paysan.nom.concat(guerrier.nom);