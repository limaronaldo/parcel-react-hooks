import React, {useState} from 'react'
import { hot } from 'react-hot-loader'
import './App.css'

const App = () => {

const [count, setCount] = useState(0);

const  counter = (x) => {
  setCount(count + x )
  console.log('pressionei')
}

  return (
      <div>
        <h1>Ronaldo's First Parcel Bundler</h1>
        <h2>Using React</h2>
        <h3>...Learning Hooks...</h3>
        <h4>HMR - Mode</h4>
        <h5>{count}</h5>
        <button className={"button"} onClick={() => counter(1)}>{count} +</button>
        <button onClick={() => counter(-1)}>{count} -</button>
    </div>
  )
}

export default  hot(module)(App)