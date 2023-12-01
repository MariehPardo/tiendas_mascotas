var map = L.map('map').setView([4.703336019404944, -74.08937001341596], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Datos de las tiendas de mascotas
const tiendasDeMascotas = [
    
    {
        nombre: 'Tienda de mascota Mi amigo y yo',
        nombre2: 'Latitud',
        latitud: 4.705080361558826,
        nombre3: 'longitud',
        longitud: -74.09019686347318,
        telefono: '',
        nombre4: 'Telefono: ' ,
        nombre5: 'Dirección: ',
        Dirección: 'Tv. 73a, Bogotá',
        
    },
    {
        nombre: 'Shibumi mascotas',
        nombre2: 'latitud',
        latitud: 4.702770738646204,
        nombre3: 'longitud',
        longitud: -74.0927717839135,
        telefono: '322 2776987',
        nombre4: 'Telefono: ' ,
        nombre5: 'Dirección: ',
        Dirección: 'Dg. 81j #76 a - 62, Bogotá'
    },
    {
        nombre: 'Pet House Mi amigo fiel',
        nombre2: 'Latitud',
        latitud: 4.702546187105255,
        nombre3: 'longitud',
        longitud: -74.09223970074886 ,
        nombre4: 'Telefono: ' ,
        telefono: 3204008935,
        nombre5: 'Dirección: ',
        Dirección: 'Diagonal 82b, Palestina # 76- 29, Bogotá',
        
    },
    {
        Imagen: '',
        nombre: 'Pet Store ',
        nombre2: 'Latitud',
        latitud: 4.701754925388303,
        nombre3: 'longitud',
        longitud: -74.09206803914726,
        nombre4: 'Telefono: ' ,
        telefono: 3022759642,
        nombre5: 'Dirección: ',
        Dirección: 'Tv. 76 #81i - 34, Bogotá',
        
    },
    {
        Imagen:  'tienda2.png',
        nombre:  'Pet services Dr Castillo',
        nombre2: 'Latitud: ',
        latitud:  4.70134860145401,
        nombre3:  'longitud: ',
        longitud:  -74.0897720684213,
        nombre4:  'Telefono: ' ,
        telefono:  3105538453,
        nombre5:  'Dirección: ',
        Dirección:  'Tv. 73a #81h-11, Bogotá',
        
    },
];

// Iterar sobre las tiendas y agregar marcadores al mapa
tiendasDeMascotas.forEach(tienda => {
    const marker = L.marker([tienda.latitud, tienda.longitud]).addTo(map);

    // Configurar la información de la ventana emergente
    const popupContent = `<b>${tienda.nombre}</b><br>
                          <b><br>
                          <b>${tienda.nombre2}</b>${tienda.latitud}<br>
                          <b>${tienda.nombre3}</b>${tienda.longitud}<br>
                          <b>${tienda.nombre4}</b>${tienda.telefono}<br>
                          <b>${tienda.nombre5}</b>${tienda.Dirección}<br>
                          <br>${tienda.Imagen}<br><img src="tienda2.png "style="width:200px"><br>`;
                                         
    // Agregar la ventana emergente al marcador
    marker.bindPopup(popupContent);
});



