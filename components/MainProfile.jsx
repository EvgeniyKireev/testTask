import s from "../styles/MainProfile.module.css";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";



let MainProfile = (props) => {
    return (<div className={s.mainProfile}>
        <div className={s.mainProfile_avatar}><Avatar style={{height: '60px', width: '60px', backgroundColor: "#662d91", zIndex: 0}}
                                                      /></div>
        <div className={s.mainProfileName}>{props.state.name == "" ? "Необходимо ввести имя" : props.state.name}</div>
        <div onClick={() => (props.setEdit())}  className={s.edit}><span>редактировать</span><EditIcon
            style={{height: '20px', width: '20px'}}/></div>
    </div>);
}
export default MainProfile;