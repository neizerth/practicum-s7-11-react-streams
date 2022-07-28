import React, { useState } from 'react';
import { Player } from './components'
import batterWaitSrc from './images/batter_wait.jpeg';
import batterActiveSrc from './images/batter_active.jpeg';

import catcherWaitSrc from './images/catcher_wait.jpeg';
import catcherActiveSrc from './images/catcher_active.jpeg';

export const App = () => {
    const [status, setStatus] = useState('wait');
    const onActive = () => setStatus('active');

    return <div className="App">
        <Player
            name={'batter'}
            waitSrc={batterWaitSrc}
            activeSrc={batterActiveSrc}
            status={status}
            onActive={onActive}
        />
        <Player
            name={'catcher'}
            waitSrc={catcherWaitSrc}
            activeSrc={catcherActiveSrc}
            status={status}
        />
    </div>
}