import s from "../styles/Editinfo.module.css";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PhoneIcon from "@material-ui/icons/Phone";
import TextField from "@material-ui/core/TextField";


let EditInfo = (props) => {
    return (<div className={s.info}>
        <div className={s.info_email}><AssignmentIndIcon style={{color: "#00BFA5"}}/>
            <TextField
                id="outlined-multiline-flexible"
                label="Фамилия и Имя"
                multiline
                rowsMax={4}
                variant="outlined"
            /></div>
        <div className={s.line}></div>
        <div className={s.info_phone}><PhoneIcon style={{color: "#00BFA5"}}/><span>Укажите номер телефона</span></div>
    </div>);
}

export default EditInfo;