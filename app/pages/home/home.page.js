import { navigateTo } from "../../Router";
import { header } from './header/header.js';
import { cards } from "./cards/cards.js";
import styles from './home.css';

export function HomePage(){
    const root = document.getElementById('root');
    const { html: headerHtml} = header()
    const { html: cardsHtml} = cards()

    root.innerHTML =`
    <div class="${styles.body}">
    ${headerHtml}
    ${cardsHtml}
    `;
    
}