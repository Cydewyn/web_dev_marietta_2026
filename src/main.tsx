import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function App() {
  return (
    <BrowserRouter>
      <Stack direction="row">
        <Box><Link to="/">Home</Link> </Box>
        <Box><Link to="/page1">Page 1</Link> </Box>
        <Box><Link to="/page2">Page 2</Link> </Box>
      </Stack>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <h1>Hello World 1</h1>
  )
}

function Page1() {
  return (
    <h1>Hello World 2</h1>
  )
}

function Page2() {
  return (
    <h1>Hello World 3</h1>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
