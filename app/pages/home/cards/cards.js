import styles from './cards.css';
import Page_1 from './../../../images/Enteraworld.png';
import Page_2 from './../../../images/TravelCol.png';
import Page_3 from './../../../images/DataBases.png';
import logoGitHub from './../../../images/logo_github.jpg';

export function cards() {
    const root = document.getElementById('root');

    const html = `
            <div class="${styles.card}">
                <div class="${styles.cardContent}">
                    <img src="${Page_1}" alt="Card Image" class="${styles.cardImage}">
                    <div class="${styles.cardInfo}"><strong>Enter a world</strong> Es una creación innovadora diseñada para una evaluación práctica. Reconocido por su excepcional estilo, cada aspecto de nuestra página web ha sido meticulosamente diseñado. Desde la elección cuidadosa de colores hasta la disposición intuitiva de elementos, cada detalle refleja nuestra dedicación al diseño moderno y funcional. Cada página y sección ha sido optimizada para ofrecer una experiencia fluida y visualmente atractiva. Este proyecto no solo cumple con los requisitos técnicos, sino que también eleva los estándares estéticos.</div>
                    <div class="${styles.cardButtons}">
                        <a href="https://github.com/JuanAmezquitaAgredo/PruebaDeDeesempe-oHTMLyCSS.git" class="${styles.cardButton} ${styles.button1}"><img src="${logoGitHub}" alt="Card Image" "></a>
                        <a href="https://juanamezquitaagredo.github.io/PruebaDeDeesempe-oHTMLyCSS/" class="${styles.cardButton} ${styles.button2}">Pagina</a>
                    </div>
                </div>
            </div>

            <div class="${styles.card}">
                <div class="${styles.cardContent}">
                    <img src="${Page_2}" alt="Card Image" class="${styles.cardImage}">
                    <div class="${styles.cardInfo}"><strong>Travel COL</strong> Es una creación innovadora diseñada para una evaluación práctica. Reconocido por su excepcional estilo, cada aspecto de nuestra página web ha sido meticulosamente diseñado. Desde la elección cuidadosa de colores hasta la disposición intuitiva de elementos, cada detalle refleja nuestra dedicación al diseño moderno y funcional. Cada página y sección ha sido optimizada para ofrecer una experiencia fluida y visualmente atractiva. Este proyecto no solo cumple con los requisitos técnicos, sino que también eleva los estándares estéticos.</div>
                    <div class="${styles.cardButtons}">
                        <a href="https://github.com/JuanAmezquitaAgredo/Simulacro02.git" class="${styles.cardButton} ${styles.button1}"><img src="${logoGitHub}" alt="Card Image" "></a>
                        <a href="https://juanamezquitaagredo.github.io/Simulacro02/" class="${styles.cardButton} ${styles.button2}">Pagina</a>
                    </div>
                </div>
            </div>
            
            <div class="${styles.card}">
                <div class="${styles.cardContent}">
                    <img src="${Page_3}" alt="Card Image" class="${styles.cardImage}">
                    <div class="${styles.cardInfo}"><strong>MY SQL</strong> Es una pagina diseñada para resolver ejercicios de MySQL. Reconocido por su excepcional estilo, combinamos HTML, CSS y JavaScript para presentar los resultados de manera intuitiva y visualmente atractiva. Cada aspecto de nuestra página web ha sido meticulosamente diseñado. Desde la elección cuidadosa de colores hasta la disposición intuitiva de elementos, cada detalle refleja nuestra dedicación al diseño moderno y funcional. Este proyecto no solo cumple con los requisitos técnicos, sino que también eleva los estándares estéticos. ¡Explora y disfruta de la excelencia en cada interacción y elemento visual!</div>
                    <div class="${styles.cardButtons}">
                        <a href="https://github.com/JuanAmezquitaAgredo/DB_workshop_1.git" class="${styles.cardButton} ${styles.button1}"><img src="${logoGitHub}" alt="Card Image" "></a>
                        <a href="https://juanamezquitaagredo.github.io/DB_workshop_1/" class="${styles.cardButton} ${styles.button2}">Pagina</a>
                    </div>
                </div>
            </div>
    `
    
    return {
        html
    };
}


