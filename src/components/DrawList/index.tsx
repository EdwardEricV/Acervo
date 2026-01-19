import * as S from './styles'
import d1 from '../../assets/images/desenho1.png'
import d2 from '../../assets/images/desenho2.png'
import d3 from '../../assets/images/desenho3.jpeg'

const draw = [
  {
    id: 1,
    title: 'Desenho 1',
    description: 'Descrição breve do desenho.',
    image: d1
  },
  {
    id: 2,
    title: 'Desenho 2',
    description: 'Descrição breve do desenho.',
    image: d2
  },
  {
    id: 3,
    title: 'Desenho 3',
    description: 'Descrição breve do desenho.',
    image: d3
  },
  {
    id: 2,
    title: 'Desenho 2',
    description: 'Descrição breve do desenho.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 3,
    title: 'Desenho 3',
    description: 'Descrição breve do desenho.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 2,
    title: 'Desenho 2',
    description: 'Descrição breve do desenho.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 3,
    title: 'Desenho 3',
    description: 'Descrição breve do desenho.',
    image: 'https://via.placeholder.com/400x300'
  }
]

const DrawList = () => {
  if (!draw.length) {
    return <h4>Carregando...</h4>
  }

  return (
    <S.Gallery className="container">
      {draw.map((item) => (
        <S.Card key={item.id}>
          <S.CardImage src={item.image} alt={item.title} />

          <S.CardContent>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <S.Button>Ver detalhes</S.Button>
          </S.CardContent>
        </S.Card>
      ))}
    </S.Gallery>
  )
}

export default DrawList
