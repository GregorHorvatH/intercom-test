import { useState } from 'react';

import { Layout } from '../../Components';

import './Page3.css';

export const Page3 = () => {
  const [isActive, setIsActive] = useState(true);

  const handleBoot = () => {
    if (typeof window.Intercom === 'function') {
      window.Intercom('boot', window.intercomSettings);
      setIsActive(true);
    }
  };

  const handleShutDown = () => {
    if (typeof window.Intercom === 'function') {
      window.Intercom('shutdown');
      setIsActive(false);
    }
  };

  return (
    <Layout>
      <p>Page 3</p>
      <button className="btn" disabled={isActive} onClick={handleBoot}>
        Intercom Boot
      </button>
      <button className="btn" disabled={!isActive} onClick={handleShutDown}>
        Intercom Shut Down
      </button>
    </Layout>
  );
};
