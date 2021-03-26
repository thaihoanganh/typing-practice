import React from "react";
import ReactDOM from "react-dom";
import classes from "./style.moudle.scss";

export interface ModalProps {
    children?: React.ReactNode;
}

export interface PortalInterface {
    children?: React.ReactNode;
}

const Portal = (props: PortalInterface) => {
    const { children } = props;
    const el = React.useMemo(() => document.createElement("div"), []);
    React.useEffect(() => {
        el.classList.add(classes["layout-root"]);
        document.body.appendChild(el);
        return () => {
            document.body.removeChild(el);
        };
    }, [el]);

    return ReactDOM.createPortal(children, el);
};

const Modal: React.FC<ModalProps> = (props) => {
    const { children } = props;

    return <Portal>{children}</Portal>;
};

export default Modal;
