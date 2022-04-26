import { FC } from 'react';
import useApp from './hook';

const App: FC = () => {
  const { renderPage } = useApp();

  return (
    <div className="min-h-screen">
      {renderPage()}
    </div>
  );
}

export default App;