import { Router } from "./Router";

export function App(){
    const root = document.getElementById('root');
    if(!root){
        throw new Error("No existe el root, revisar...")
    }
    Router();
}