import { routes } from "./routes";


export function Router(){
    const path = window.location.pathname;

    const publicRoutes = routes.public.find(route => {
        return route.path === path
    });


    if(path == '/'){
        navigateTo('/HomePage')
        return
    }

    //Dirigirlo a las rutas publicas
    if(publicRoutes){
        publicRoutes.page()
        return
    }

}

export function navigateTo (path){
    window.history.pushState({},"", window.location.origin + path);
    Router();
 }