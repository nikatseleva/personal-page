import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import Portfolio from "./index";


it('Portfolio test', ()=>{

    const Comp = ()=>{
        return(
        <Provider store={store}>
             <Portfolio />
        </Provider>
        )
    }

    render(<Comp />)
})