import s from "../styles/Info.module.css";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";


let Info = (props) => {
    return (<div className={s.info}>
        <div className={s.info_email}><AlternateEmailIcon style={{color: "#00BFA5"}}/>
            <span>{props.state.email == null ? "Укажите email" : props.state.email}</span></div>
        <div className={s.line}></div>
        <div className={s.info_phone}><PhoneIcon style={{color: "#00BFA5"}}/><span>{props.state.phone == null ? "Укажите номер телефона" : props.state.phone}</span></div>
    </div>);
}

export default Info;