import { routes } from "./routes";


export function Router(){
    const path = window.location.pathname;

    const publicRoutes = routes.public.find(route => {
        return route.path === path
    });

    const privateRoutes = routes.private.find(route =>{
        return route.path == path
    });


    if(path == '/'){
        navigateTo('/login')
        return
    }

    if(path === '/login' || path === '/register'){
        if(localStorage.getItem('token')){
            navigateTo('/dashboard')
            return
        }
    }

    //Dirigirlo a las rutas publicas
    if(publicRoutes){
        publicRoutes.page()
        return
    }

    //dirigir a rutas rpivadas

    if(privateRoutes){
        if(!localStorage.getItem('token')){
            navigateTo('/login')
        }
        privateRoutes.page()
        return
    }


}

export function navigateTo (path){
    window.history.pushState({},"", window.location.origin + path);
    Router();
 }