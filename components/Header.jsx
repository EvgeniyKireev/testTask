import s from "../styles/Header.module.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";

let Header = (props) => {
    return (<div className={s.headers}>
        <header className={s.header}>
            <div className={s.profileHeader}>
                <div className={s.notification}><NotificationsNoneIcon/></div>
                <div className={s.avatar}><Avatar style={{backgroundColor: "#662d91"}}/></div>
                <div className={s.name}>Киреев Е.В</div>
            </div>
        </header>
    </div>);
}

export default Header;