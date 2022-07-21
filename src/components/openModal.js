//lazyloading es la forma en que para que podamos cargar nuestro cuando se necesita no al inicio. Muchos modales el jsx o componente esta ahi, se muestra o no dependiendo si una variable esta en true o false. El problema con este enfoque es que el componente tal cual ya esta ahi desde que carga la aplicacion, entonces si tienes una aplicacion muy grande y cargas tus componentes o modales desde un inicio, estas haciendo que el paquete final de javascript pese mas y por lo tanto el navegador tiene que invertir mas tiempo en procesar esos modales incluso si el usuario no los va a utilizar. Lazy loading nos permite separar en paquetes diferentes a ciertos modulos para que cuando lo llamemos esa parte de nuestro codigo se ejecute y de esa forma logramos que el modulo principal no pese tanto.
import React, {Suspense, lazy} from "react";
import {createRoot} from "react-dom/client"
import ModalLoading from "./ModalLoading";

export function openModal(){
    const Modal = lazy(()=>import ("./ModalSettings"));
    const modaldiv = document.createElement("div");
    modaldiv.id ="modal";
    document.body.appendChild(modaldiv);

    const root = createRoot(modaldiv);
    root.render(
    <Suspense fallback={<ModalLoading />}>
        <Modal root={root} title="Modal de Configuraciones" />
    </Suspense>)
}
export function openModalAccount(){
    const Modal = lazy(()=>import ("./ModalAccount"));
    const modaldiv = document.createElement("div");
    modaldiv.id ="modal";
    document.body.appendChild(modaldiv);

    const root = createRoot(modaldiv);
    root.render(
    <Suspense fallback={<ModalLoading />}>
        <Modal root={root} title="Modal de tu cuenta" />
    </Suspense>)
}