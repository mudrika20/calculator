import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import StopWatch from './StopWatch'
import App5 from './App5'
import Calculator from './Calculator'
import Quiz from './Quiz'
import Parent from './Parent'
import RandomQuoteGenerator from './RandomQuoteGenerator'

createRoot(document.getElementById('root')).render(

    <div>
    <RandomQuoteGenerator  />
    </div>
)
