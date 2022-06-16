import React from 'react';
import ReactDOM from 'react-dom';
import { usePortal } from 'hooks';
import { ClickawayListener } from 'components';

export const BackdropPortal = ({
    openPortal,
    setOpenPortal,
    backdropComponent,
    setBackdropComponent,
}) => {
    const { loaded, portalId } = usePortal();

    const renderPortal = openPortal && (
        <div className="backdrop-portal">
            <ClickawayListener
                setOpenPortal={setOpenPortal}
                setBackdropComponent={setBackdropComponent}
            >
                {backdropComponent}
            </ClickawayListener>
        </div>
    );

    return loaded
        ? ReactDOM.createPortal(
              renderPortal,
              document.getElementById(portalId)
          )
        : null;
};
