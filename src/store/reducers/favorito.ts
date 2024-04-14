import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFav: (state, action: PayloadAction<Produto>) => {
      const newProduto = action.payload

      if (state.itens.find((produtos) => produtos.id === newProduto.id)) {
        const favoritosFill = state.itens.filter(
          (produtos) => produtos.id !== newProduto.id
        )
        state.itens = favoritosFill
      } else {
        state.itens.push(newProduto)
      }
    }
  }
})

// const [favoritos, setFavoritos] = useState<Produto[]>([])

// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }

export const { adicionarFav } = favoritoSlice.actions
export default favoritoSlice.reducer
