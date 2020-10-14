import s from '../styles/Home.module.css'
import {MainLayout} from "../components/MainLayout";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/styles";
import EditIcon from '@material-ui/icons/Edit';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: "#662d91",
    },
    email: {
        color: "#00BFA5",
    }
})

export default function Home() {

    let [info, setInfo] = useState({name: null, surname: null, patronymic: null});
    const classes = useStyles();
    return (<MainLayout>
            <div className={s.container}>
                <div className={s.headers}>
                    <header className={s.header}>
                        <div className={s.profileHeader}>
                            <div className={s.notification}><NotificationsNoneIcon/></div>
                            <div className={s.avatar}><Avatar className={classes.avatar}/></div>
                            <div className={s.name}>Киреев Е.В</div>
                        </div>
                    </header>
                </div>
                <div className={s.namePage}>
                    <div className={s.personalProfile}>Личный профиль</div>
                    <span>главная/личный профиль</span></div>
                <div className={s.mainProfile}>
                    <div className={s.mainProfile_avatar}><Avatar style={{height: '70px', width: '70px'}}
                                                                  className={classes.avatar}/></div>
                    <div className={s.mainProfileName}>Киреев Евгений Владимирович</div>
                    <div className={s.edit}><span>редактировать</span><EditIcon
                        style={{height: '20px', width: '20px'}}/></div>
                </div>
                <div className={s.info}>
                    <div className={s.info_email}><AlternateEmailIcon className={classes.email}/>
                        <span>example@example.com</span></div>
                    <div className={s.line}></div>
                    <div className={s.info_phone}><PhoneIcon className={classes.email}/><span>Укажите номер телефона</span></div>
                </div>
            </div>

        </MainLayout>
    )
}
