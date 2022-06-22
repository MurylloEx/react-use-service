import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from 'src/pages';

export const BrowserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
      </Routes>
    </BrowserRouter>
  );
};