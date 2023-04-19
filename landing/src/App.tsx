import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css';

import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import LibrariesPage from './pages/LibrariesPage';
import OurServicesPage from './pages/OurServicesPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      {/* public routes */}
      <Route path='/' element={<HomePage />} />

      {/* protected routes */}
      {/* <Route element={<RequireAuth allowedRoles={[9381, 2305]} />} >
        <Route path='books' element={<BooksListPage />} />
        <Route path='books/:id' element={<BookOverviewPage />} />
        <Route path='books/:id/reviews' element={<ReviewsPage />} />
      </Route> */}
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
} 

export default App;
