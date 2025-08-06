import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path="/categoria/:category" element={<ItemListContainer />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App