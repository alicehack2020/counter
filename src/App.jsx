import React from 'react'
import Counter from './Counter'
const App = () => {
const count=0


  return (
    <div>
          <Counter data={count}></Counter>
    </div>
  )
}

export default App