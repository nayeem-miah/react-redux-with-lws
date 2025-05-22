import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
<<<<<<< HEAD
=======
import Counter from './Components/Counter/Counter'
import { Provider } from 'react-redux'
import App from './App'
>>>>>>> 4fceb9b (updated)

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <h3>hello redux</h3>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
)


// step1: install packages
// step2: constants define
// step3: async actions creator
// step4: reducer create
// step5: store create
// step 6: provider store
// step 7: use store 
// step 8 : adding css
=======
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
>>>>>>> 4fceb9b (updated)
