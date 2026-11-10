import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import AboutMe from "./index";


it('AboutMe test', ()=>{

    const Comp = ()=>{
        return(
            <Provider store={store}>
            <AboutMe openMoreInfo={()=>{}} />
            </Provider>
        )
    }

    render(<Comp />)

    fireEvent.click( screen.getByTestId("ArrowForwardIcon"));
})