import * as S from './styles'
import q1 from '../../assets/images/quadro1.jpg'
import q2 from '../../assets/images/quadro2.jpg'
import q3 from '../../assets/images/quadro3.jpg'
import q4 from '../../assets/images/quadro4.jpeg'

const canvas = [
  {
    id: 1,
    title: 'Quadro 1',
    description: 'Casa Planeta (Londrina - 1952)',
    image: q1
  },
  {
    id: 2,
    title: 'Quadro 2',
    description: 'Casas Catharinenses (Londrina - 1936)',
    image: q2
  },
  {
    id: 3,
    title: 'Quadro 3',
    description: 'Hotel Maingá (Maringá - 1952)',
    image: q3
  },
  {
    id: 2,
    title: 'Quadro 4',
    description: 'Primeira capela de Maringá (Fazenda São Bonifácio - 1937)',
    image: q4
  },
  {
    id: 3,
    title: 'Quadro 3',
    description: 'Descrição breve do quadro.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 2,
    title: 'Quadro 2',
    description: 'Descrição breve do quadro.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 3,
    title: 'Quadro 3',
    description: 'Descrição breve do quadro.',
    image: 'https://via.placeholder.com/400x300'
  }
]

const CanvasList = () => {
  if (!canvas.length) {
    return <h4>Carregando...</h4>
  }

  return (
    <S.Gallery className="container">
      {canvas.map((item) => (
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

export default CanvasList
