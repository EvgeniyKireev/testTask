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
    let test = (value) => {
        let regExp = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/
        return regExp.test(value)
    }
    let validateEmail = (email) => {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }
    let validPhone = (myPhone) => {
        let re = /^\d[\d\(\)\ -]{4,14}\d$/;
        return re.test(myPhone);

    }
    let divStyle = {};
    if (!test(props.state.nameTemp) || !validateEmail(props.state.email) || !validPhone(props.state.phone)) {
        divStyle = {"pointer-events": "none"}
    } else {
        divStyle = {}
    }
    return (<div className={s.edit}>
        <form className={s.editInfo}>
            <div className={s.edit_name}><AssignmentIndIcon style={{color: "#00BFA5"}}/>
                <div className={s.field}><TextField
                    value={props.state.nameTemp}
                    required id="standard-required"
                    onChange={changeName}
                    id="outlined-multiline-flexible"
                    label="Фамилия и Имя"
                    multiline
                    rowsMax={4}
                    variant="outlined"
                />
                    {!test(props.state.nameTemp) && <div className={s.error}>Вы неверно указали имя</div>}</div>
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
                />
                    {!validateEmail(props.state.email) && <div className={s.error}>Вы неверно указали email</div>}
                </div>
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
                    {!validPhone(props.state.phone) && <div className={s.error}>Укажите номер телефона (без +)</div>}
                </div>
            </div>
        </form>
        <div style={divStyle} onClick={() => {
            props.saveEdit()
        }} className={s.btn}><ColorButton variant="contained" color="primary" className={classes.margin}>
            Сохранить изменения
        </ColorButton></div>
    </div>);
}

export default EditInfo;