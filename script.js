// Base de datos de contenido SIXFILMS
const contentDatabase = {
    // PELÍCULAS
    saw: {
        title: "SAW",
        year: "2004",
        genre: "Terror/Thriller",
        duration: "103 min",
        director: "James Wan",
        cast: "Cary Elwes, Danny Glover, Monica Potter",
        rating: "7.6",
        synopsis: "Dos hombres despiertan encadenados en un baño abandonado, sin recordar cómo llegaron ahí. Uno tiene una sierra, el otro una pistola, y entre ellos yace un cadáver. Pronto descubren que son peones en el juego retorcido de un asesino en serie conocido como Jigsaw."
    },
    mega2: {
        title: "Mega 2.0",
        year: "2023",
        genre: "Acción/Ciencia Ficción",
        duration: "116 min",
        director: "Ben Wheatley",
        cast: "Jason Statham, Wu Jing, Sophia Cai",
        rating: "5.1",
        synopsis: "Jonas Taylor y su equipo de investigación se enfrentan a múltiples megalodones y otras criaturas prehistóricas en una expedición de alto riesgo en las profundidades del océano."
    },
    readyplayer: {
        title: "Ready Player One",
        year: "2018",
        genre: "Ciencia Ficción/Aventura",
        duration: "140 min",
        director: "Steven Spielberg",
        cast: "Tye Sheridan, Olivia Cooke, Ben Mendelsohn",
        rating: "7.4",
        synopsis: "En el año 2045, Wade Watts escapa de su realidad distópica sumergiéndose en OASIS, un universo virtual donde la mayoría de la humanidad pasa su tiempo. Cuando el creador de OASIS muere, deja su fortuna como premio en una búsqueda del tesoro épica."
    },
    aves: {
        title: "Aves de Presa",
        year: "2020",
        genre: "Acción/Aventura",
        duration: "109 min",
        director: "Cathy Yan",
        cast: "Margot Robbie, Mary Elizabeth Winstead, Jurnee Smollett",
        rating: "6.1",
        synopsis: "Después de separarse del Joker, Harley Quinn se une a las heroínas Canario Negro, Cazadora y Renee Montoya para salvar a una niña del malvado señor del crimen Máscara Negra."
    },
    spiderman: {
        title: "Spider-Man: Miles morales",
        year: "2021",
        genre: "Acción/Aventura",
        duration: "148 min",
        director: "Jon Watts",
        cast: "Tom Holland, Zendaya, Benedict Cumberbatch",
        rating: "8.2",
        synopsis: "Peter Parker busca la ayuda del Doctor Strange para hacer que el mundo olvide que él es Spider-Man. Cuando el hechizo sale mal, villanos peligrosos de otros universos comienzan a aparecer, forzando a Peter a descubrir lo que realmente significa ser Spider-Man."
    },
    // SERIES
    squidgame: {
        title: "El Juego del Calamar",
        year: "2021",
        genre: "Drama/Thriller",
        duration: "9 episodios",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-joon",
        rating: "8.0",
        synopsis: "Cientos de jugadores endeudados aceptan una extraña invitación para competir en juegos infantiles. Lo que está en juego: un premio de 45.600 millones de wones. Lo que arriesgan: sus vidas."
    },
    wednesday: {
        title: "Merlina",
        year: "2022",
        genre: "Comedia/Misterio",
        duration: "8 episodios",
        director: "James Lovato, Tim Burton",
        cast: "Jenna Ortega, Catherine Zeta-Jones, Luis Guzmán",
        rating: "8.1",
        synopsis: "La inteligente, sarcástica y un poco muerta Merlina Addams investiga una ola de asesinatos que aterrorizó a sus padres hace décadas, al tiempo que intenta dominar sus nuevas habilidades psíquicas en la Academia Nevermore."
    },
    bigbang: {
        title: "The Big Bang Theory",
        year: "2007-2019",
        genre: "Comedia/Sitcom",
        duration: "12 temporadas",
        director: "Chuck Lorre, Bill Prady",
        cast: "Jim Parsons, Johnny Galecki, Kaley Cuoco",
        rating: "8.1",
        synopsis: "La vida de dos físicos nerds se complica cuando una atractiva aspirante a actriz se muda al apartamento de enfrente. La serie sigue las aventuras de este grupo de amigos científicos mientras navegan por el amor, la amistad y la cultura pop."
    },
    brokegirls: {
        title: "Dos Chicas Quebradas",
        year: "2011-2017",
        genre: "Comedia/Sitcom",
        duration: "6 temporadas",
        director: "Whitney Cummings, Michael Patrick King",
        cast: "Kat Dennings, Beth Behrs, Garrett Morris",
        rating: "6.7",
        synopsis: "Max, una mesera sarcástica de clase trabajadora, y Caroline, una rica heredera que lo perdió todo, trabajan juntas en una cafetería de Brooklyn mientras intentan reunir dinero para iniciar su negocio de cupcakes."
    },
    stranger: {
        title: "Stranger Things",
        year: "2016-2025",
        genre: "Ciencia Ficción/Horror",
        duration: "5 temporadas",
        director: "Los Hermanos Duffer",
        cast: "Millie Bobby Brown, Finn Wolfhard, David Harbour",
        rating: "8.7",
        synopsis: "En la pequeña ciudad de Hawkins, Indiana, un grupo de niños se enfrenta a fuerzas sobrenaturales y experimentos gubernamentales secretos cuando su amigo desaparece misteriosamente en el 'Mundo del Revés'."
    },
    // ANIME
    myhero: {
        title: "Boku no Hero Academia",
        year: "2016-2023",
        genre: "Acción/Superhéroes",
        duration: "7 temporadas",
        director: "Kenji Nagasaki",
        cast: "Daiki Yamashita, Nobuhiko Okamoto, Ayane Sakura",
        rating: "8.5",
        synopsis: "En un mundo donde el 80% de la población tiene superpoderes llamados 'Quirks', Izuku Midoriya sueña con convertirse en un héroe a pesar de nacer sin poderes. Su vida cambia cuando conoce al héroe número uno, All Might."
    },
    cyberpunk: {
        title: "Cyberpunk: Edgerunners",
        year: "2022",
        genre: "Acción/Cyberpunk",
        duration: "10 episodios",
        director: "Hiroyuki Imaishi",
        cast: "Kenn, Aoi Yuki, Hiroki Touchi",
        rating: "8.3",
        synopsis: "En Night City, un marginado llamado David intenta sobrevivir en una ciudad del futuro obsesionada con la tecnología y la modificación corporal. Después de perder todo, decide convertirse en un mercenario fuera de la ley conocido como edgerunner."
    },
    demonslayer: {
        title: "Demon Slayer",
        year: "2019-2023",
        genre: "Acción/Sobrenatural",
        duration: "4 temporadas",
        director: "Haruo Sotozaki",
        cast: "Natsuki Hanae, Satomi Sato, Hiro Shimono",
        rating: "8.7",
        synopsis: "Después de que su familia es masacrada por demonios y su hermana Nezuko se convierte en demonio, Tanjiro Kamado se embarca en una peligrosa misión para encontrar una cura para su hermana y vengar a su familia."
    },
    onepunch: {
        title: "One Punch Man",
        year: "2015-2019",
        genre: "Acción/Comedia",
        duration: "2 temporadas",
        director: "Shingo Natsume",
        cast: "Makoto Furukawa, Yuki Kaji, Yūko Hikasa",
        rating: "8.8",
        synopsis: "Saitama es un superhéroe que puede derrotar a cualquier enemigo con un solo golpe, pero lucha contra el aburrimiento que viene con ser tan poderoso. Se une a la Asociación de Héroes para encontrar oponentes dignos."
    },
    onepiece: {
        title: "One Piece Film: Red",
        year: "2022",
        genre: "Aventura/Musical",
        duration: "115 min",
        director: "Goro Taniguchi",
        cast: "Mayumi Tanaka, Akemi Okamura, Kazuya Nakai",
        rating: "7.2",
        synopsis: "Uta, la cantante más querida del mundo, revela su identidad al público por primera vez en un concierto en vivo. La voz que toda la humanidad ha estado esperando está a punto de resonar por todo el mundo."
    },
    // ADULT-SWIT
    circus: {
        title: "The Amazing Digital Circus",
        year: "2023",
        genre: "Comedia/Horror",
        duration: "Serie web",
        director: "Gooseworx",
        cast: "Lizzie Freeman, Michael Kovach, Amanda Hufford",
        rating: "8.9",
        synopsis: "Pomni se encuentra atrapada en The Amazing Digital Circus, un juego de computadora dirigido por una inteligencia artificial excéntrica llamada Caine. Junto a otros humanos atrapados, debe participar en aventuras surrealistas mientras busca una salida."
    },
    panty: {
        title: "Panty & Stocking with Garterbelt",
        year: "2021-2022",
        genre: "Comedia/Acción",
        duration: "2 temporadas",
        director: "Hiroyuki Imaishi",
        cast: "Arisa Komiya, Mariya Ise, Koichi Yamadera",
        rating: "7.1",
        synopsis: "Dos hermanas ángeles rebeldes son expulsadas del cielo y deben ganar monedas celestiales matando demonios en Daten City para regresar. Pero prefieren fiestas, sexo y dulces antes que sus deberes angelicales."
    },
    rickmorty: {
        title: "Rick and Morty",
        year: "2013-presente",
        genre: "Comedia/Ciencia Ficción",
        duration: "7+ temporadas",
        director: "Dan Harmon, Justin Roiland",
        cast: "Justin Roiland, Chris Parnell, Spencer Grammer",
        rating: "9.1",
        synopsis: "Las aventuras interdimensionales de Rick Sanchez, un científico alcohólico y genio, y su nieto Morty Smith, un adolescente nervioso y fácilmente influenciable, mientras viajan por el multiverso."
    },
    harley: {
        title: "Harley Quinn",
        year: "2019-2023",
        genre: "Comedia/Acción",
        duration: "4 temporadas",
        director: "Patrick Schumacker, Justin Halpern",
        cast: "Kaley Cuoco, Lake Bell, Alan Tudyk",
        rating: "8.5",
        synopsis: "Después de romper con el Joker, Harley Quinn se embarca en aventuras épicas con su mejor amiga Poison Ivy y su pandilla de inadaptados, mientras intenta convertirse en la nueva reina del crimen de Gotham."
    },
    casadibujos: {
        title: "La Casa de los Dibujos",
        year: "2006-2015",
        genre: "Comedia/Sátira",
        duration: "9 temporadas",
        director: "Álvaro Sáenz de Heredia",
        cast: "Claudio Rodríguez, Marta Barbarà, Juan Carlos Gustems",
        rating: "7.8",
        synopsis: "Una parodia animada española que satiriza programas de telerrealidad, donde personajes de dibujos animados conviven en una casa llena de situaciones absurdas, humor negro y referencias a la cultura popular."
    }
};

// CLASE CARRUSEL INFINITO
class InfiniteCarousel {
    constructor(sectionName, track) {
        this.sectionName = sectionName;
        this.track = track;
        this.currentIndex = 0;
        this.visibleImages = 3;
        this.isTransitioning = false;
        this.autoMove = true;
        this.originalItems = [];
        this.itemWidth = 220;
        
        this.init();
    }
    
    init() {
        this.originalItems = Array.from(this.track.children);
        this.totalImages = this.originalItems.length;
        
        if (this.totalImages === 0) return;
        
        this.createClones();
        this.currentIndex = this.totalImages;
        this.updatePosition(false);
        this.setupAutoMove();
    }
    
    createClones() {
        this.track.innerHTML = '';
        
        for (let i = this.totalImages - 1; i >= 0; i--) {
            const clone = this.originalItems[i].cloneNode(true);
            clone.classList.add('clone-start');
            this.track.appendChild(clone);
        }
        
        this.originalItems.forEach(item => {
            this.track.appendChild(item);
        });
        
        this.originalItems.forEach(item => {
            const clone = item.cloneNode(true);
            clone.classList.add('clone-end');
            this.track.appendChild(clone);
        });
    }
    
    updatePosition(animate = true) {
        if (animate) {
            this.track.style.transition = 'transform 0.5s ease';
        } else {
            this.track.style.transition = 'none';
        }
        
        const translateX = -this.currentIndex * this.itemWidth;
        this.track.style.transform = `translateX(${translateX}px)`;
    }
    
    move(direction) {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        if (direction === 'next') {
            this.currentIndex++;
        } else {
            this.currentIndex--;
        }
        
        this.updatePosition(true);
        
        setTimeout(() => {
            this.handleInfiniteLoop();
            this.isTransitioning = false;
        }, 500);
    }
    
    handleInfiniteLoop() {
        if (this.currentIndex >= this.totalImages * 2) {
            this.currentIndex = this.totalImages;
            this.updatePosition(false);
        }
        else if (this.currentIndex < this.totalImages) {
            this.currentIndex = this.totalImages * 2 - 1;
            this.updatePosition(false);
        }
    }
    
    setupAutoMove() {
        setInterval(() => {
            if (this.autoMove && !this.isTransitioning) {
                this.move('next');
            }
        }, 3000);
    }
    
    pauseAutoMove() {
        this.autoMove = false;
    }
    
    resumeAutoMove() {
        this.autoMove = true;
    }
}

// CLASE MODAL
class ContentModal {
    constructor() {
        this.modal = document.getElementById('contentModal');
        this.closeBtn = document.getElementById('closeModal');
        
        this.init();
    }
    
    init() {
        this.closeBtn.addEventListener('click', () => this.close());
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.close();
            }
        });
    }
    
    open(contentKey, imageSrc) {
        const content = contentDatabase[contentKey];
        
        if (!content) {
            console.error('Contenido no encontrado:', contentKey);
            return;
        }
        
        document.getElementById('modalTitle').textContent = content.title;
        document.getElementById('modalYear').textContent = content.year;
        document.getElementById('modalGenre').textContent = content.genre;
        document.getElementById('modalDuration').textContent = content.duration;
        document.getElementById('modalDirector').textContent = content.director;
        document.getElementById('modalCast').textContent = content.cast;
        document.getElementById('modalRating').textContent = `★ ${content.rating}`;
        document.getElementById('modalSynopsis').textContent = content.synopsis;
        document.getElementById('modalPoster').src = imageSrc;
        document.getElementById('modalPoster').alt = content.title;
        
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// INICIALIZACIÓN PRINCIPAL
document.addEventListener('DOMContentLoaded', function() {
    const carouselSections = ['peliculas', 'series', 'anime', 'adult'];
    const carousels = {};
    
    // Inicializar carruseles
    carouselSections.forEach(sectionName => {
        const track = document.getElementById(`carousel-${sectionName}`);
        if (track) {
            carousels[sectionName] = new InfiniteCarousel(sectionName, track);
        }
    });

    // Inicializar modal
    const modal = new ContentModal();

    // Event listeners para botones de navegación del carrusel
    document.querySelectorAll('.carousel-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            const direction = this.classList.contains('next') ? 'next' : 'prev';
            
            if (carousels[section]) {
                carousels[section].move(direction);
            }
        });
    });

    // Event listeners para imágenes (abrir modal)
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG' && e.target.hasAttribute('data-content')) {
            const contentKey = e.target.getAttribute('data-content');
            const imageSrc = e.target.src;
            
            // Verificar que no sea una imagen de redes sociales
            if (!e.target.closest('.social-icons')) {
                modal.open(contentKey, imageSrc);
            }
        }
    });

    // Pausar/reanudar auto-movimiento con hover
    document.querySelectorAll('.carousel-container').forEach(container => {
        container.addEventListener('mouseenter', function() {
            const trackId = this.querySelector('.carousel-track').id;
            const section = trackId.replace('carousel-', '');
            
            if (carousels[section]) {
                carousels[section].pauseAutoMove();
            }
        });
        
        container.addEventListener('mouseleave', function() {
            const trackId = this.querySelector('.carousel-track').id;
            const section = trackId.replace('carousel-', '');
            
            if (carousels[section]) {
                carousels[section].resumeAutoMove();
            }
        });
    });

    // Actualizar posiciones en resize
    window.addEventListener('resize', () => {
        Object.values(carousels).forEach(carousel => {
            const firstItem = carousel.track.children[0];
            if (firstItem) {
                carousel.itemWidth = firstItem.offsetWidth + 20;
                carousel.updatePosition(false);
            }
        });
    });

    // Smooth scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
