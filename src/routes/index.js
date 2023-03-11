import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages';
import { PATH } from './config';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.default} element={<Main />} />
        <Route path={PATH.result} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
