 const productsData = [
	{
		id: 1,
		nombre: 'Descubriendo el Sur',
		precio: 450,
		duracion: 8,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación', 'Día 3: Montevideo, Uruguay', 'Día 4: Puerto Madryn, Argentina', 'Día 5: Ushuaia, Argentina', 'Día 6: Punta Arenas, Chile', 'Día 7: Puerto Montt, Chile', 'Día 8: Valparaíso, Chile'],
		backgroundImg: '/Assets/Img/id1.jpg',
		categoria: 'Sudamerica'
	},
	{
		id: 2,
		nombre: 'Aventura en la Patagonia',
		precio: 370,
		duracion: 8,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación', 'Día 3: Puerto Madryn, Argentina', 'Día 4: Ushuaia, Argentina', 'Día 5: Torres del Paine, Chile', 'Día 6: El Calafate, Argentina', 'Día 7: El Chaltén, Argentina', 'Día 8: Puerto Natales, Chile',]
		,backgroundImg: '/Assets/Img/id2.jpg',
		categoria: 'Sudamerica'
	},
	{
		id: 3,
		nombre: 'La Costa del Atlantico',
		precio: 560,
		duracion:8,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación', 'Día 3: Punta del Este, Uruguay', 'Día 4: Isla de Lobos, Uruguay', 'Día 5: Porto Belo, Brasil', 'Día 6: Ilhabela, Brasil', 'Día 7: Búzios, Brasil', 'Día 8: Río de Janeiro, Brasil'],
		backgroundImg: '/Assets/Img/id3.jpg',
		categoria: 'Sudamerica'
	},
	{
		id: 4,
		nombre: 'Aventura en Brasil',
		precio: 430,
		duracion: 8,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación', 'Día 3: Santos, Brasil', 'Día 4: Ilhéus, Brasil', 'Día 5: Salvador de Bahía, Brasil', 'Día 6: Recife, Brasil', 'Día 7: Natal, Brasil', 'Día 8: Fortaleza, Brasil'],
		backgroundImg: '/Assets/Img/id4.jpg',
		categoria: 'Sudamerica'
	},
	{
		id: 5,
		nombre: 'Descubriendo Colombia y Perú',
		precio: 620,
		duracion: 9,
		itinerario: ['Día 1: Buenos Aires, Argentina', 'Día 2: Navegación', 'Día 3: Cartagena de Indias, Colombia', 'Día 4: Santa Marta, Colombia', 'Día 5: Trujillo, Perú', 'Día 6: Lima, Perú', 'Día 7: Pisco, Perú', 'Día 8: Navegación', 'Día 9: Montevideo, Uruguay'],
		backgroundImg: '/Assets/Img/id5.jpg',
		categoria: 'Sudamerica'
	},
	{
		id: 6,
		nombre: 'Islas del Sur',
		precio: 615,
		duracion: 10,
		itinerario: ['Día 1: Buenos Aires, Argentina',  'Día 2: Navegación',  'Día 3: Puerto Madryn, Argentina',  'Día 4: Ushuaia, Argentina',  'Día 5: Cabo de Hornos, Chile',  'Día 6: Puerto Williams, Chile',  'Día 7: Punta Arenas, Chile',  'Día 8: Navegación',  'Día 9: Islas Malvinas',  'Día 10: Navegación'],
		backgroundImg: '/Assets/Img/id6.jpg',
		categoria: 'Sudamerica'
	},
	{
		id: 7,
		nombre: 'Escapada de Playa',
		precio: 200,
		duracion: 4,
		itinerario: ['Día 1: Buenos Aires, Argentina', 'Día 2: Montevideo, Uruguay', 'Día 3: Punta del Este, Uruguay', 'Día 4: Navegación'],
		backgroundImg: '/Assets/Img/id7.webp',
		categoria: 'Sudamerica'
	},
	{
		id: 8,
		nombre: 'Pack I',
		precio: 700,
		duracion: 10,
		itinerario: ['Día 1: Embarque en Buenos Aires', 'Día 2: Navegación', 'Día 3: Playa de San Bartolo, Perú', 'Día 4: Playa Mancora, Perú', 'Día 5: Playa de los Pescadores, Perú',  'Día 6: Playa Pichilemu, Chile',  'Día 7: Playa Reñaca, Chile','Día 8: Playa Grande, Argentina','Día 9: Playa La Paloma, Uruguay', 'Día 10: Punta del Este, Uruguay']
		,backgroundImg: '/Assets/Img/Bgd-Sudamerica.jpg',
		categoria: 'Sudamerica'
	},
	{
		id: 9,
		nombre: 'Pack II',
		precio: 750,
		duracion: 10,
		itinerario: ['Día 1: Buenos Aires, Argentina', 'Día 2: Navegación', 'Día 3: Rio de Janeiro, Brasil', 'Día 4: Salvador, Brasil', 'Día 5: Natal, Brasil', 'Día 6: Isla Margarita, Venezuela', 'Día 7: Willemstad, Curazao', 'Día 8: Paramaribo, Surinam', 'Día 9: Bridgetown, Barbados', 'Día 10: Navegación'],
		backgroundImg: '/Assets/Img/Bgd-Sudamerica.jpg',
		categoria: 'Sudamerica'
	},
	{
		id: 10,
		nombre: 'Pack III',
		precio: 800,
		duracion: 10,
		itinerario: ['Día 1: Embarque en Buenos Aires', 'Día 2: Navegación', 'Día 3: Playa Pocitos, Uruguay', 'Día 4: Playa Joaquina, Brasil', 'Día 5: Playa de los Ingleses, Brasil', 'Día 6: Playa Blanca, Colombia', 'Día 7: Playa Baía do Sancho, Brasil', 'Día 8: Punta Cana, República Dominicana', 'Día 9: Playa Varadero, Cuba', 'Día 10: La Habana, Cuba']
		,backgroundImg: '/Assets/Img/Bgd-Sudamerica.jpg',
		categoria: 'Sudamerica'
	},
	{
		id: 11,
		nombre: 'Tesoro del Caribe',
		precio: 1100,
		duracion: 10,
		itinerario: itinerario = ['Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Mar Caribe', 'Día 4: San Juan, Puerto Rico',  'Día 5: Charlotte Amalie, Islas Vírgenes de EE. UU.', 'Día 6: Philipsburg, St. Maarten', 'Día 7: George Town, Gran Caimán', 'Día 8: Ocho Ríos, Jamaica', 'Día 9: Cozumel, México', 'Día 10: Nassau, Bahamas'],
		backgroundImg: '/Assets/Img/id11.jpg',
		categoria: 'Caribe'
	},
	{
		id: 12,
		nombre: 'Travesía Tropical',
		precio: 1100,
		duracion: 10,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Mar Caribe', 'Día 4: Bridgetown, Barbados', 'Día 5: Castries, Santa Lucía', 'Día 6: St. Johns, Antigua y Barbuda', 'Día 7: Road Town, Islas Vírgenes Británicas', 'Día 8: Willemstad, Curazao', 'Día 9: Oranjestad, Aruba', 'Día 10: Cozumel, México'],
		backgroundImg: '/Assets/Img/id12.jpg',
		categoria: 'Caribe'
	},
	{
		id: 13,
		nombre: 'Aventuras Caribeñas',
		precio: 950,
		duracion: 8,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Mar Caribe', 'Día 4: Kralendijk, Bonaire', 'Día 5: Santo Domingo, República Dominicana', 'Día 6: Grand Turk, Islas Turcas y Caicos', 'Día 7: Half Moon Cay, Bahamas', 'Día 8: Nassau, Bahamas']
		,backgroundImg: '/Assets/Img/id13.jpg',
		categoria: 'Caribe'
	},
	{
		id: 14,
		nombre: 'Crucero del Sol',
		precio: 825,
		duracion: 7,
		itinerario: ['Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Mar Caribe', 'Día 4: Montego Bay, Jamaica', 'Día 5: Roatán, Honduras', 'Día 6: Ciudad de Belice, Belice', 'Día 7: George Town, Gran Caimán'], backgroundImg: '/Assets/Img/id14.jpg',
		categoria: 'Caribe'
	},
	{
		id: 15,
		nombre: 'Descubriendo el Caribe',
		precio: 890,
		duracion: 8,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Océano Atlántico', 'Día 4: Cozumel, México', 'Día 5: Playa del Carmen, México', 'Día 6: Montego Bay, Jamaica', 'Día 7: Castries, Santa Lucía',  'Día 8: Bridgetown, Barbados']
		,backgroundImg: '/Assets/Img/id15.webp',
		categoria: 'Caribe'
	},
	{
		id: 16,
		nombre: 'Caribe Tropical',
		precio: 1000,
		duracion: 10,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Océano Atlántico', 'Día 4: George Town, Islas Caimán', 'Día 5: Roatán, Honduras', 'Día 6: Costa Maya, México', 'Día 7: Belice, Belice', 'Día 8: Cozumel, México', 'Día 9: Freeport, Bahamas', 'Día 10: Nassau, Bahamas'],backgroundImg: '/Assets/Img/id16.jpg',
		categoria: 'Caribe'
	},
	{
		id: 17,
		nombre: 'El Caribe del Este',
		precio: 1050,
		duracion: 9,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Mar Caribe', 'Día 4: Philipsburg, San Martín', 'Día 5: Charlotte Amalie, Islas Vírgenes de EE. UU.', 'Día 6: Basseterre, San Cristóbal y Nieves', 'Día 7: La Romana, República Dominicana', 'Día 8: Ocho Ríos, Jamaica', 'Día 9: Montego Bay, Jamaica'],
		backgroundImg: '/Assets/Img/id17.jpg',
		categoria: 'Caribe'
	},
	{
		id: 18,
		nombre: 'Operacion Caribe',
		precio: 750,
		duracion: 6,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Mar Caribe', 'Día 4: St. Georges, Granada', 'Día 5: Fort de France, Martinica', 'Día 6: Basseterre, San Cristóbal y Nieves'],
		backgroundImg: '/Assets/Img/id18.jpg',
		categoria: 'Caribe'
	},
	{
		id: 19,
		nombre: 'Islas del Caribe',
		precio: 1015,
		duracion: 10,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Mar Caribe', 'Día 4: San Juan, Puerto Rico', 'Día 5: Charlotte Amalie, Islas Vírgenes de EE. UU.', 'Día 6: Philipsburg, San Martín', 'Día 7: Roseau, Dominica', 'Día 8: Bridgetown, Barbados', 'Día 9: St. Georges, Granada', 'Día 10: Kingstown, San Vicente y las Granadinas'],
		backgroundImg: '/Assets/Img/id19.jpg',
		categoria: 'Caribe'
	},
	{
		id: 20,
		nombre: 'Aventura en el Caribe',
		precio: 930,
		duracion: 7,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Bridgetown, Barbados', 'Día 4: Roseau, Dominica', 'Día 5: Pointe-à-Pitre, Guadalupe', 'Día 6: Philipsburg, Sint Maarten', 'Día 7: La Romana, República Dominicana', 'Día 8: Nassau, Bahamas'],
		backgroundImg: '/Assets/Img/id20.jpg',
		categoria: 'Caribe'
	},
	{
		id: 21,
		nombre: 'Costas del Sol',
		precio: 2200,
		duracion: 10,
		itinerario: itinerario = ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Europa', 'Día 3: Málaga, España', 'Día 4: Cádiz, España', 'Día 5: Gibraltar', 'Día 6: Almería, España', 'Día 7: Cartagena, España', 'Día 8: Ibiza, España', 'Día 9: Valencia, España', 'Día 10: Barcelona, España'],
		backgroundImg: '/Assets/Img/Costa-Sol.jpeg',
		categoria: 'Europa'
	},
	{
		id: 22,
		nombre: 'Grecia',
		precio: 2400,
		duracion: 10,
		itinerario: itinerario = ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Europa', 'Día 3: Nápoles, Italia', 'Día 4: Corfú, Grecia', 'Día 5: Atenas, Grecia', 'Día 6: Mykonos, Grecia', 'Día 7: Kusadasi, Turquía', 'Día 8: Rodas, Grecia', 'Día 9: Creta, Grecia', 'Día 10: Santorini, Grecia'],
		backgroundImg: '/Assets/Img/Grecia.webp',
		categoria: 'Europa'
	},
	{
		id: 23,
		nombre: 'Francia',
		precio: 1830,
		duracion: 6,
		itinerario: itinerario = ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Europa', 'Día 3: Marsella, Francia', 'Día 4: Niza, Francia', 'Día 5: Cannes, Francia', 'Día 6: Montecarlo, Mónaco'],
		backgroundImg: '/Assets/Img/Francia.jpg',
		categoria: 'Europa'
	},
	{
		id: 24,
		nombre: 'Croacia',
		precio: 1915,
		duracion: 7,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Croacia', 'Día 3: Dubrovnik', 'Día 4: Split', 'Día 5: Hvar', 'Día 6: Rovinj', 'Día 7: Zadar'],
		backgroundImg: '/Assets/Img/Croacia.jpg',
		categoria: 'Europa'
	},
	{
		id: 25,
		nombre: 'Noruega',
		precio: 1890,
		duracion: 7,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Noruega', 'Día 3: Bergen', 'Día 4: Molde', 'Día 5: Geiranger', 'Día 6: Ålesund', 'Día 7: Stavanger'],
		backgroundImg: '/Assets/Img/Noruega.webp',
		categoria: 'Europa'
	},
	{
		id: 26,
		nombre: 'Portugal',
		precio: 1970,
		duracion: 9,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Portugal' ,'Día 3: Lisboa', 'Día 4: Navegación', 'Día 5: Porto', 'Día 6: Albufeira', 'Día 7: Praia da Rocha', 'Día 8: Lagos', 'Día 9: Cascais'],
		backgroundImg: '/Assets/Img/Portugal.jpg',
		categoria: 'Europa'
	},
	{
		id: 27,
		nombre: 'Pack 1',
		precio: 3020,
		duracion: 8,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Europa', 'Día 3: Kotor, Montenegro', 'Día 4: Corfú, Grecia', 'Día 5: Mykonos, Grecia', 'Día 6: Santorini, Grecia', 'Día 7: Dubrovnik, Croacia', 'Día 8: Venecia, Italia'],
		backgroundImg: '/Assets/Img/Bgd-Europa.jpg',
		categoria: 'Europa'
	},
	{
		id: 28,
		nombre: 'Pack 2',
		precio: 3100,
		duracion: 10,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: navegación hacia Europa', 'Día 3: Alicante', 'Día 4: Valencia', 'Día 5: navegación', 'Día 6: Ibiza', 'Día 7: navegación', 'Día 8: La Spezia', 'Día 9: Génova', 'Día 10: Cannes'],
		backgroundImg: '/Assets/Img/Bgd-Europa.jpg',
		categoria: 'Europa'
	},
	{
		id: 29,
		nombre: 'Costa Brava',
		precio: 1460,
		duracion: 6,
		itinerario: ['Dia 1: Buenos Aires', 'Dia 2: Navegación hacia España', 'Dia 3: Valencia, España', 'Dia 4: Marsella, Francia', 'Dia 5: Barcelona, España', 'Dia 6: Tossa de Mar, España'],
		backgroundImg: '/Assets/Img/Costa-Brava.jpg',
		categoria: 'Europa'
	},
	{
		id: 30,
		nombre: 'Costa Azul',
		precio: 1525,
		duracion: 6,
		itinerario: ['Dia 1: Buenos Aires', 'Dia 2: Navegación a Europa', 'Dia 3: Mónaco', 'Dia 4: Saint-Tropez, Francia', 'Dia 5: Cannes, Francia', 'Dia 6: Niza, Francia'],
		backgroundImg: '/Assets/Img/Costa-Azul.jpg',
		categoria: 'Europa'
	},

	
];

const splitProducts = (size) => {
	let dividedProducts = [];

	for (let i = 0; i < productsData.length; i += size) {
		dividedProducts.push(productsData.slice(i, i + size));
	}
	return dividedProducts;
};

const productsController = {
	dividedProducts: splitProducts(3),
	nextProductsIndex: 1,
	productsLimit: splitProducts(3).length,
};
