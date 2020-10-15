import s from '../styles/Home.module.css'
import {MainLayout} from "../components/MainLayout";
import {Component} from "react";
import Header from "../components/Header";
import NamePage from "../components/NamePage";
import MainProfile from "../components/MainProfile";
import Info from "../components/Info";
import Head from "next/head";
import EditInfo from "../components/EditInfo";
import Modal from "../components/Modal";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            isCompleted: false,
            isEdit: false,
            isModal: false
        };
    }

    setName = (value) => {
        this.setState({name: value})
    };
    setEmail = (value) => {
        this.setState({email: value})
    };
    setPhone = (value) => {
        this.setState({phone: value})
    };
    setEdit = () => {
        this.setState({isEdit: true})
    }
    saveEdit = () => {
        this.setState({isEdit:false, isModal: true})
    }
    closeModal = () => {
        this.setState({isModal: false});
    }
    render() {
        console.log(this.state)
        return (<MainLayout>
                <Head>
                    <title>example.com</title>
                </Head>
                <div className={s.container}>
                    <Header/>
                    <NamePage/>
                    <MainProfile state={this.state} setEdit={this.setEdit.bind(this)}/>
                    {this.state.isEdit ? <EditInfo state={this.state} setPhone={this.setPhone.bind(this)} setName={this.setName.bind(this)} saveEdit={this.saveEdit.bind(this)} setEmail={this.setEmail.bind(this)}/> : <Info state={this.state} setPhone={this.setPhone.bind(this)} setName={this.setName.bind(this)} setEmail={this.setEmail.bind(this)}/>}
                </div>
                {this.state.isModal && <Modal closeModal={this.closeModal}></Modal>}
            </MainLayout>
        )
    }
}
