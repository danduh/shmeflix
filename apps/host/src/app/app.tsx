import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Settings = React.lazy(() => import('settings/Module'));

const Catalog = React.lazy(() => import('catalog/Module'));

const Search = React.lazy(() => import('search/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>

        <li>
          <Link to="/catalog">Catalog</Link>
        </li>

        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/catalog" element={<Catalog />} />

        <Route path="/search" element={<Search />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
