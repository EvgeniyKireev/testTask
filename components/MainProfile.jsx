import s from "../styles/MainProfile.module.css";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";



let MainProfile = (props) => {
    debugger
    return (<div className={s.mainProfile}>
        <div className={s.mainProfile_avatar}><Avatar style={{height: '70px', width: '70px', backgroundColor: "#662d91"}}
                                                      /></div>
        <div className={s.mainProfileName}>{props.state.isCompleted ? props.state.name : "Необходимо ввести имя"}</div>
        <div onClick={() => (props.setName())}  className={s.edit}><span>редактировать</span><EditIcon
            style={{height: '20px', width: '20px'}}/></div>
    </div>);
}
export default MainProfile;