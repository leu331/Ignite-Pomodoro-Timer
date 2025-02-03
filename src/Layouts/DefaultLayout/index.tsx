import { NavLink, Outlet } from "react-router"
import { LayoutContainer } from "./styles"

import DarkLogo from '../../assets/DarkLogo.svg'

import { Timer, Scroll, SunDim } from "@phosphor-icons/react"

export function Layout () {
    return (
        <LayoutContainer>
            <>
            <header>
                <div className="logo">
                    <img src={DarkLogo} alt="" />
                </div>

                <div className="buttons">
                    <NavLink to="/" title="Timer"> <Timer /> </NavLink>

                    <NavLink to="/history" title="Histórico"> <Scroll/> </NavLink> 

                    <button id="switchTheme" type="button" title="Trocar Tema"><SunDim/></button>
                </div>       
            </header>

            <main> 
                <Outlet/>
            </main>

            <footer>
                <div> Apenas por diversão,</div>
                <span>Todos os direitos reservados</span>
            </footer>
            </>
        </LayoutContainer>
    )
}