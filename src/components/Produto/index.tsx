import { Produto } from '../../App'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { adicionarFav } from '../../store/reducers/favorito'
import { adicionar } from '../../store/reducers/carrinho'

import * as S from './styles'

type Props = {
  produto: Produto
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const itensfav = useSelector((state: RootReducer) => state.favorito.itens)

  const produtoEstaNosFavoritos = () => {
    const IdsDosFavoritos = itensfav.map((f) => f.id)

    return IdsDosFavoritos.includes(produto.id)
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(adicionarFav(produto))}
        type="button"
      >
        {produtoEstaNosFavoritos()
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
