import * as S from './styles'
import l1 from '../../assets/images/Livro1.png'
import l2 from '../../assets/images/Livro2.png'
import l3 from '../../assets/images/quadro3.jpg'

const books = [
  {
    id: 1,
    title: 'Maringá Passado e Futuro',
    description:
      'Descrição do livro 1. Um breve resumo sobre o conteúdo do livro.',
    image: l1
  },
  {
    id: 2,
    title: 'Envelhecendo com dignidade e humor',
    description:
      'Descrição do livro 2. Um breve resumo sobre o conteúdo do livro.',
    image: l2
  },
  {
    id: 3,
    title: 'Livro 3',
    description:
      'Descrição do livro 3. Um breve resumo sobre o conteúdo do livro.',
    image: 'https://via.placeholder.com/200x280'
  },
  {
    id: 4,
    title: 'Livro 4',
    description:
      'Descrição do livro 3. Um breve resumo sobre o conteúdo do livro.',
    image: 'https://via.placeholder.com/200x280'
  }
]

const BookList = () => {
  if (!books.length) {
    return <h4>Carregando...</h4>
  }

  return (
    <S.BooksSection className="container">
      {books.map((book) => (
        <S.BookCard key={book.id}>
          <S.BookImage src={book.image} alt={book.title} />

          <S.BookContent>
            <h3>{book.title}</h3>
            <p>{book.description}</p>

            <S.Button>Ver detalhes</S.Button>
          </S.BookContent>
        </S.BookCard>
      ))}
    </S.BooksSection>
  )
}

export default BookList
