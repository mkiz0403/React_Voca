import Header from './component/Header'
import Daylist from './component/Daylist'
import Day from './component/Day'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css";
import CreateWord from './component/CreateWord'
import CreateDay from './component/CreateDay';
export default function App(){

  return ( 
    <div className='App'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Daylist/>} />
        <Route path="/day/:day" element={<Day/>} />
        <Route path="/create_word" element={<CreateWord/>} />
        <Route path="/create_day" element={<CreateDay/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}