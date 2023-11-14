import Header from './component/Header'
import Daylist from './component/Daylist'
import Day from './component/Day'
import EmptyPage from './component/EmptyPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css";
export default function App(){

  return ( 
    <div className='App'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Daylist/>} />
        <Route path="/day/:day" element={<Day/>} />
        <Route path="*" element={<EmptyPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}