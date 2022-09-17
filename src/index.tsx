import { createRoot } from 'react-dom/client'
import { ClownUI } from './lib/components'
import { BrowserRouter } from 'react-router-dom'
import { Test } from './examples/Test'
import './index.css'

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)

  root.render(
    <>
      <ClownUI>
        <BrowserRouter>
          <Test />
        </BrowserRouter>
      </ClownUI>
    </>
  )
}
