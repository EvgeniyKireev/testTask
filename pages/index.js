import s from '../styles/Home.module.css'
import {MainLayout} from "../components/MainLayout";
import {Component, useState} from "react";
import Header from "../components/Header";
import NamePage from "../components/NamePage";
import MainProfile from "../components/MainProfile";
import Info from "../components/Info";
import Head from "next/head";
import EditInfo from "../components/EditInfo";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            phone: null,
            isCompleted: false,
        };
    }

    setName = () => {
        this.setState({name: "whatsApp", isCompleted: true})
    };

    render() {
        return (<MainLayout>
                <Head>
                    <title>example.com</title>
                </Head>
                <div className={s.container}>
                    <Header/>
                    <NamePage/>
                    <MainProfile state={this.state} setName={this.setName.bind(this)}/>
                    <EditInfo state={this.state}/>
                </div>

            </MainLayout>
        )
    }
}
