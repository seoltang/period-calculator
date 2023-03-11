import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages';
import { ROUTE_PATH } from '../constants/routePath';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.default} element={<Main />} />
        <Route path={ROUTE_PATH.result} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
