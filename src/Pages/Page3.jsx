import { Layout } from '../Components';

export const Page3 = () => {
  const handleBoot = () => {
    if (typeof window.Intercom === 'function') {
      window.Intercom('boot', window.intercomSettings);
    }
  };

  const handleShutDown = () => {
    if (typeof window.Intercom === 'function') {
      window.Intercom('shutdown');
    }
  };

  return (
    <Layout>
      <p>Page 3</p>
      <button onClick={handleBoot}>Intercom Boot</button>
      <button onClick={handleShutDown}>Intercom Shut Down</button>
    </Layout>
  );
};
