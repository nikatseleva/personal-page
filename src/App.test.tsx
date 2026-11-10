import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "./store";
import App from "./App";


it('App test', ()=>{

    const Comp = ()=>{
        return(
        <Provider store={store}>
             <App />
        </Provider>
        )
    }

    render(<Comp />)
});