import { navigateTo } from "../../Router";
import { decryptData } from "../../helpers/crypto";

export function LoginPages(){
    const root = document.getElementById('root');

    root.innerHTML=`
    <form>
        <input type="email" autocomplete="username"/>
        <input type="password" autocomplete="current-password"/>
        <button type="submit" id="login-btn">Login</button>
    </form>
    
    <button type="submit" id="register-btn">Registrarse</button>
    `;

    const $loginuser = document.getElementsByTagName('form')[0];
    $loginuser.addEventListener('submit', async (e) => {
        e.preventDefault();

        const useremail = document.querySelector('[type="email"]').value;
        const password = document.querySelector('[type="password"]').value;

        if(!useremail || !password){
            alert("Todos los campos son requeridos");
            return
        }

        //Buscar usuarios en db.js

        const usersfecthed = await fetch ('http://localhost:3000/User');

        if(!usersfecthed.ok){
            alert("error al cargar el usuario")
            return
        }

        const userToJson = await usersfecthed.json()
        const userFound = userToJson.find(user => user.email === useremail);

        if(!userFound){
            alert("Usuario no encontrado")
            return
        }

        if(decryptData(userFound.password) !== password){
            alert("La contraseña es incorrecta")
            return
        }

        const token = Math.random().toString(36).substring(2);
        localStorage.setItem('token', token);

        navigateTo('/dashboard');



    });

    const $registerbtn = document.getElementById('register-btn');
    $registerbtn.addEventListener('click', () => {
        navigateTo('/register');
    });


}