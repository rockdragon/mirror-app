import React from 'react';
import mirror, {actions, connect} from 'mirrorx'

// declare Redux state, reducers and actions,
// all actions will be added to `actions`.
mirror.model({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1
    },
    decrement(state) {
      return state - 1
    }
  },
  effects: {
    async incrementAsync() {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      actions.counter.increment()
    }
  }
})


// connect state with component
const Counter = connect(state => {
  return { count: state.counter }
})(props => (
    <div>
      <h2>{props.count}</h2>
      {/* dispatch the actions */}
      <button onClick={() => actions.counter.decrement()}>-</button>
      <button onClick={() => actions.counter.increment()}>+</button>
      {/* dispatch the async action */}
      <button onClick={() => actions.counter.incrementAsync()}>+ Async</button>
    </div>
  )
)

export default Counter