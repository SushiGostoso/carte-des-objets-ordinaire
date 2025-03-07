function initMap() {
  var mapProp= {
    center:new google.maps.LatLng(48.685338616197354,6.183894494385265), //Nancy
    zoom:11.5,
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
    { lat: 48.697721, lng: 6.174360, title: "L'inattendu", description: "Nancy a toujours des endroits que l'on ne connaît pas.", images: ["Photos pour les Markers/L'inattendu.jpeg"]}
  ];
  var locations_poubelle = [
    { lat: 48.693820, lng: 6.193754, title: "La poubelle flexible", description: "Cette poubelle a vraiment une belle vue.", images:["Photos pour les Markers/La poubelle flexible1.jpeg", "Photos pour les Markers/La poubelle flexible2.jpeg"]}
  ];
  var locations_jeu = [
    { lat: 48.67957625909358, lng: 6.170688443274954, title: "Jeu pour les enfants?", description: "Les endroits comme ça me font souvenir ma ville où je beaucoup joué dans les Terrains de jeu.", images:[]},
    { lat: 48.688281696142965, lng: 6.177894619976216, title: "Le pire banc de Nancy", description: "Personne ne les utilise, c'est pour ça qu'ils sont si propres. Par contre, les enfants aiment bien jouer avec. Du coup c'est un jeu?", images:[]},
    { lat: 48.702007, lng: 6.184352, title: "Spectateur", description: "Si cet arbre pouvait jouer aux échecs, il serait tellement fort.", images: ["Photos pour les Markers/Spectateur.jpeg"]},
    { lat: 48.661149, lng: 6.198571, title: "Jouer", description: "Certainement, il y aurait beaucoup de gens ici en train de jouer au foot si on était au Brésil.", images: ["Photos pour les Markers/Jouer.jpeg"]}
    // à ajouter
  ];
  var locations_point_interrogation = [
    { lat: 48.705092361265876, lng: 6.1837232572914, title: "Pour papoter avec des amis", description: "On regarde l'eau, on écoute les voitures qui passent au dessus, on discute. C'est tellement tranquille.", images:[]},
    { lat: 48.664530831424464, lng: 6.180632892284266, title: "Se vider la tête", description: "Mes amis avaient des problèmes personnels à l'époque de la photo. Ce jour on pouvait se vider la tête un peu.", images:["Photos pour les Markers/Se vider la tête.jpg"]},
    { lat: 48.67296489549983, lng: 6.171673447130579, title: "Gratitude", description: "Les cours sont finis et je rentre chez moi. La belle combinaison de couleurs dans le ciel me fait réaliser où je suis.", images:["Photos pour les Markers/Gratitude.jpg"]},
    { lat: 48.661502, lng: 6.188491, title: "C'est quoi ça?", description: "Je m'arrête et je me demande: qu'est-ce que c'est?", images: ["Photos pour les Markers/C'est quoi ça.jpg"] },
    { lat: 48.677392, lng: 6.192124, title: "Maison des Trains", description: "", images: ["Photos pour les Markers/Maison des Trains.jpeg"]},
    { lat: 48.699239, lng: 6.189570, title: "Je suis où?", description: "C'est bizarre d'imaginer des bateaux à Nancy.", images: ["Photos pour les Markers/Je suis où.jpeg"]},
    { lat: 48.691627, lng: 6.194893, title: "Courir?", description: "Il faut vraiment avoir l'envie de courir ici, parce que les chaussures vont être sale après.", images: ["Photos pour les Markers/Courir.jpeg"]},
    { lat: 48.693099, lng: 6.193743, title: "L'After Film", description: "Après avoir regardé Les Tuche au cinéma, je fais ma première promenade le long de la Meurthe.", images: ["Photos pour les Markers/Mes amis Inter2.jpeg"]}
  ];
  var locations_chien = [
    { lat: 48.681430118256344, lng: 6.171292524104956, title: "Toilette pour les Chiens", description: "Je suis arrivé à cet endroit et je ne savait pas qu'est-ce que c'était, mais après être entré, j'ai découvert.", images:[]},
    { lat: 48.68100408630635, lng: 6.171611521872696, title: "Fontaine à eau", description: "Je voudrais que c'était pour les humains, mais je vois que les chiens en bouvant ici", images:[]},
    { lat: 48.672502, lng: 6.202036, title: "C'est mignon", description: "", images: ["Photos pour les Markers/C'est mignon1.jpeg", "Photos pour les Markers/C'est mignon2.jpeg"]},
    { lat: 48.702154, lng: 6.178067, title: "Garfield", description: "Il s'en fiche. Il touche aux vélos des autres.", images: ["Photos pour les Markers/Garfield1.jpeg", "Photos pour les Markers/Garfield2.jpeg"]}
    // à ajouter
  ];
  var locations_plant = [
    { lat: 48.660891, lng: 6.195602, title: "Les Plantes en Haut", description: "Les plantes en haut sont comme des guides qui nous incitent à regarder le ciel.", images: ["Photos pour les Markers/Les plantes en haut.jpeg"]},
    { lat: 48.695941, lng: 6.191940, title: "L'eutrofisation", description: "Eutrofisation: c'est un état correspondant à une surabondance de matière organique dans un environnement avec de l'eau. C'est un phénomène qui entraîne l'asphyxie du milieu, provoquant ainsi une perte dramatique de biodiversité. Même si ça paraît beau, ce n'est pas bien en réalité.", images: ["Photos pour les Markers/L'eutrofisation.jpeg"]}
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
  
      // Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);
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
  
      // Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);
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
  
      // Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);
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
  
      // Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);
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
  
      // Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);
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
  
      // Aguarde um pouco para garantir que o InfoWindow foi inserido no DOM
      setTimeout(() => {
        var infoDiv = document.getElementById("info-window");
  
        if (infoDiv) {
          infoDiv.addEventListener("mouseleave", function () {
            infoWindow.close();
          });
        }
      }, 100);
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