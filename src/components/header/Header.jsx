import React from "react";
import Logo from './img/logo.png'

import styles from './Header.module.css'

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Header() {

    const openMenu = document.getElementsByClassName(styles.openMenu)
    const closeMenu = document.getElementsByClassName(styles.closeMenu)
    const Menu = document.getElementsByClassName(styles.menu)


    const abrirMenu=()=>{
        openMenu[0].style.display = "none"
        closeMenu[0].style.display = "block"
        Menu[0].style.display = "block"
    }

    const fecharMenu=()=>{
        openMenu[0].style.display = "block"
        closeMenu[0].style.display = "none"
        Menu[0].style.display = "none"
    }

    return (
        <header id='home' className={styles.topo}>
            <div className={styles.content}>
                <div className={styles.logoNome}>
                    <img className={styles.logo} src={Logo} alt="logo" />
                    <div className={styles.nome}>
                        <span className={styles.letra}>R</span>
                        <span className={styles.letra}>D</span>
                        <span className={styles.letra}>E</span>
                        <span className={styles.letra}>V</span>
                    </div>
                </div>
                <nav className={styles.navegaçao}>
                    <IoMenu className={styles.openMenu} onClick={()=>abrirMenu()}/>
                    <IoClose className={styles.closeMenu} onClick={()=>fecharMenu()}/>
                    <ul className={styles.menu}>
                        <a href="#sobremim">
                            <li className={styles.item} onClick={()=>fecharMenu()}>Sobre mim</li>
                        </a>
                        <a href="#habilidades">
                            <li className={styles.item} onClick={()=>fecharMenu()}>Habilidades</li>
                        </a>
                        <a href="#projetos">
                            <li className={styles.item} onClick={()=>fecharMenu()}>Projetos</li>
                        </a>
                        <a href="#contatos">
                            <li className={styles.item} onClick={()=>fecharMenu()}>Contatos</li>
                        </a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}