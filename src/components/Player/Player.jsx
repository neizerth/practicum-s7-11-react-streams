import React from 'react';

import './style.scss';

export const Player = props => {
    const { name, status, waitSrc, activeSrc, onActive } = props;
    const src = status === 'wait' ? waitSrc : activeSrc;
    const showButton = onActive && status !== 'active';
    return (
        <section className="player">
            <h3 className="player__name">{name}</h3>
            <img src={src} alt={name} className="player__image"/>
            {showButton && <button className="player__action" onClick={onActive}>Set Active</button>}
        </section>
    );
};