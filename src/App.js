import React, { Fragment, useState } from 'react';
import { Home, BackdropPortal } from './containers';
import { Navbar, Card } from './components';
import { images } from 'assests';

function App() {
    const [darkTheme, setDarkTheme] = useState(false);
    const [openPortal, setOpenPortal] = useState(false);
    const [backdropComponent, setBackdropComponent] = useState(null);

    const changeTheme = () => {
        setDarkTheme(prevState => !prevState);
        setOpenPortal(true);
    };

    return (
        <Fragment>
            <Navbar darkTheme={darkTheme} changeTheme={changeTheme} />
            <Home darkTheme={darkTheme} />
            <BackdropPortal
                openPortal={openPortal}
                setOpenPortal={setOpenPortal}
                backdropComponent={backdropComponent}
                setBackdropComponent={setBackdropComponent}
            />
            <Card
                darkTheme={darkTheme}
                title="Personal Organizer"
                backgroundImage={images.personalOrganizer}
            />
            <Card
                darkTheme={darkTheme}
                title="Budget Planner"
                backgroundImage={images.budgetPlanner}
            />
            <Card
                darkTheme={darkTheme}
                title="Photoverse"
                backgroundImage={images.photoverse}
            />
        </Fragment>
    );
}

export default App;
