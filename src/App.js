import React, { Fragment, useState } from 'react';
import { Home } from './containers';

function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <Fragment>
            <Home />
        </Fragment>
    );
}

export default App;
