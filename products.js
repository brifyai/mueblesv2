// Catálogo Forja · imágenes de Unsplash (demostrativo)
window.CATEGORIES = [
  ['',              'Todos'],
  ['centro',        'Mesa de Centro'],
  ['auxiliar',      'Mesa Auxiliar'],
  ['comedor',       'Mesa Comedor'],
  ['silla-comedor', 'Silla Comedor'],
  ['sitial',        'Sitial'],
  ['banqueta',      'Banqueta'],
  ['banca',         'Banca'],
  ['terraza',       'Terraza'],
  ['cojines',       'Cojines'],
  ['maceteros',     'Maceteros'],
  ['lamparas',      'Lámparas']
];

window.PRODUCTS = [
  // MUEBLES — Mesa de Centro
  { id:'ellis',  name:'Mesa de centro vidrio y madera',                  cat:'centro',  price:639000, img:'mesa-centro-vidrio.png' },
  { id:'roca',   name:'Mesa de centro madera y fierro',                 cat:'centro',  price:712000, img:'mesa-centro-fierro.png' },
  { id:'lennon', name:'Mesa de centro de palo de rosa y vidrio Lennon', cat:'centro',  price:868000, img:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80' },
  { id:'reese',  name:'Mesa de centro en palo de rosa y mármol Reese',  cat:'centro',  price:925000, img:'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80' },

  // MUEBLES — Mesa Auxiliar
  { id:'quinn',  name:'Mesa auxiliar de madera de olmo Quinn',              cat:'auxiliar', price:189000, img:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=80' },
  { id:'kai',    name:'Mesa auxiliar de acero Kai',                         cat:'auxiliar', price:165000, img:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80' },
  { id:'dakota', name:'Mesa auxiliar de madera y tablero de vidrio Dakota', cat:'auxiliar', price:219000, img:'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=900&q=80' },
  { id:'harper', name:'Mesa auxiliar de fresno y mármol Harper',            cat:'auxiliar', price:249000, img:'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80' },

  // MUEBLES — Mesa Comedor
  { id:'parker', name:'Mesa comedor de madera de olmo Parker',  cat:'comedor', price:849000, img:'comedor-organico.png' },
  { id:'luxe',   name:'Mesa comedor de olmo y acero Luxe',      cat:'comedor', price:935000, img:'comedor-light.png' },
  { id:'lino',   name:'Mesa comedor de madera clara Lino',      cat:'comedor', price:789000, img:'comedor-arquitecto.png' },

  // SILLAS — Sitial
  { id:'sinclair', name:'Sitial café',                                        cat:'sitial', price:559000, img:'sitial-cafe.png' },
  { id:'salem',    name:'Sitial blanco',                                     cat:'sitial', price:489000, img:'sitial-blanco.png' },
  { id:'velo',     name:'Sitial negro',                                      cat:'sitial', price:629000, img:'sitial-negro.png' },
  { id:'oslo',     name:'Sitial de cuero Oslo',                              cat:'sitial', price:739000, img:'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80' },

  // SILLAS — Silla Comedor
  { id:'norden',  name:'Silla natural',                                  cat:'silla-comedor', price:289000, img:'silla-natural.png' },
  { id:'vita',    name:'Silla natural sin tapiz',                       cat:'silla-comedor', price:345000, img:'silla-sin-tapiz.png' },
  { id:'arco',    name:'Silla pink',                                    cat:'silla-comedor', price:265000, img:'silla-pink.png' },
  { id:'noma',    name:'Silla comedor de madera curvada Noma',          cat:'silla-comedor', price:312000, img:'https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=900&q=80' },

  // SILLAS — Banqueta
  { id:'alto',    name:'Banqueta sin respaldo blanco',                   cat:'banqueta', price:229000, img:'banqueta-blanco.png' },
  { id:'brise',   name:'Banqueta sin respaldo verde musgo',              cat:'banqueta', price:275000, img:'banqueta-verde.png' },
  { id:'pico',    name:'Banqueta sin respaldo',                          cat:'banqueta', price:195000, img:'banqueta-natural.png' },
  { id:'gris',    name:'Banqueta sin respaldo gris',                     cat:'banqueta', price:215000, img:'banqueta-gris.png' },

  // SILLAS — Banca
  { id:'larga',   name:'Banca respaldo orgánica',                        cat:'banca', price:489000, img:'banca-organica.png' },
  { id:'parque',  name:'Banca exterior de teca y acero Parque',         cat:'banca', price:559000, img:'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80' },
  { id:'linea',   name:'Banca minimalista de fresno Línea',             cat:'banca', price:425000, img:'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=900&q=80' },

  // TERRAZAS
  { id:'dual-pink',   name:'Set terraza Dual pink',              cat:'terraza', price:459000, img:'terraza-dual-pink.png' },
  { id:'dual-beige-r', name:'Silla terraza Dual beige',          cat:'terraza', price:189000, img:'terraza-dual-beige-respaldo.png' },
  { id:'dual-rojo',   name:'Silla terraza Dual rojo',            cat:'terraza', price:189000, img:'terraza-dual-rojo.png' },
  { id:'dual-beige',  name:'Set terraza Dual beige',             cat:'terraza', price:459000, img:'terraza-dual-beige.png' },
  { id:'mesa-verano', name:'Mesa terraza Verano',                cat:'terraza', price:349000, img:'terraza-mesa-verano.png' },

  // COMPLEMENTOS — Cojines
  { id:'scala', name:'Cojín de lino verde Scala',           cat:'cojines',   price:48000,  img:'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=900&q=80' },
  { id:'mono',  name:'Cojín de algodón natural Mono',       cat:'cojines',   price:55000,  img:'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=900&q=80' },
  { id:'terra', name:'Cojín de lana terracota Terra',       cat:'cojines',   price:62000,  img:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80' },
  { id:'nube',  name:'Cojín de bouclé crema Nube',          cat:'cojines',   price:58000,  img:'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=900&q=80' },

  // COMPLEMENTOS — Maceteros
  { id:'floe',  name:'Florero en cerámica Floe',           cat:'maceteros', price:64000,  img:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80' },
  { id:'amba',  name:'Jarrón en cerámica Amba',             cat:'maceteros', price:72000,  img:'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=80' },
  { id:'verde', name:'Macetero de concreto Verde',          cat:'maceteros', price:45000,  img:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80' },
  { id:'suelo', name:'Macetero alto de fibra Suelo',        cat:'maceteros', price:89000,  img:'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=900&q=80' },

  // COMPLEMENTOS — Lámparas
  { id:'lyra',  name:'Lámpara de mesa Lyra',                cat:'lamparas',  price:139000, img:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80' },
  { id:'arco-l', name:'Lámpara de pie arco Arco',           cat:'lamparas',  price:219000, img:'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80' },
  { id:'cobre', name:'Lámpara colgante de cobre Cobre',     cat:'lamparas',  price:185000, img:'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=900&q=80' },
  { id:'faro',  name:'Lámpara de escritorio Faro',          cat:'lamparas',  price:95000,  img:'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=80' }
];

window.NEW_IDS = ['velo','luxe','reese','harper'];
