import styles from './header.css';
import imagen from './../../../images/img_profile.jpeg';
export function header(){
    const root = document.getElementById('root');

    const html = `
    <div class="${styles.container}">
    <header class="${styles.header}">
        <div class="${styles.profile_info}">
            <img src="${imagen}" alt="Foto de perfil" class="${styles.profile_img}">
            <span class="${styles.profile_name}"><strong>Portafolio de desarrollo web</strong></span>
            <div class="${styles.contact_info}">
                <h1>Juan Sebastian Amezquita</h1>
                <p><strong>Celular:</strong> 3176980852</p>
                <p><strong>Correo:</strong> juan.1999@hotmail.es</p>
                <p><strong>Ciudad:</strong> Medellín</p>
            </div>
        </div>
    </header>
    </div>
    `;

    return {
        html
    }
}