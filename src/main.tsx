import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function Main() {
  return (
    <>
      <h1>Hello World 2</h1>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main/>
  </StrictMode>,
)
