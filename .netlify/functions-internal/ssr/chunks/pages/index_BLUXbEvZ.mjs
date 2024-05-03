/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_IfUAp_ts.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$c = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav class="menu-header"> <a href="/" class="site-title"> <img class="rounded-full w-12 h-12" src="src/img/flower_icon_134982.ico" alt="Julieta Alcaraz foto" style="filter: brightness(0) invert(1)">Julieta Alcaraz
</a> <nav class="menu-item"> <a href="/#Perfil"> Sobre mi</a> <a href="/#Estudios"> Estudios </a> <a href="/#Proyectos"> Proyectos </a> <a href="/#Experiencia">Experiencia</a> <a href="/#Contacto"> Contacto</a> </nav> </nav>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/components/Header.astro", void 0);

const title = "¡Hola! Mi nombre es";
const saludo = "¡Hola! Soy ";
const name = "Julieta Alcaraz Aballay";
const oracion = "«Comienza por hacer lo necesario, luego haz lo que es posible y de pronto estarás haciendo lo imposible.»";
const bio = "Licenciada en Producción de Bioimágenes de 26 años de edad nacida en La Rioja, Argentina.\nDesde siempre, mi fascinación por la naturaleza, el estudio y el crecimiento personal han sido una constante en mi vida.\n Ahora, incursionando en el mundo de la programación, comprometida con el aprendizaje continuo y estoy lista para mis próximos desafíos con una mente abierta y receptiva.";
const technologies = [
	{
		name: "Astro",
		file: "astro.png"
	},
	{
		name: "CSS",
		file: "css.png"
	},
	{
		name: "HTML",
		file: "html.png"
	},
	{
		name: "JavaScript",
		file: "js.png"
	},
	{
		name: "MongoDB",
		file: "mongo.png"
	},
	{
		name: "MySQL",
		file: "mysql.png"
	},
	{
		name: "NodeJS",
		file: "node.png"
	},
	{
		name: "PHP",
		file: "php.png"
	},
	{
		name: "React",
		file: "react.png"
	},
	{
		name: "Material",
		file: "material.png"
	},
	{
		name: "TailwindCSS",
		file: "tailwind.png"
	}
];
const linkedin = "https://www.linkedin.com/in/jul1alcaraz/";
const availability = "Disponible para trabajar";
const profilePhoto = "1.png";
const title_proyectos = "Proyectos";
const title_contacto = "Contáctame";
const title_estudios = "ESTUDIOS";
const studies = [
	{
		date: "Diciembre 2023",
		title: "Full-Stack Junior",
		institution: "Innovare training - Universidad Tecnológica Nacional, Facultad Regional Reconquista",
		scope: "Desarrollo web full stack con MERN siguiendo SCRUM como metodología ágil. Utilizando las últimas técnologías de desarrollo y diseño para construir un sitio web de eCommerce como trabajo final.",
		img: "innovare.png",
		link: "https://medium.com/@marceloagustini/curso-full-stack-junior-f1f205fa8ffb"
	},
	{
		date: "Julio 2023",
		title: "Programador Web",
		institution: "Centro de e-Learning de la Universidad Tecnológica Nacional, Facultad Regional Buenos Aires",
		scope: "Desarrollo de páginas web estableciendo principios sólidos de desarrollo en HTML, CSS, Javascript y PHP. Independizando el entorno de desarrollo y utilizando bases de datos relacionales y escalables.",
		img: "utn.png",
		link: "https://sceu.frba.utn.edu.ar/e-learning/?_gl=1*1eb149j*_gcl_au*MTQzNjg4NTYxLjE3MTI5ODg3NzA.*_ga*MTI1MDc5MTYxLjE2OTY0NDc3Nzg.*_ga_SWYYXNHY2W*MTcxMzY4MTIzOS4zLjAuMTcxMzY4MTIzOS42MC4wLjA."
	},
	{
		date: "Diciembre 2023",
		title: "Lectura Comprensiva en Inglés para Posgrados",
		institution: "Escuela Superior de Lenguas, Universidad Nacional de La Rioja",
		scope: "Incorporar como herramienta el análisis crítico de téxtos en lengua inglesa, permitiendo la comunicación por escrito en este lenguaje.",
		img: "ingles.jpg",
		link: "https://www.instagram.com/escuelasuperiordelenguasunlar?igsh=M3ZqMm13aHlydDF3"
	},
	{
		date: "Julio 2022",
		title: "Licenciatura en Producción de Bioimágenes",
		institution: "Universidad Nacional de La Rioja",
		scope: "Manejo de radiaciones ionizantes con fines de diagnóstico médico.",
		img: "unlar_logo.png",
		link: "https://www.unlar.edu.ar/index.php/oferta-academica/carreras-de-grado/281-lic-en-produccion-de-bioimagenes"
	}
];
const title_experiencia = "Experiencia Laboral";
const experiences = [
	{
		duration: "2024 - 2020",
		institution: "Division de Sanidad Policial",
		position: "Licenciada en Producción de Bioimágenes"
	},
	{
		duration: "2024 - 2022",
		institution: "Colegio Provincial \"Alberto Breyer\"",
		position: "Docente"
	},
	{
		duration: "2023 - 2018",
		institution: "Centro Educativo Franciscano (C.E.F.) \"San Francisco de Asís\"",
		position: "Preceptora y docente de nivel Inicial, Primario y Secundario"
	}
];
const footer = "© 2024 Diseñado y programado en Astro con ❤ por Julieta";
const content = {
	title: title,
	saludo: saludo,
	name: name,
	oracion: oracion,
	bio: bio,
	technologies: technologies,
	linkedin: linkedin,
	availability: availability,
	profilePhoto: profilePhoto,
	title_proyectos: title_proyectos,
	title_contacto: title_contacto,
	title_estudios: title_estudios,
	studies: studies,
	title_experiencia: title_experiencia,
	experiences: experiences,
	footer: footer
};

const $$Astro$b = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="pie"> <div> <div> <span> ${content.footer} </span> </div> </div> </footer>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/components/Footer.astro", void 0);

const $$Astro$a = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" type="text/css" href="global.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$8 = createAstro();
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4x4 md:max-w-2x2`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/components/SectionContainer.astro", void 0);

const $$Astro$7 = createAstro();
const $$Perfil = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Perfil;
  return renderTemplate`${maybeRenderHead()}<div class="fondo-perfil"> <div class="columna flex flex-col"> <div class="waviy pl-11"> <span style="--i:1">¿</span> <span style="--i:2">Q</span> <span style="--i:3">U</span> <span style="--i:4">I</span> <span style="--i:5">É</span> <span style="--i:6">N</span> <span style="--i:7"></span> <span style="--i:8">S</span> <span style="--i:9">O</span> <span style="--i:10">Y</span> <span style="--i:10">?</span> </div> <h2 class="about"> ${content.bio} </h2> </div> </div>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/components/Perfil.astro", void 0);

const $$Astro$6 = createAstro();
const $$Estudios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Estudios;
  return renderTemplate`${maybeRenderHead()}<div class="fondo-estudios"> <h2 class="subTitulo">${content.title_estudios}</h2> <div class="grid grid-cols-2 p-5 gap-3 hover1"> ${content.studies.map((study) => renderTemplate`<div class="p-3 m-2 rounded-lg bg-white"> <time class="desa text-lg font-semibold text-gray-900 dark:text-white"> ${study.date} </time> <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700"> <li> <a${addAttribute(study.link, "href")} class="items-center block p-3 sm:flex"> <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"${addAttribute("src/img/" + study.img, "src")} alt="Image placeholder"> <div class="text-gray-600 dark:text-gray-400"> <div class="text-base font-normal"> <span class="encabezado font-medium text-gray-900 dark:text-white"> ${study.title} </span>${" "}
en
<span class="encabezado font-medium text-gray-900 dark:text-white"> ${study.institution} </span> </div> <div class="text-sm font-normal"> <span class="encabezado font-medium text-gray-900 dark:text-white"> <br>
Alcance:
</span>${" "} ${study.scope} </div> </div> </a> </li> </ol> </div>`)} </div> </div>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/components/Estudios.astro", void 0);

const $$Astro$5 = createAstro();
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Proyectos;
  return renderTemplate`${maybeRenderHead()}<div class="fondo-proyectos relative "> <div class="container-titulo-proyecto lg:pt-40"> <h1 class="waviy verde-general text-4xl font-bold sm:text-6xl">
MIS <br>
PROYECTOS
</h1> </div> <div class="absolute  lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"> <div class="h-screen lg:gap-y-8"> <div class="flex justify-center image-container"> <figure class="grayscale hover:grayscale-0"> <a href="https://puma-store-ten.vercel.app/"> <img src="src/img/logo-puma.jpg" alt="Puma Oulet" class="h-full w-full object-center duration-300 cursor-pointer filter grayscale hover:grayscale-0"> </a> <figcaption class="encabezado absolute px-4 text-lg text-white bottom-6 right-6"> <p class="hover-text2">Diseño Web Ecommerce.</p> <p class="hover-text">
Desarrollado con React + NodeJS + MongoDB + Material
</p> </figcaption> </figure> </div> <div class="flex justify-center image-container"> <figure class="grayscale hover:grayscale-0"> <a href="https://harmed-roars.000webhostapp.com/index.php"> <img src="src/img/ra.logo.png" alt="Rescate Animal" class="h-full w-full object-center duration-300 cursor-pointer filter grayscale hover:grayscale-0"> </a> <figcaption class="encabezado absolute px-4 text-lg text-black top-6"> <p class="hover-text2">Página web de concientización animal.</p> <p class="hover-text">
Desarrollado con HTML + CSS + JS + PHP + MySQL
</p> </figcaption> </figure> </div> </div> </div> </div>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/components/Proyectos.astro", void 0);

const $$Astro$4 = createAstro();
const $$Experiencia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Experiencia;
  return renderTemplate`${maybeRenderHead()}<h2 class="subTitulo">${content.title_experiencia}</h2> <div class="flex justify-center mt-5 mb-5 experience"> <ol class="relative border-s"> ${content.experiences.map((experience) => renderTemplate`<li class="mb-10 ms-4"> <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div> <time class="desa mb-1 font-normal leading-none text-white dark:text-gray-500">${experience.duration}</time> <h3 class="font-bold text-2xl text-gray-900 bg-white border">${experience.institution}</h3> <p class="encabezado mb-4 text-3xl text-white dark:text-white">${experience.position}</p> </li>`)} </ol> </div>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/components/Experiencia.astro", void 0);

const $$Astro$3 = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${maybeRenderHead()}<div class="fondo-contacto"> <h2 class="subTituloC">${content.title_contacto}</h2> <div class="flex flex-wrap justify-center gap-36"> <div class="max-w-60 imgContacto"> <div class="flex flex-col items-center pb-5 bg-white rounded-t-full"> <a href="https://github.com/jul1alcaraz"> <img class="CardConta" src="src/img/git.png"> </a> <h5 class="mb-1 text-xl font-medium text-gray-900">GitHub</h5> <span class="text-sm text-gray-500">/jul1alcaraz</span> </div> </div> <div class="max-w-60 imgContacto"> <div class="flex flex-col items-center pb-5 bg-white rounded-t-full"> <a href="https://www.linkedin.com/in/jul1alcaraz/"> <img class="CardConta" src="src/img/In.png"> </a> <h5 class="mb-1 text-xl font-medium text-gray-900">LinkedIn</h5> <span class="text-sm text-gray-500">/jul1alcaraz</span> </div> </div> <div class="max-w-60 imgContacto"> <div class="flex flex-col items-center pb-5 bg-white rounded-t-full"> <a href="mailto:Lic.alcarazaballay2022@gmail.com"> <img class="CardConta" src="src/img/gmail.png"> </a> <h5 class="mb-1 text-xl font-medium text-gray-900">Gmail</h5> <span class="text-sm text-gray-500">lic.alcarazaballay2022@gmail.com</span> </div> </div> </div> </div>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/components/Contacto.astro", void 0);

const $$Astro$2 = createAstro();
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<div class="badge-1"> <span class="text-2xl font-medium  px-2.5 py-1.5 rounded"> ${renderSlot($$result, $$slots["default"])} </span> </div>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/components/Badge.astro", void 0);

const $$Astro$1 = createAstro();
const $$Bienvenida = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Bienvenida;
  return renderTemplate`${maybeRenderHead()}<div class="fondo-comun wrapper"> <div class="contenedorImg"> <img class="profilePhoto"${addAttribute("src/img/" + content.profilePhoto, "src")}> </div> <div class="flex-item"> <h1 class="saludo font-mono"> <span>${content.saludo}</span> </h1> <div class="contenedor-centrado"> <div class="titulo">Julieta Alcaraz Aballay</div> </div> <!--technologies... --> <div class="flex space-x-2 m-10 contenedor-centrado"> ${content.technologies.map((technology) => renderTemplate`<div class="tooltip"> <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white"${addAttribute("src/img/" + technology.file, "src")} alt=""> <span class="tooltiptext">${technology.name}</span> </div>`)} </div> <div> <a${addAttribute(content.linkedin, "href")}> ${renderComponent($$result, "Badge", $$Badge, { "class": "encabezado contenedor-centrado" }, { "default": ($$result2) => renderTemplate` <button> Disponible para trabajar </button> ` })} </a> </div> </div> </div>`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/components/Bienvenida.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Julieta Alcaraz" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Bienvenida" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Bienvenida", $$Bienvenida, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Perfil" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Perfil", $$Perfil, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Estudios" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Estudios", $$Estudios, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Proyectos" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Proyectos", $$Proyectos, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Experiencia" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Experiencia", $$Experiencia, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Contacto" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Contacto", $$Contacto, {})} ` })} </main> ` })}`;
}, "C:/Users/julia/Documents/programacion/Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/julia/Documents/programacion/Portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
