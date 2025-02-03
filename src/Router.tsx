import {Routes, Route} from "react-router"

import { Home } from "./Pages/Home"
import { History } from "./Pages/History/index"
import { NotFound } from "./Pages/Not Found/Index"
import { Layout } from "./Layouts/DefaultLayout/index"

import { CyclesContextProvider } from "./Pages/Home/Context/CyclesContext"

export function AppRoutes(){

    return ( 
        <CyclesContextProvider>
            <Routes>
                <Route path="/" element={<Layout/>}> 
                    <Route  index element={<Home/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="*" element={<NotFound/>}/>            
                </Route>
            </Routes>
        </CyclesContextProvider>
    )
}



