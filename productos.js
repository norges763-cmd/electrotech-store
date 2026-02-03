const productosData = [
    {
        nombre: "Micros SD de 64gb",
        precio: "$2400 CUP",
        categoria: "conectividad",
        fotos: ["https://i.ibb.co/gMqH6nfn/Lumii-20250921-192528087.jpg"],
        descripcion: "",
        disponible: true
    },
    {
        nombre: "Cargadores",
        precio: "Desde $750 CUP",
        categoria: "conectividad",
        fotos: ["https://i.ibb.co/KjY3KDTV/Lumii-20251209-160415678.jpg", "https://i.ibb.co/PsBRYb20/1000218217.jpg"],
        descripcion: "Cargadores estándar y de doble puerto.",
        disponible: true,
        variantes: [
            {nombre: "Cargador Doble Puerto", precio: "$1800 CUP", img: "https://i.ibb.co/KjY3KDTV/Lumii-20251209-160415678.jpg", disponible: false},
            {nombre: "Cargador 5V a 1A", precio: "$750 CUP", img: "https://i.ibb.co/PsBRYb20/1000218217.jpg", disponible: true}
        ]
    },
    {
        nombre: "Power banks",
        precio: "---",
        categoria: "conectividad",
        fotos: [
            "https://i.ibb.co/mVZXcbVH/1000223219.jpg", "https://i.ibb.co/ccrSKPJH/1000223220.jpg",
            "https://i.ibb.co/sJCtB30M/1000223221.jpg", "https://i.ibb.co/xSMb89yF/1000223222.jpg",
            "https://i.ibb.co/WWsK8krj/1000223223.jpg"
        ],
        descripcion: "Baterías portátiles de alta capacidad.",
        disponible: false
    },
    {
        nombre: "Cables USB",
        precio: "Desde $500 CUP",
        categoria: "conectividad",
        fotos: ["https://i.ibb.co/C3B0YzFm/Lumii-20251209-115131565.jpg", "https://i.ibb.co/HpdRBhm1/1000218191.jpg", "https://i.ibb.co/23FmktSZ/1000217879.jpg"],
        descripcion: "Cables de datos y carga (Tipo C, Tipo B, C a C).",
        disponible: true,
        variantes: [
            {nombre: "Cable Tipo C a Tipo C", precio: "$580 CUP", img: "https://i.ibb.co/C3B0YzFm/Lumii-20251209-115131565.jpg", disponible: false},
            {nombre: "Cable Tipo C a USB", precio: "$500 CUP", img: "https://i.ibb.co/23FmktSZ/1000217879.jpg", disponible: true},
            {nombre: "Cable Tipo B (Micro)", precio: "$700 CUP", img: "https://i.ibb.co/HpdRBhm1/1000218191.jpg", disponible: true}
        ]
    },
    {
        nombre: "Adaptadores OTG",
        precio: "Desde $230 CUP",
        categoria: "conectividad",
        fotos: ["https://i.ibb.co/Ng76BvzN/Lumii-20251004-131401596.jpg", "https://i.ibb.co/SD0SWwyx/OTG-Tipo-B.jpg"],
        descripcion: "Conecta USB a tu teléfono (Tipo C y Micro USB).",
        disponible: true,
        variantes: [
            {nombre: "OTG Tipo C", precio: "$230 CUP", img: "https://i.ibb.co/Ng76BvzN/Lumii-20251004-131401596.jpg", disponible: true},
            {nombre: "OTG Tipo B (Micro)", precio: "$300 CUP", img: "https://i.ibb.co/SD0SWwyx/OTG-Tipo-B.jpg", disponible: false}
        ]
    },
    {
        nombre: "Audífonos Inalámbricos",
        precio: "$3000 CUP",
        categoria: "conectividad",
        fotos: [
            "https://i.ibb.co/PGtYkmJX/1000241734.jpg",
            "https://i.ibb.co/9mg85p7V/1000241732.jpg",
            "https://i.ibb.co/99fxs0Ww/1000241733.jpg"
        ],
        descripcion: "Una sola carga hasta el 100% le brinda una autonomía de 24 horas de reproducción contínua.",
        disponible: true
    },

    {
        nombre: "Memorias USB",
        precio: "Desde $2200 CUP",
        categoria: "almacenamiento",
        fotos: ["https://i.ibb.co/6cnpqPTr/1000218192.jpg", "https://i.ibb.co/Ngj3BB8w/1000159173.jpg"],
        descripcion: "Memorias de 32GB y 64GB.",
        disponible: true,
        variantes: [
            {nombre: "Memoria USB 32GB", precio: "$2200 CUP", img: "https://i.ibb.co/6cnpqPTr/1000218192.jpg", disponible: true},
            {nombre: "Memoria USB 64GB 3.0", precio: "---", img: "https://i.ibb.co/Ngj3BB8w/1000159173.jpg", disponible: false}
        ]
    },
    {
        nombre: "Adaptador para Micros SD",
        precio: "$200 CUP c/u",
        categoria: "almacenamiento",
        fotos: ["https://i.ibb.co/YFyX1rDQ/1000155412.jpg", "https://i.ibb.co/twJFPHTy/1000158551.jpg"],
        descripcion: "Adaptador estándar para leer tarjetas Micro SD en ranuras SD.",
        disponible: true
    },
    {
        nombre: "Discos duros",
        precio: "---",
        categoria: "almacenamiento",
        fotos: ["https://i.ibb.co/HfH5N9nT/1000190920.jpg"],
        descripcion: "",
        disponible: false
    },
    {
        nombre: "Mouse",
        precio: "$2800 CUP",
        categoria: "pc",
        fotos: ["https://i.ibb.co/m7h8RxX/1000229163.jpg", "https://i.ibb.co/D3Bq9CB/1000229162.jpg"],
        descripcion: "",
        disponible: true
    },
    {
        nombre: "Medias",
        precio: "$350 CUP",
        categoria: "otros",
        fotos: ["https://i.ibb.co/bMTy9Hxh/1000146970.jpg", "https://i.ibb.co/zhHS8dKD/1000146969.jpg"],
        descripcion: "Diferentes tallas y modelos disponibles.",
        disponible: true
    },
    {
        nombre: "Mangas para el sol",
        precio: "$800 CUP el par",
        categoria: "otros",
        fotos: ["https://i.ibb.co/RGpLkX27/1000146437.jpg", "https://i.ibb.co/WW6cXZbT/1000147486.jpg", "https://i.ibb.co/BVC4JGWm/1000147487.jpg"],
        descripcion: "Color disponibles blanco",
        disponible: true
    },
    {
        nombre: "Mata moscas",
        precio: "$200 CUP c/u",
        categoria: "otros",
        fotos: ["https://i.ibb.co/2fG8xqB/1000173994.jpg", "https://i.ibb.co/6J4XR66G/1000146733.jpg", "https://i.ibb.co/mVFjQ7ng/1000146732.jpg"],
        descripcion: "",
        disponible: true
    }
];

