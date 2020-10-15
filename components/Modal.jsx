import {Component} from "react";
import ReactDOM from 'react-dom';
import s from "../styles/Modal.module.css";
export default class Modal extends Component {
    render() {
        return ReactDOM.createPortal(<div className={s.main}><div className={s.form}>modal</div>
            <button onClick={()=>{this.props.closeModal()}}>Закрыть</button>
            {this.props.children}</div>, document.getElementById("portal"));
    }
}