import { configureStore } from '@reduxjs/toolkit'
import CarrinhoReducer from './reducers/carrinho'
import FavoritoReducer from './reducers/favorito'
import api from '../services/api'
import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export type RootReducer = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    carrinho: CarrinhoReducer,
    favorito: FavoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(api.middleware)
})
