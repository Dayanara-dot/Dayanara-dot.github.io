// ====== DATOS DE FORMACIÓN ======
const formacion = [
  {
    etapa: "Pre Parvularia",
    lugar: "Centro Escolar Colonia Carrillo 2012-2013",
    estado: "Completado",
    foto: "diploma-kinder-jpeg.jpeg"
  },
  {
    etapa: "Parvularia",
    lugar: "Centro Escolar Colonia Carrillo 2014-2015",
    estado: "Completado",
    foto: "diploma-parbularia-jpeg.jpeg"
  },
  {
    etapa: "Noveno Grado",
    lugar: "Centro Escolar Colonia Carrillo 2023-2024",
    estado: "Completado",
    foto: "diploma-noveno-jpej.jpeg"
  },

];


// ====== DATOS DE LOGROS ACADÉMICOS ======
const logros = [
  {
    titulo: "Diploma de Inglés - Nivel Principiante",
    descripcion: "Escuela Municipal de Idiomas, Alcaldía de San Miguel (2016).",
    foto: "diploma-ingles.jpeg.jpeg"
  },
  {
    titulo: "Proyecto Psicoeducativo - UNIVO",
    descripcion: "Universidad de Oriente, Facultad de Ciencias y Humanidades (2026).",
    foto: "proyecto-univo.jpeg.jpeg"
  },
  {
    titulo: "Proyecto Prep school - Superate",
    descripcion: "Centro superate proyecto para obtener mas conocimientos (2023).",
    foto: "diploma-prep school-jpeg.jpeg"
  },
  {
    titulo: "Excel Associate - Microsoft 365 Apps",
    descripcion: "Microsoft Office Specialist (octubre 2025).",
    foto: "excel-associate.jpeg.jpeg"
  },
  {
    titulo: "Excel Expert - Microsoft 365 Apps",
    descripcion: "Microsoft Office Specialist (marzo 2026).",
    foto: "excel-expert.jpeg.jpeg"
  },
  {
    titulo: "Introduction to HTML",
    descripcion: "SoloLearn (mayo 2024).",
    foto: "html.jpeg.jpeg"
  },
  {
    titulo: "Introduction to CSS",
    descripcion: "SoloLearn (mayo 2024).",
    foto: "css.jpeg.jpeg"
  },
  {
    titulo: "Medalla 1er Lugar",
    descripcion: "Reconocimiento por mi desempeño.",
    foto: "medalla-primer-lugar.jpeg.jpeg"
  },
  {
    titulo: "Medalla CONJUVE",
    descripcion: "Consejo Nacional de la Juventud, Gobierno de El Salvador.",
    foto: "medalla-conjuve.jpeg.jpeg"
  },
  {
    titulo: "Medalla INJUVE - PROJOVENES II",
    descripcion: "Instituto Nacional de la Juventud.",
    foto: "medalla-injuve.jpeg.jpeg"
  },
  {
    titulo: "Medalla Torneo Avalo's Karate Do",
    descripcion: "Reconocimiento deportivo.",
    foto: "medalla-karate.jpeg.jpeg"
  },
  {
    titulo: "Medalla Excelencia",
    descripcion: "Reconocimiento por mi dedicación y esfuerzo.",
    foto: "medalla-excelencia.jpeg.jpeg"
  }, 
  {
    titulo: "Medalla Expo Tech",
    descripcion: "Reconocimiento por mi dedicación y esfuerzo mediante el proyecto.",
    foto: "medalla-expotech.jpeg.jpeg"
  }
];


// ====== DATOS DE VOLUNTARIADO ======
const voluntariado = [
  {
    titulo: "Pintura de Bancas Escolares",
    descripcion: "Ayudé a pintar bancas del centro escolar para mejorar su imagen.",
    foto: "voluntariado-bancas.jpeg.jpeg"
  },
  {
    titulo: "Pintura de Mesas",
    descripcion: "Participé en la pintura de mesas comunitarias.",
    foto: "voluntariado-mesas.jpeg.jpeg"
  },
  {
    titulo: "Campaña de Limpieza",
    descripcion: "Participé en la limpieza de mi centro escolar y comunidad.",
    foto: "voluntariado-limpieza.jpeg.jpeg"
  },
  {
    titulo: "Jornada de Limpieza Escolar",
    descripcion: "Apoyé en la limpieza junto a mi grupo de compañeros.",
    foto: "voluntariado-limpieza2.jpeg.jpeg"
  }
];


// ====== DATOS DE PORTAFOLIO ======

const portafolio = [

  {
    titulo: "BiteX",
    descripcion: "App para reducir el desperdicio de alimentos. Hecha con React, Tailwind y Firebase.",
    foto: "Slogan-bitex-jpeg.png",
     enlace: "https://prueba-29000.web.app  "
  },

  {
    titulo: "Magic Wash",
    descripcion: "Una app que permite saber donde esta la lavanderia mas cercana ademas sabes los precios.",
    foto: "magicwash-jpeg.jpeg",
    enlace: "https://tuenlace-focuspet.com"
  },
  {
    titulo: "EduMotion",
    descripcion: "Una app quwe va dirigida a los estudiantes que se utiliza con tecnologia moderna.",
    foto: "edumotion-jpeg.jpeg",
     enlace: "https://app.animaker.com/animo/qtmKXVPA9nNlDVye/"
  },

];


// ====== CREAR TARJETA ======
function crearTarjeta(item) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  if (item.foto) {
    const img = document.createElement("img");

    img.src = item.foto;
    img.alt = item.titulo;

    // Si la imagen no existe
    img.onerror = function () {
      imgContainer.innerHTML = "No se encontró la imagen";
    };

    imgContainer.appendChild(img);
  } else {
    imgContainer.textContent = "Aquí va tu imagen";
  }

  const info = document.createElement("div");
  info.className = "info";

  info.innerHTML = `
    <h3>${item.titulo}</h3>
    <p>${item.descripcion}</p>
  `;

  tarjeta.appendChild(imgContainer);
  tarjeta.appendChild(info);

  return tarjeta;
}


// ====== FORMACIÓN ACADÉMICA ======
function crearFormacion() {

  const contenedor = document.getElementById("listaFormacion");

  formacion.forEach(item => {

    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-formacion";

    const espacio = document.createElement("div");
    espacio.className = "espacio-diploma";

    if (item.foto) {

      const img = document.createElement("img");

      img.src = item.foto;
      img.alt = "Diploma de " + item.etapa;

      espacio.appendChild(img);

    } else {

      espacio.textContent = "Aquí va tu diploma";

    }

    const info = document.createElement("div");
    info.className = "info";

    info.innerHTML = `
      <h3>${item.etapa}</h3>
      <p>${item.lugar}</p>
      <p><em>${item.estado}</em></p>
    `;

    tarjeta.appendChild(espacio);
    tarjeta.appendChild(info);

    contenedor.appendChild(tarjeta);
  });
}


// ====== CREAR CARRUSEL ======
function crearCarrusel(contenedorId, datos) {

  const contenedor = document.getElementById(contenedorId);

  if (!contenedor) return;

  // Limpiar el contenido anterior
  contenedor.innerHTML = "";

  // Contenedor principal
  const carrusel = document.createElement("div");
  carrusel.className = "carrusel";

  // Botón anterior
  const botonAnterior = document.createElement("button");
  botonAnterior.className = "carrusel-btn anterior";
  botonAnterior.innerHTML = "❮";
  botonAnterior.setAttribute("aria-label", "Anterior");

  // Área de tarjetas
  const ventana = document.createElement("div");
  ventana.className = "carrusel-ventana";

  const tarjetas = document.createElement("div");
  tarjetas.className = "carrusel-tarjetas";

  datos.forEach(item => {
    tarjetas.appendChild(crearTarjeta(item));
  });

  ventana.appendChild(tarjetas);

  // Botón siguiente
  const botonSiguiente = document.createElement("button");
  botonSiguiente.className = "carrusel-btn siguiente";
  botonSiguiente.innerHTML = "❯";
  botonSiguiente.setAttribute("aria-label", "Siguiente");

  carrusel.appendChild(botonAnterior);
  carrusel.appendChild(ventana);
  carrusel.appendChild(botonSiguiente);

  contenedor.appendChild(carrusel);

  // ====== MOVIMIENTO DEL CARRUSEL ======

  let posicion = 0;

  function moverCarrusel() {

    const tarjeta = tarjetas.querySelector(".tarjeta");

    if (!tarjeta) return;

    const ancho = tarjeta.offsetWidth;

    tarjetas.style.transform =
      `translateX(-${posicion * ancho}px)`;
  }

  botonSiguiente.addEventListener("click", () => {

    if (posicion < datos.length - 1) {
      posicion++;
      moverCarrusel();
    }

  });

  botonAnterior.addEventListener("click", () => {

    if (posicion > 0) {
      posicion--;
      moverCarrusel();
    }

  });

  window.addEventListener("resize", moverCarrusel);
}


// ====== CARGAR TODO ======

crearFormacion();

crearCarrusel("listaLogros", logros);

crearCarrusel("listaVoluntariado", voluntariado);

crearCarrusel("listaPortafolio", portafolio);


// ====== MENÚ RESPONSIVO ======

document.getElementById("menuToggle").addEventListener("click", () => {

  document
    .querySelector(".menu-links")
    .classList.toggle("abierto");

});



