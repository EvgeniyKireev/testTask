import ReactDOM from 'react-dom';
import s from "../styles/Modal.module.css";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';

export default function Modal(props) {
    const ColorButton = withStyles((theme) => ({
        root: {
            padding: '15px 60px 15px 60px',
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
    const ColorButton1 = withStyles((theme) => ({
        root: {
            padding: '15px 50px 15px 50px',
            color: "#01BDA7",
            backgroundColor: "#fff",
            border: "1px solid #01BDA7",
            '&:hover': {
                backgroundColor: '#1a78c2',
            },
        },
    }))(Button);
    const useStyles1 = makeStyles((theme) => ({
        margin: {
            borderRadius: theme.spacing(3),
        },
    }));
    const classes1 = useStyles1();
    return ReactDOM.createPortal(<div className={s.main}>
        <div className={s.form}>
            <div onClick={() => {props.closeModal()}} className={s.close}><CloseIcon /></div>
            <div className={s.header}>Сохранить изменения?</div>
            <div onClick={() => {props.saveData()}} className={s.btn}><ColorButton variant="contained" color="primary" className={classes.margin}>
                Сохранить</ColorButton>
            </div>
            <div onClick={() => {props.closeModal()}} className={s.btn}><ColorButton1 variant="contained" color="primary" className={classes1.margin}>
                Не Сохранять</ColorButton1>
            </div>
        </div>
        {props.children}
    </div>, document.getElementById("portal"));
}