import React from 'react';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {makeMainRoutes} from "./routes";
import {Header} from "./components/Header";

const App = () => {
    const routes = makeMainRoutes()
    return (
        <div className="container">
            <BrowserRouter>
                <Header/>
                {routes}
            </BrowserRouter>

        </div>
    );
};

export default App;
