import React from 'react';
import mirror, {actions, connect} from 'mirrorx'

// declare Redux state, reducers and actions,
// all actions will be added to `actions`.
mirror.model({
  name: 'greeting',
  initialState: 'buddy',
  reducers: {
    change(state, who) {
      return who
    },
  },
})


// connect state with component
const Greeting = connect(state => {
  return { who: state.greeting, counter: state.counter }
})(props => (
    <div>
      <h2>Welcome, {props.who}!</h2>
      <h4>Counter: {props.counter}</h4>
      <input type="text" onChange={(e) => actions.greeting.change(e.target.value)} />
    </div>
  )
)

export default Greeting