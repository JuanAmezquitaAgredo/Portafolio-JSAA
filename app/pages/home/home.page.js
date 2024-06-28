import { navigateTo } from "../../Router";

export function HomePage(){
    const root = document.getElementById('root');

    root.innerHTML =`
    <h1>Vuelos actuales</h1>
    <button id="logout-btn">Cerrar Sesion</button>
    <div id="flights"></div>
    `;

    //logout logic

    const $logoutbtn = document.getElementById('logout-btn');
    $logoutbtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        navigateTo('/login');
    });

    //Administrator Logic

    fetch('http://localhost:3000/User')
    .then(response => response.json())
    .then(jsonObject => {
        console.log(jsonObject[0].rolID);
    })
    
}