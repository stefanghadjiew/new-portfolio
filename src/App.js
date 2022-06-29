import React, { Fragment, useState } from 'react';
import { Home, Projects, BackdropPortal } from 'containers';
import { Navbar } from './components';

function App() {
    const [darkTheme, setDarkTheme] = useState(false);
    const [openPortal, setOpenPortal] = useState(false);
    const [backdropComponent, setBackdropComponent] = useState(null);

    const changeTheme = () => {
        setDarkTheme(prevState => !prevState);
    };

    return (
        <Fragment>
            <Navbar darkTheme={darkTheme} changeTheme={changeTheme} />
            <Home
                darkTheme={darkTheme}
                setOpenPortal={setOpenPortal}
                setBackdropComponent={setBackdropComponent}
            />
            <Projects darkTheme={darkTheme} />
            <BackdropPortal
                openPortal={openPortal}
                setOpenPortal={setOpenPortal}
                backdropComponent={backdropComponent}
                setBackdropComponent={setBackdropComponent}
            />
        </Fragment>
    );
}

export default App;
