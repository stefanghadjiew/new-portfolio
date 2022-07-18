import React, { Fragment, useState } from 'react';
import { BackdropPortal, Footer } from 'containers';
import { Home, Projects, About, Contact } from 'views';
import { Navbar, Navigation, ScrollToTopButton } from 'components';

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
            <Navigation darkTheme={darkTheme} />
            <Home
                darkTheme={darkTheme}
                setOpenPortal={setOpenPortal}
                setBackdropComponent={setBackdropComponent}
            />
            <About darkTheme={darkTheme} />
            <Projects
                darkTheme={darkTheme}
                setOpenPortal={setOpenPortal}
                setBackdropComponent={setBackdropComponent}
            />
            <Contact darkTheme={darkTheme} />
            <BackdropPortal
                openPortal={openPortal}
                setOpenPortal={setOpenPortal}
                backdropComponent={backdropComponent}
                setBackdropComponent={setBackdropComponent}
            />
            <ScrollToTopButton darkTheme={darkTheme} />
            <Footer
                darkTheme={darkTheme}
                classes={[
                    'flex-center',
                    'footer-padding',
                    `${darkTheme ? 'dark-theme' : 'light-theme'}`,
                ]}
            />
        </Fragment>
    );
}

export default App;
