
const Modal = ({children}) => {
    return (
        <div>   
            <div>
                <div>
                    <div>Titulo</div>
                    <div>
                        <button>x</button>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;