import { navigateTo } from "../../Router";
import { encryptData } from "../../helpers/crypto";

export function RegisterPages(){
    const root = document.getElementById('root');

    root.innerHTML = `
    <form>
        <input type="text" placeholder="Juan"/>
        <input type="email" placeholder="Juan@exmaple.com"/>
        <label>Fecha de nacimiento: </label>
        <input type="date" autocomplete="fecha de nacimiento"/>
        <input type="password" placeholder="*******" autocomplete="current-password"/>
        <select name="user-rol">
            <option value="1">Administrador</option>
            <option value="2">Invitado</option>
        </select>
        <button type="sumit">Crear Usuario</button>
    </form>
    <button id="return-login">Ya tengo cuenta</button>
    `;

    const $createuser = document.getElementsByTagName('form')[0];
    $createuser.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.querySelector('[type="text"]');
        const useremail = document.querySelector('[type="email"]');
        const userbirthdate = document.querySelector('[type="date"]');
        const userpassword = document.querySelector('[type="password"]');
        const userrol = document.querySelector('[name="user-rol"]')

        if(!username || !useremail || !userbirthdate || !userpassword){
            alert("Todos los campos son requeridos");
            return
        };

        //Se crea el usuario

        const userCreateFetch = await fetch('http://localhost:3000/User', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: username.value,
                email: useremail.value,
                birthdate: userbirthdate.value,
                password: encryptData(userpassword.value),
                rolID: userrol.value
            })
        });

        if(!userCreateFetch.ok){
            alert("error al crear usuario")
            return
        };

        alert("Usuario creado correctamente");
        navigateTo('/login');
        
    });

    const $loginbtn = document.getElementById('return-login');
    $loginbtn.addEventListener('click', () => {
        navigateTo('/login');
    });
}