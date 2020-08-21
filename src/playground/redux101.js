


import { createStore } from 'redux'

const incrementCount = ({ incrementby = 1 }={}) => ({
  type: 'INCREMENT',
  incrementby
})

const decrementCount = ({ decrementby = 1} = {}) => ({
  type: 'DECREMENT',
  decrementby
})

const setCount = ({ setto = 0} = {}) => ({
  type: 'SET',
  setto
})

const resetCount = () => ({
  type: 'RESET'
})

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementby
      }
    
    case 'DECREMENT':
      return {
        count: state.count - action.decrementby
      }

    case 'RESET':
      return {
        count: 0
      }

    case 'SET':

      return {
          count: action.setto
      }

    default:
      return state
  }

    return state
})

const unsubscribe = store.subscribe(() => {
console.log(store.getState())

})


store.dispatch(incrementCount({incrementby: 5}))


store.dispatch(incrementCount())


store.dispatch(decrementCount({decrementby: 12}))

store.dispatch(decrementCount({decrementby: 2}))

store.dispatch(decrementCount())


store.dispatch(setCount({setto: 300}))

store.dispatch(setCount())

store.dispatch(resetCount())

