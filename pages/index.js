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
import ModalSuccess from "../components/ModalSuccess";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameTemp: '',
            email: '',
            phone: '',
            isCompleted: false,
            isEdit: false,
            isModal: false,
            success: false
        };
    }
    componentDidMount() {
        if (localStorage.length != 1) {
            this.setState({name: localStorage.getItem('name'),nameTemp: localStorage.getItem('name'), email: localStorage.getItem('email'), phone: localStorage.getItem("phone")})
        }
    }

    setName = (value) => {
        this.setState({nameTemp: value})
    };
    setEmail = (value) => {
        this.setState({email: value})
    };
    setPhone = (value) => {
        this.setState({phone: value})
    };
    setEdit = () => {
        this.setState({isEdit: !this.state.isEdit})
    }
    saveEdit = () => {
        this.setState({isModal: true})
    }
    closeModal = () => {
        this.setState({isModal: false});
    }
    saveData = () => {
        this.setState({isEdit: false, isModal: false, success: true, isCompleted: true, name: this.state.nameTemp})
        localStorage.setItem("name", this.state.nameTemp)
        localStorage.setItem("email", this.state.email)
        localStorage.setItem("phone", this.state.phone)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.nameTemp,
                email: this.state.email,
                phone: this.state.phone
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
    }
    closeModalSuccess = () => {
        this.setState({success: false});
    }

    render() {
        return (<MainLayout>
                <Head>
                    <title>example.com</title>
                </Head>
                <div className={s.container}>
                    <Header name={this.state.name}/>
                    <NamePage/>
                    <MainProfile state={this.state} setEdit={this.setEdit.bind(this)}/>
                    {this.state.isEdit ? <EditInfo state={this.state} setPhone={this.setPhone.bind(this)}
                                                   setName={this.setName.bind(this)} saveEdit={this.saveEdit.bind(this)}
                                                   setEmail={this.setEmail.bind(this)}/> :
                        <Info state={this.state} setPhone={this.setPhone.bind(this)} setName={this.setName.bind(this)}
                              setEmail={this.setEmail.bind(this)}/>}
                </div>
                {this.state.isModal && <Modal closeModal={this.closeModal} saveData={this.saveData}></Modal>}
                {this.state.success && <ModalSuccess closeModalSuccess={this.closeModalSuccess}></ModalSuccess>}
            </MainLayout>
        )
    }
}