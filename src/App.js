import React, { Fragment, useState } from 'react';
import {
    Home,
    Projects,
    About,
    BackdropPortal,
    Contact,
} from 'containers';
import { Navbar, NavigationDots, ScrollToTopButton } from 'components';

function App() {
    const [darkTheme, setDarkTheme] = useState(true);
    const [openPortal, setOpenPortal] = useState(false);
    const [backdropComponent, setBackdropComponent] = useState(null);

    const changeTheme = () => {
        setDarkTheme(prevState => !prevState);
    };

    return (
        <Fragment>
            <Navbar darkTheme={darkTheme} changeTheme={changeTheme} />
            <NavigationDots darkTheme={darkTheme} />
            <Home
                darkTheme={darkTheme}
                setOpenPortal={setOpenPortal}
                setBackdropComponent={setBackdropComponent}
            />
            <About darkTheme={darkTheme} />
            <Projects darkTheme={darkTheme} />
            <Contact darkTheme={darkTheme} />
            <BackdropPortal
                openPortal={openPortal}
                setOpenPortal={setOpenPortal}
                backdropComponent={backdropComponent}
                setBackdropComponent={setBackdropComponent}
            />
            <ScrollToTopButton darkTheme={darkTheme} />
        </Fragment>
    );
}

export default App;
