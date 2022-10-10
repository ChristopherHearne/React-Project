import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './pages/Layout';
import Home from './pages/Home';
import HabitScoreCard from './pages/HabitScoreCard';
import HabitStacking from './pages/HabitStacking';
import Manifesto from './pages/Manifesto';
import NoPage from './pages/NoPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="scorecard" element={<HabitScoreCard/>}/>
          <Route path="stacking" element={<HabitStacking/>}/>
          <Route path="manifesto" element={<Manifesto/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}