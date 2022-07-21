import {useRef} from "react";
import styles from "./modal.module.scss"

const Modal = ({children, title, root}) => {

    const ref = useRef(null);

    function callback(e){
            //sirve para destruir el componente de forma segura
            root.unmount();
            //eliminamos la referencia
            document.querySelector("#modal").remove();
            ref.current.removeEventListener("animationend", callback)
    }

    function handleClick(){
        ref.current.classList.add(styles.fadeOut);
        //agregamos el evento fin de la animacion, y destruimos el componente
        ref.current.addEventListener("animationend", callback,
        {once: true} );
    }

    return (
        <div className={styles.modalContainer} ref={ref}>   
            <div className={styles.modalView}>
                <div className={styles.modalHeader}>
                    <div>{title}</div>
                    <div>
                        <button onClick={handleClick} className={styles.closeButton}>x</button>
                    </div>
                </div>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;