import React, { Fragment, useState } from 'react';
import { Home, BackdropPortal } from 'containers';
import { Navbar, Card } from './components';
import { images } from './assests';

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
            <Home darkTheme={darkTheme} setOpenPortal={setOpenPortal} />
            <BackdropPortal
                openPortal={openPortal}
                setOpenPortal={setOpenPortal}
                backdropComponent={backdropComponent}
                setBackdropComponent={setBackdropComponent}
            />
            <div
                style={{
                    display: 'flex',
                    width: '100vw',
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Card
                    title="Budget Planner"
                    darkTheme={darkTheme}
                    backgroundImage={images.budgetPlanner}
                />
            </div>
        </Fragment>
    );
}

export default App;
