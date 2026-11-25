export interface NavLink {
	label: string;
	href: string;
}

export interface Area {
	id: string;
	title: string;
	description: string;
	icon: string;
	image: string;
}

export interface Project {
	slug: string;
	category: string;
	title: string;
	year: string;
	description: string;
	cover: string;
	gallery: string[];
}

export const site = {
	name: 'Servicios Múltiples del Noroeste',
	email: 'ventas@servimulti.com',
	whatsapp: 'https://wa.me/0000000000',
	logoPrimary: '/assets/images/logo-primary.svg',
	logoWhite: '/assets/images/logo-white.svg',
};

export const navLinks: NavLink[] = [
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'Portafolio', href: '#portafolio' },
	{ label: 'Dudas', href: '#dudas' },
	{ label: 'Equipo', href: '#equipo' },
];

export const hero = {
	title: 'Diseño, supervisión y construcción con',
	titleAccent: 'Excelencia',
	subtitle:
		'Transformamos espacios con visión, detalle estético y compromiso total',
	image: '/assets/images/hero/hero-1.jpg',
};

export const about = {
	eyebrow: 'Nosotros',
	lead: 'Comprometidos con la calidad y la funcionalidad de tus espacios, trabajamos para ofrecer soluciones integrales adaptadas a cada necesidad',
	body: 'Nuestro propósito es brindar una experiencia de alta calidad a nuestros clientes, a través de proyectos de remodelación, reparación y análisis técnico en instalaciones industriales, oficinas, y viviendas',
	image: '/assets/images/nosotros/nosotros-1.jpg',
};

export const specialties = {
	eyebrow: 'Servicios',
	title: 'Áreas de especialización',
	items: [
		{
			id: 'industrial',
			title: 'Industrial',
			description:
				'Construcción, mantenimiento y adecuación de instalaciones industriales, con soluciones enfocadas en seguridad, eficiencia y continuidad operativa',
			icon: '/assets/icons/area-industrial.svg',
			image: '/assets/images/areas/industrial.png',
		},
		{
			id: 'empresarial',
			title: 'Empresarial',
			description:
				'Diseño, construcción y adecuación de oficinas y espacios empresariales, integrando funcionalidad, imagen y las necesidades operativas de cada empresa',
			icon: '/assets/icons/area-empresarial.svg',
			image: '/assets/images/areas/empresarial.jpg',
		},
		{
			id: 'residencial',
			title: 'Residencial',
			description:
				'Diseño, construcción, remodelación y ampliación de espacios habitacionales, creando soluciones funcionales y adaptadas a cada estilo de vida',
			icon: '/assets/icons/area-residencial.svg',
			image: '/assets/images/areas/residencial.jpg',
		},
		{
			id: 'gubernamental',
			title: 'Gubernamental',
			description:
				'Construcción, remodelación, mantenimiento y adecuación de espacios para el sector público, atendiendo los requerimientos técnicos y normativos de cada proyecto',
			icon: '/assets/icons/area-gubernamental.svg',
			image: '/assets/images/areas/gubernamental.jpg',
		},
		{
			id: 'diseno-planos-tramites',
			title: 'Diseño, planos y trámites',
			description:
				'Desarrollo de proyectos arquitectónicos, planos y documentación técnica, así como gestión y acompañamiento en los trámites necesarios para cada proyecto',
			icon: '/assets/icons/area-diseno-planos-tramites.svg',
			image: '/assets/images/areas/diseno-planos-tramites.jpg',
		},
	] as Area[],
};

export const portfolio = {
	eyebrow: 'Portafolio',
	title: 'Obras y proyectos',
	lead: 'Contamos con la experiencia y el conocimiento para desarrollar proyectos de diferentes escalas y sectores, siempre con un enfoque en cumplimiento, funcionalidad y excelencia',
	items: [
		{
			slug: 'remodelacion-laboratorio-quimico',
			category: 'Gubernamental',
			title: 'Remodelación de laboratorio químico',
			year: '2024',
			description:
				'Diseño, construcción y adecuación de oficinas y espacios empresariales, integrando funcionalidad, imagen y las necesidades operativas de cada empresa',
			cover: '/assets/images/portafolio/remodelacion-laboratorio-quimico/1.jpg',
			gallery: [
				'/assets/images/portafolio/remodelacion-laboratorio-quimico/1.jpg',
				'/assets/images/portafolio/remodelacion-laboratorio-quimico/2.jpg',
				'/assets/images/portafolio/remodelacion-laboratorio-quimico/3.jpg',
				'/assets/images/portafolio/remodelacion-laboratorio-quimico/4.jpg',
			],
		},
		{
			slug: 'casa-cantera',
			category: 'Gubernamental',
			title: 'Casa cantera',
			year: '2023',
			description:
				'Construcción, remodelación y ampliación de espacios habitacionales, creando soluciones funcionales y adaptadas a cada estilo de vida',
			cover: '/assets/images/portafolio/casa-cantera/1.jpg',
			gallery: [
				'/assets/images/portafolio/casa-cantera/1.jpg',
				'/assets/images/portafolio/casa-cantera/2.jpg',
				'/assets/images/portafolio/casa-cantera/3.jpg',
				'/assets/images/portafolio/casa-cantera/4.jpg',
			],
		},
		{
			slug: 'oficinas-pjbc',
			category: 'Gubernamental',
			title: 'Oficinas PJBC',
			year: '2023',
			description:
				'Construcción, mantenimiento y adecuación de instalaciones industriales, con soluciones enfocadas en seguridad, eficiencia y continuidad operativa',
			cover: '/assets/images/portafolio/oficinas-pjbc/1.jpg',
			gallery: [
				'/assets/images/portafolio/oficinas-pjbc/1.jpg',
				'/assets/images/portafolio/oficinas-pjbc/2.jpg',
				'/assets/images/portafolio/oficinas-pjbc/3.jpg',
				'/assets/images/portafolio/oficinas-pjbc/4.jpg',
			],
		},
	] as Project[],
};

export const team = {
	eyebrow: 'Equipo',
	title: 'Profesionales, siempre',
	body: 'Nuestro equipo cuenta con una excelente capacitación, además de un gran compromiso para ejecutar cada proyecto con precisión y calidad. Trabajamos con profesionalismo, responsabilidad y atención al detalle para garantizar un resultado impecable',
	image: '/assets/images/equipo/equipo-1.jpg',
	stats: [
		{
			value: '40',
			sign: '+',
			label: 'Clientes',
			caption: 'Satisfechos a lo largo de nuestra trayectoria',
			dark: true,
		},
		{
			value: '7',
			sign: '+',
			label: 'Años',
			caption: 'De experiencia en el mercado',
			dark: false,
		},
		{
			value: '50',
			sign: '+',
			label: 'Proyectos',
			caption: 'Realizados con éxito',
			dark: false,
		},
	],
};

export const faq = {
	eyebrow: 'Dudas',
	title: 'Preguntas frecuentes',
	lead: 'Resolvemos tus dudas para que puedas desarrollar tu próximo proyecto con claridad, confianza y el respaldo de un equipo profesional.',
	items: [
		{
			question: '¿Qué servicios ofrecen?',
			answer:
				'Ofrecemos servicios de construcción, remodelación, mantenimiento y adecuación de espacios en los sectores industrial, empresarial, residencial, y gubernamental. También desarrollamos proyectos arquitectónicos, planos, y gestionamos trámites relacionados a la construcción',
		},
		{
			question: '¿Cómo puedo solicitar una cotización?',
			answer: 'Puedes contactarnos vía email o WhatsApp',
		},
		{
			question: '¿Cuánto tiempo tarda en realizarse un proyecto?',
			answer:
				'El tiempo de realización de un proyecto, desde su inicio a su fin, depende mayormente de las condiciones del inmueble y del alcance de los trabajos solicitados. nuestro equipo prepara un cronograma detallado antes de iniciar.',
		},
		{
			question: '¿Qué información necesito para solicitar un servicio?',
			answer:
				'Es recomendable contar con una descripción de los trabajos requeridos, la ubicación y, de ser posible, planos o fotografías del espacio a intervenir, para poder preparar una propuesta precisa.',
		},
		{
			question: '¿Qué sucede si necesito un servicio que no aparece en la página?',
			answer:
				'Si necesitas un trabajo relacionado con la construcción, remodelación, mantenimiento o adecuación, contáctanos: evaluamos tu caso y te proponemos una solución a medida.',
		},
	],
};

export const clients = [
	{ name: 'PepsiCo', logo: '/assets/images/logos/pepsico.svg' },
	{ name: 'Poder Judicial de Baja California', logo: '/assets/images/logos/poder-judicial.svg' },
	{ name: 'Gulfstream', logo: '/assets/images/logos/gulfstream.svg' },
	{
		name: 'Edificaciones Ecológicas',
		logo: '/assets/images/logos/edificaciones-ecologicas.svg',
	},
	{ name: 'Fonesa', logo: '/assets/images/logos/fonesa.svg' },
	{ name: 'Silzin', logo: '/assets/images/logos/silzin.svg' },
];

export const footer = {
	ctaLabel: 'Contáctanos',
	email: site.email,
	tagline: 'Construyamos juntos tu próximo proyecto',
	nav: navLinks,
	legal: 'Servicios múltiples del noroeste ® 2026',
};
