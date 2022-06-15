import React, { Fragment, useState } from 'react';
import { Home } from './containers';
import { Navbar } from './components';

function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <Fragment>
            <Navbar />
            <Home />
        </Fragment>
    );
}

export default App;
