import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../app/CounterSlice'

export default configureStore({
  reducer: {
    counter: CounterSlice,
  },
})