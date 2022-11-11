import logo from './logo.svg'
import './App.css'
import React from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
function App() {
  return (
      <div className="App">

      </div>
  )
}

export default App
