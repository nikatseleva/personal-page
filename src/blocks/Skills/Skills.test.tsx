import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import Skills from "./index";


it('Skills test', ()=>{

    const Comp = ()=>{
        return(
        <Provider store={store}>
             <Skills />
        </Provider>
        )
    }

    render(<Comp />)
})