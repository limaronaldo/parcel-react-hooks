import React, {useState} from 'react'

const App = () => {

const [count, setCount] = useState(0);

const  counter = () => {
  setCount( 4)
  console.log('pressionei')
}

  return (
      <div>
        <h1>Ronaldo's First Parcel Bundler</h1>
        <h2>Using React</h2>
        <h3>...Learning Hooks...</h3>
        <h4>HMR - Mode 2</h4>
        <button onclick={() => counter}>Pressionado {count} X</button>
    </div>
  )
}

export default  App