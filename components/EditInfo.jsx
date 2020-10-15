import s from "../styles/Editinfo.module.css";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PhoneIcon from "@material-ui/icons/Phone";
import TextField from "@material-ui/core/TextField";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Button from "@material-ui/core/Button";
import {withStyles, makeStyles,} from '@material-ui/core/styles';


let EditInfo = (props) => {
    const ColorButton = withStyles((theme) => ({
        root: {
            color: "#ffffff",
            backgroundColor: "#01BDA7",
            '&:hover': {
                backgroundColor: '#1a78c2',
            },
        },
    }))(Button);
    const useStyles = makeStyles((theme) => ({
        margin: {
            borderRadius: theme.spacing(3),
        },
    }));
    const classes = useStyles();
    let changeName = (e) => {
        props.setName(e.target.value)
    };
    let changeEmail = (e) => {
        props.setEmail(e.target.value)
    };
    let changePhone = (e) => {
        props.setPhone(e.target.value)
    };
    // TODO: доделать кнопки и валидацию полей
    return (<div className={s.edit}>
        <form className={s.editInfo}>
            <div className={s.edit_name}><AssignmentIndIcon style={{color: "#00BFA5"}}/>
                <div className={s.field}><TextField
                    value={props.state.name}
                    required id="standard-required"
                    onChange={changeName}
                    id="outlined-multiline-flexible"
                    label="Фамилия и Имя"
                    multiline
                    rowsMax={4}
                    variant="outlined"
                /></div>
            </div>
            <div className={s.line}></div>
            <div className={s.edit_email}><AlternateEmailIcon style={{color: "#00BFA5"}}/>
                <div className={s.field}><TextField
                    required id="standard-required"
                    value={props.state.email}
                    onChange={changeEmail}
                    id="outlined-multiline-flexible"
                    label="Email"
                    placeholder={"example@gmail.com"}
                    multiline
                    rowsMax={4}
                    variant="outlined"
                /></div>
            </div>
            <div className={s.line}></div>
            <div className={s.edit_phone}><AssignmentIndIcon style={{color: "#00BFA5"}}/>
                <div className={s.field}>
                    <TextField
                        required id="standard-required"
                        value={props.state.phone}
                        onChange={changePhone}
                        id="outlined-multiline-flexible"
                        label="Номер телефона"
                        multiline
                        rowsMax={4}
                        variant="outlined"
                    />
                </div>
            </div>
        </form>
        {(props.state.name.replace(/\s/g, '').length == 0 || props.state.email.replace(/\s/g, '').length == 0 || props.state.phone.replace(/\s/g, '').length == 0) && <div style={{color: 'red'}}>Заполните все поля</div>}
        <div onClick={() => {props.saveEdit()}} className={s.btn}><ColorButton variant="contained" color="primary" className={classes.margin}>
            Сохранить изменения
        </ColorButton></div>
    </div>);
}

export default EditInfo;