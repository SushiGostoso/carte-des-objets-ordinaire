function initMap() {
  var mapProp= {
    center:new google.maps.LatLng(48.685338616197354,6.183894494385265), //Nancy
    zoom:12.5,
    streetViewControl: false,
    mapTypeControl: false, 
    toggleFullScreen: false,

    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#d6ffdb"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "color": "#f5e766"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f0b8ff"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "stylers": [
          {
            "color": "#ffeb3b"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]    
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var icon_banc = {
    url: 'Icon pour les Markers/Banc-dessin-base-ptt3.png',
    //size: new google.maps.Size(150, 150), // Tamanho ajustado
    origin: new google.maps.Point(0, 0), // Ponto de origem da imagem
    anchor: new google.maps.Point(25, 25) // Ponto de ancoragem no centro
  };
  var icon_poubelle = {
    url: 'Icon pour les Markers/Poubelle-dessin-base6.png',
    //size: new google.maps.Size(150, 150), // Tamanho ajustado
    origin: new google.maps.Point(0, 0), // Ponto de origem da imagem
    anchor: new google.maps.Point(25, 25) // Ponto de ancoragem no centro
  };
  var icon_jeu = {
    url: 'Icon pour les Markers/jeu-dessin-base3.png',
    //size: new google.maps.Size(150, 150), // Tamanho ajustado
    origin: new google.maps.Point(0, 0), // Ponto de origem da imagem
    anchor: new google.maps.Point(25, 25) // Ponto de ancoragem no centro
  };
  var icon_point_interrogation = {
    url: 'Icon pour les Markers/Point-Intérrogation-dessin-base3.png',
    //size: new google.maps.Size(150, 150), // Tamanho ajustado
    origin: new google.maps.Point(0, 0), // Ponto de origem da imagem
    anchor: new google.maps.Point(25, 25) // Ponto de ancoragem no centro
  };
  var icon_chien = {
    url: 'Icon pour les Markers/chien-dessin-base4.png',
    //size: new google.maps.Size(150, 150), // Tamanho ajustado
    origin: new google.maps.Point(0, 0), // Ponto de origem da imagem
    anchor: new google.maps.Point(25, 25) // Ponto de ancoragem no centro
  };
  var icon_plant = {
    url: 'Icon pour les Markers/dessin-fleur.png',
    //size: new google.maps.Size(150, 150), // Tamanho ajustado
    origin: new google.maps.Point(0, 0), // Ponto de origem da imagem
    anchor: new google.maps.Point(25, 25) // Ponto de ancoragem no centro
  };
  // Adiciona múltiplos marcadores
  var locations_banc = [
    { lat: 48.699341, lng: 6.177797, title: "Banc avec mon Cousin" , description: "Ce banc, en dehors de la vieille ville, est parfait pour ceux qui veulent un petit repos après une promenade.", images: ["Photos pour les Markers/Banc avec mon Cousin.jpg"]},
    { lat: 48.68006466662719, lng: 6.169846505987206, title: "Le banc le plus artisitique", description: "Si beau: la forme courbée du banc en harmonie avec les branches de l'arbre. L'espace est trop petit pour s'asseoir.", images: ["Photos pour les Markers/Le banc plus artisitique.jpg"]},
    { lat: 48.6727086, lng: 6.2022050, title: "Je veux m'assoir", description: "Fin janvier, il fait tellement froid, mais le soleil brille, j'ai envie de sortir. J'ai envie de m'asseoir, mais les bancs en pierre sont si froids à cause du vent.", images: ["Photos pour les Markers/Je veux m'asseoir.jpg"]},
    { lat: 48.671343, lng: 6.205496, title: "C'est beau", description: "Drôle d'endroit pour mettre un banc. Mais la vue est bonne.", images: ["Photos pour les Markers/C'est beau.jpeg"]},
    { lat: 48.701874, lng: 6.185601, title: "C'est dommage que nous soyons en hiver", description: "Je m'assiérais ici s'il faisait chaud.", images: ["Photos pour les Markers/C'est dommage que nous soyons en hiver.jpeg"]},
    { lat: 48.701711, lng: 6.187004, title: "Le banc devenu  moche", description: "Malgré la belle vue, le banc est couvert des mauvais mots.", images: ["Photos pour les Markers/Le banc est devenu moche1.jpeg","Photos pour les Markers/Le banc est devenu moche2.jpeg"]},
    { lat: 48.697721, lng: 6.174360, title: "L'inattendu", description: "Nancy a toujours des endroits que l'on ne connaît pas.", images: ["Photos pour les Markers/L'inattendu.jpeg"]},
    { lat: 48.693568379959814, lng: 6.182447481583709, title: "Touristes Fatigués", description: "Ces morceaux de bois valent de l'or pour les touristes épuisés d'avoir arpenté la place Stan. À ces moments-là, le bois vaut bien plus que l'or des grilles derrière eux.", images: ["Photos pour les Markers/Touristes Fatigués.jpeg"]},
    { lat: 48.693533682856945, lng: 6.183236774417428, title: "Le Soleil", description: "L'endroit idéal pour capter un rayon de soleil au cœur de la place Stan. Savaient-ils déjà, ceux qui l'ont conçue, que ce spot deviendrait si prisé par ceux qui cherchent une pause ensoleillée en ville?", images: ["Photos pour les Markers/Le Soleil.jpeg"]},
    { lat: 48.691112205263906, lng: 6.183420895959682, title: "Le Consumérisme", description: "Cette rue bondée de magasins ne semble jamais lasser ceux qui veulent acheter de nouveaux vêtements. Ces bancs sont peut-être inutiles… mais on ne sait jamais.", images: ["Photos pour les Markers/Le Consumérisme.jpeg"]},
    { lat: 48.67486797125592, lng: 6.175523840098286, title: "Le Banc d'Arrêt de Bus", description: "J'ai toujours critiqué ce banc, le trouvant mal placé et inutile. Jusqu'au jour où, attendant le bus, j'ai traversé la rue rien que pour m'y asseoir.", images: ["Photos pour les Markers/Le Banc d'Arrêt de Bus.jpg"]}
  ];
  var locations_poubelle = [
    { lat: 48.693820, lng: 6.193754, title: "La poubelle flexible", description: "Cette poubelle a vraiment une belle vue.", images:["Photos pour les Markers/La poubelle flexible1.jpeg", "Photos pour les Markers/La poubelle flexible2.jpeg"]},
    { lat: 48.680185, lng: 6.181398, title: "C'est un banc ou une poubelle?", description: "L'impossibilité de s'asseoir si proche de ces poubelles gigantesques m'a fait réfléchir à la définition de cet objet. Aujourd'hui, j'ai trouvé un pot de nourriture en dessous, et la réponse est devenue plus claire.", images: ["Photos pour les Markers/C'est un Banc ou une Poubelle.jpeg"]},
    { lat: 48.691083, lng: 6.174912, title: "Des Artistes Inconnus", description: "Ils ont laissé des traces sur les coins, des couleurs sous les ponts, des mots éphémères sur les mûrs. Personne ne sait leurs noms, mais la ville garde leurs ouvres.", images: ["Photos pour les Markers/Des Artistes Inconnus.jpeg"]},
    { lat: 48.69289211697588, lng: 6.1811894240613325, title: "Le Bloc de Ciment", description: "Cette énorme structure en béton empêche efficacement les voitures de circuler dans cette rue. Pourtant, elle bloque aussi les piétons et ne sert finalement qu'à recueillir des mégots de cigarette.", images: ["Photos pour les Markers/Le Bloc de Ciment 1.jpeg", "Photos pour les Markers/Le Bloc de Ciment 2.jpeg"]},
    { lat: 48.6791322582712, lng: 6.171197004469136, title: "La Poubelle Perplexe", description: "Dans le parc, il voit des gens passer et repasser devant lui. Il ne peut ni parler ni les suivre. Il se demande : « Sont-ils perdu? »", images: ["Photos pour les Markers/La Poubelle Perplexe.jpeg"]}
  ];
  var locations_jeu = [
    { lat: 48.702007, lng: 6.184352, title: "Spectateur", description: "Si cet arbre pouvait jouer aux échecs, il serait tellement fort.", images: ["Photos pour les Markers/Spectateur.jpeg"]},
    { lat: 48.661149, lng: 6.198571, title: "Jouer", description: "Certainement, il y aurait beaucoup de gens ici en train de jouer au foot si on était au Brésil.", images: ["Photos pour les Markers/Jouer.jpeg"]},
    { lat: 48.679535841630155, lng: 6.171440762103717, title: "Terrain de Sport", description: "Au Brésil, ce serait tout autre chose : un terrain de football bondé, avec des équipes qui patientent pour jouer. Ici, le jeu est différent, mais c'est bien de voir des sports par ici de nouveau.", images: ["Photos pour les Markers/Terrain de Sport.jpeg"]}
    // à ajouter
  ];
  var locations_point_interrogation = [
    //{ lat: 48.705092361265876, lng: 6.1837232572914, title: "Pour papoter avec des amis", description: "On regarde l'eau, on écoute les voitures qui passent au dessus, on discute. C'est tellement tranquille.", images:[]},
    { lat: 48.664530831424464, lng: 6.180632892284266, title: "Se vider la tête", description: "Ce pont nous permet de traverser la petite rivière, et le franchir me semble un rituel. Presque comme si tu te disais à toi-même «J'accepte ce que je suis, et je laisse derrière moi tout ce que je ne veux plus».", images:["Photos pour les Markers/Se vider la tête.jpg"]},
    { lat: 48.67296489549983, lng: 6.171673447130579, title: "Gratitude", description: "Les cours sont finis et je rentre chez moi. La belle combinaison de couleurs dans le ciel me fait réaliser où je suis.", images:["Photos pour les Markers/Gratitude.jpg"]},
    { lat: 48.661502, lng: 6.188491, title: "C'est quoi ça?", description: "Je m'arrête et je me demande: qu'est-ce que c'est?", images: ["Photos pour les Markers/C'est quoi ça.jpg"] },
    { lat: 48.677392, lng: 6.192124, title: "Maison des Trains", description: "Ces lignes de train qui permettent à tant de personnes de se déplacer chaque jour. Et cette maison, est-elle au milieu de rien... ou au cœur de tout?", images: ["Photos pour les Markers/Maison des Trains.jpeg"]},
    { lat: 48.699239, lng: 6.189570, title: "Je suis où?", description: "C'est bizarre d'imaginer des bateaux à Nancy.", images: ["Photos pour les Markers/Je suis où.jpeg"]},
    { lat: 48.691627, lng: 6.194893, title: "Courir?", description: "Il faut vraiment avoir l'envie de courir ici, parce que les chaussures vont être sale après.", images: ["Photos pour les Markers/Courir.jpeg"]},
    { lat: 48.692327, lng: 6.176966, title: "Pop Art", description: "On marche et on regarde des murs soit vides et sans couleur, soit pleins d'annonces. Rien contre les publicités, au moins elles ajoutent un peu de couleur à cet endroit.", images: ["Photos pour les Markers/Pop Art.jpeg"]},
    { lat: 48.696828, lng: 6.171833, title: "La Cheminée", description: "À quoi servait-elle avant?", images: ["Photos pour les Markers/La Cheminée1.jpeg", "Photos pour les Markers/La Cheminée2.jpeg"]},
    { lat: 48.685103, lng: 6.186934, title: "L'histoire", description: "Nancy est remplie d'histoire qui se mélange avec les rues. C'est impressionnant.", images: ["Photos pour les Markers/L'histoire.jpeg"]},
    { lat: 48.692188, lng: 6.194309, title: "Sommes-nous à Nancy?", description: "", images: ["Photos pour les Markers/Sommes nous à Nancy1.jpeg", "Photos pour les Markers/Sommes nous à Nancy2.jpeg"]},
    { lat: 48.679908, lng: 6.181053, title: "L'unique Fusca", description: "La Coccinelle est la voiture la plus vendue au monde, et c'est la première fois que je l'ai vue à Nancy. Au Brésil, par contre, on retrouve cette voiture partout. On l'appelle 'Fusca'.", images: ["Photos pour les Markers/L'unique Fusca.jpeg"]},
    { lat: 48.690543, lng: 6.173234, title: "Les lignes", description: "Ces lignes qui pointent vers l'horizon contribuent également à amener des étudiants venus de toute la France.", images: ["Photos pour les Markers/Les lignes.jpeg"]},
    { lat: 48.69326924896325, lng: 6.182639881275671, title: "Architecture Futuristes", description: "Cette structure semble si ancienne au premier regard. Mais en observant ses détails, on découvre toute la modernité de son style futuriste.", images: ["Photos pour les Markers/Architecture Futuristes.jpeg"]},
    { lat: 48.68911392013241, lng: 6.182081878048516, title: "Le Calme dans le Chaos Urbain", description: "Cette place grouille de vie et de mouvement. Mais s'y asseoir pour prendre un café y apporte une sérénité intense. Observer la vie défiler : familles pressées, jeunes qui jouent, touristes en quête de photos, vieillards chargés de sacs de courses.", images: ["Photos pour les Markers/Le Calme dans le Chaos Urbain.jpeg"]}
  ];
  var locations_chien = [
    { lat: 48.681430118256344, lng: 6.171292524104956, title: "Toilette pour Chiens", description: "Je suis arrivé à cet endroit et je ne savait pas qu'est-ce que c'était, mais après être entré, j'ai découvert.", images:["Photos pour les Markers/Toilette pour Chiens 1.jpeg", "Photos pour les Markers/Toilette pour Chiens 2.jpeg"]},
    { lat: 48.68100408630635, lng: 6.171611521872696, title: "Fontaine à eau", description: "Je voudrais que c'était pour les humains, mais je vois que les chiens en bouvant ici", images:["Photos pour les Markers/Fontaine à eau.jpeg"]},
    { lat: 48.672502, lng: 6.202036, title: "C'est mignon", description: "", images: ["Photos pour les Markers/C'est mignon1.jpeg", "Photos pour les Markers/C'est mignon2.jpeg"]},
    { lat: 48.702154, lng: 6.178067, title: "Garfield", description: "Il s'en fiche. Il touche aux vélos des autres.", images: ["Photos pour les Markers/Garfield1.jpeg", "Photos pour les Markers/Garfield2.jpeg"]}
    // à ajouter
  ];
  var locations_plant = [
    { lat: 48.660891, lng: 6.195602, title: "Les Feuilles en Haut de l'Arbre", description: "Ils sont comme des guides qui nous invitent à regarder le ciel.", images: ["Photos pour les Markers/Les plantes en haut.jpeg"]},
    { lat: 48.695941, lng: 6.191940, title: "L'eutrofisation", description: "Eutrofisation: c'est un état correspondant à une surabondance de matière organique dans un environnement avec de l'eau. C'est un phénomène qui entraîne l'asphyxie du milieu, provoquant ainsi une perte dramatique de biodiversité. Même si ça paraît beau, ce n'est pas bien en réalité.", images: ["Photos pour les Markers/L'eutrofisation.jpeg"]},
    { lat: 48.67917830904457, lng: 6.170885232975251, title: "L'arbre de Fer", description: "Grâce à ce parc qui donne l'impression d'être à l'écart de la ville, cette structure métallique se fond harmonieusement avec la nature.", images: ["Photos pour les Markers/L'arbre de Fer.jpeg"]},
    { lat: 48.66647634707934, lng: 6.165824495291776, title: "Le Printemps", description: "Les arbres se réveillent en montrant ses fleurs comme après un long sommeil.", images: ["Photos pour les Markers/Le Printemps.jpeg"]},
    { lat: 48.679800495278016, lng: 6.170274101747382, title: "La Beauté", description: "Ce parc est déjà magnifique en hiver. J'imagine à quoi il ressemblera, couvert de ces fleurs qui promettent d'éclore dans les arbres.", images: ["Photos pour les Markers/La Beauté.jpeg"]}
    // à ajouter
  ];

  locations_banc.forEach(location => {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.lat, location.lng),
      icon: icon_banc, // Remova isso se quiser usar o ícone padrão do Google Maps
      map: map,
      title: location.title
    });
  
    // Cria um InfoWindow
    var infoWindow = new google.maps.InfoWindow();
  
    // Adiciona evento de clique no marcador para abrir o InfoWindow
    marker.addListener("click", function () {
      var imageHTML = `<div style="display: flex; overflow-x: auto; white-space: nowrap; max-width: 200px;">`;
      location.images.forEach(image => {
        imageHTML += `<img src="${image}" alt="${location.title}" style="width:100%; height:auto; margin-bottom:10px;"/>`;
      });
      var content = `
        <div id="info-window" style="font-size:14px; max-width:200px;">
          <h3>${location.title}</h3>
          <p>${location.description}</p>
          ${imageHTML}
        </div>
      `;
      //<img src="${location.image}" alt="${location.title}" style="width:100%; height:auto;"/>
  
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
  
      /*// Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);*/
    });
  });
  locations_chien.forEach(location => {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.lat, location.lng),
      icon: icon_chien, // Remova isso se quiser usar o ícone padrão do Google Maps
      map: map,
      title: location.title
    });
  
    // Cria um InfoWindow
    var infoWindow = new google.maps.InfoWindow();
  
    // Adiciona evento de clique no marcador para abrir o InfoWindow
    marker.addListener("click", function () {
      var imageHTML = `<div style="display: flex; overflow-x: auto; white-space: nowrap; max-width: 200px;">`;
      location.images.forEach(image => {
        imageHTML += `<img src="${image}" alt="${location.title}" style="width:100%; height:auto; margin-bottom:10px;"/>`;
      });
      var content = `
        <div id="info-window" style="font-size:14px; max-width:200px;">
          <h3>${location.title}</h3>
          <p>${location.description}</p>
          ${imageHTML}
        </div>
      `;
      //<img src="${location.image}" alt="${location.title}" style="width:100%; height:auto;"/>
  
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
  
      /*// Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);*/
    });
  });
  locations_jeu.forEach(location => {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.lat, location.lng),
      icon: icon_jeu, // Remova isso se quiser usar o ícone padrão do Google Maps
      map: map,
      title: location.title
    });
  
    // Cria um InfoWindow
    var infoWindow = new google.maps.InfoWindow();
  
    // Adiciona evento de clique no marcador para abrir o InfoWindow
    marker.addListener("click", function () {
      var imageHTML = `<div style="display: flex; overflow-x: auto; white-space: nowrap; max-width: 200px;">`;
      location.images.forEach(image => {
        imageHTML += `<img src="${image}" alt="${location.title}" style="width:100%; height:auto; margin-bottom:10px;"/>`;
      });
      var content = `
        <div id="info-window" style="font-size:14px; max-width:200px;">
          <h3>${location.title}</h3>
          <p>${location.description}</p>
          ${imageHTML}
        </div>
      `;
      //<img src="${location.image}" alt="${location.title}" style="width:100%; height:auto;"/>
  
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
  
      /*// Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);*/
    });
  });
  locations_point_interrogation.forEach(location => {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.lat, location.lng),
      icon: icon_point_interrogation, // Remova isso se quiser usar o ícone padrão do Google Maps
      map: map,
      title: location.title
    });
  
    // Cria um InfoWindow
    var infoWindow = new google.maps.InfoWindow();
  
    // Adiciona evento de clique no marcador para abrir o InfoWindow
    marker.addListener("click", function () {
      var imageHTML = `<div style="display: flex; overflow-x: auto; white-space: nowrap; max-width: 200px;">`;
      location.images.forEach(image => {
        imageHTML += `<img src="${image}" alt="${location.title}" style="width:100%; height:auto; margin-bottom:10px;"/>`;
      });
      var content = `
        <div id="info-window" style="font-size:14px; max-width:200px;">
          <h3>${location.title}</h3>
          <p>${location.description}</p>
          ${imageHTML}
        </div>
      `;
      //<img src="${location.image}" alt="${location.title}" style="width:100%; height:auto;"/>
  
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
  
      /*// Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);*/
    });
  });
  locations_plant.forEach(location => {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.lat, location.lng),
      icon: icon_plant, // Remova isso se quiser usar o ícone padrão do Google Maps
      map: map,
      title: location.title
    });
  
    // Cria um InfoWindow
    var infoWindow = new google.maps.InfoWindow();
  
    // Adiciona evento de clique no marcador para abrir o InfoWindow
    marker.addListener("click", function () {
      var imageHTML = `<div style="display: flex; overflow-x: auto; white-space: nowrap; max-width: 200px;">`;
      location.images.forEach(image => {
        imageHTML += `<img src="${image}" alt="${location.title}" style="width:100%; height:auto; margin-bottom:10px;"/>`;
      });
      var content = `
        <div id="info-window" style="font-size:14px; max-width:200px;">
          <h3>${location.title}</h3>
          <p>${location.description}</p>
          ${imageHTML}
        </div>
      `;
      //<img src="${location.image}" alt="${location.title}" style="width:100%; height:auto;"/>
  
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
  
      /*// Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);*/
    });
  });
  locations_poubelle.forEach(location => {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.lat, location.lng),
      icon: icon_poubelle, // Remova isso se quiser usar o ícone padrão do Google Maps
      map: map,
      title: location.title
    });
  
    // Cria um InfoWindow
    var infoWindow = new google.maps.InfoWindow();
  
    // Adiciona evento de clique no marcador para abrir o InfoWindow
    marker.addListener("click", function () {
      var imageHTML = `<div style="display: flex; overflow-x: auto; white-space: nowrap; max-width: 200px;">`;
      location.images.forEach(image => {
        imageHTML += `<img src="${image}" alt="${location.title}" style="width:100%; height:auto; margin-bottom:10px;"/>`;
      });
      var content = `
        <div id="info-window" style="font-size:14px; max-width:200px;">
          <h3>${location.title}</h3>
          <p>${location.description}</p>
          ${imageHTML}
        </div>
      `;
      //<img src="${location.image}" alt="${location.title}" style="width:100%; height:auto;"/>
  
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
  
      /*// Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);*/
    });
  });
  marker.setMap(map);
}

// Função para tornar o título "sticky" (fixo no topo)
window.onscroll = function() {makeSticky()};

// Função para realizar o scroll suave
function smoothScroll(target) {
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Adiciona um evento de clique a todos os links do menu
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        smoothScroll(link.getAttribute('href'));
    });
})

// Adiciona o efeito de rolagem que gira imagem
window.addEventListener('scroll', function () {
  const containers = document.querySelectorAll('.image-container');

  containers.forEach(function (container) {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top >= 400 && rect.bottom <= (windowHeight-100)) {
          container.querySelector('.image-wrapper').classList.add('rotated');
      } else {
          container.querySelector('.image-wrapper').classList.remove('rotated');
      }
  });
});