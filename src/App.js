import React, { Fragment, useState } from 'react';
import { Home } from './containers';
import { Navbar } from './components';

function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    const changeTheme = () => {
        setDarkTheme(prevState => !prevState);
    };

    return (
        <Fragment>
            <Navbar darkTheme={darkTheme} changeTheme={changeTheme} />
            <Home darkTheme={darkTheme} />
        </Fragment>
    );
}

export default App;
