import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "../components/Home"
import formStyle from "../components/forms2"
import VideoList from '../components/VideoList'
import VideoPage from '../components/VideoPage'
import VideoPage2 from '../components/VideoPage2'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css'
import Layout from '../components/Layout'
export default function App()
{
    const formArray=formStyle.forms
    return(
        <Router forceRefresh={true}>
          <Routes>
            <Route path="/" element={<Home forms={formArray}/>}/>
            <Route path="/:formId" element={<Layout />} />
            <Route path="/:formId/video" element={<VideoList />} />
            <Route path='/:formId/video/play' element={<VideoPage/>}/>
          </Routes>̃
        </Router>
    )
}