import * as S from './styles'
import l1 from '../../assets/images/Livro1.png'
import l2 from '../../assets/images/Livro2.png'
import l3 from '../../assets/images/Livro3.png'
import l4 from '../../assets/images/Livro4.png'

const books = [
  {
    id: 1,
    title: 'Maringá Passado e Futuro',
    description:
      'Maringá, a "Cidade Canção", evoluiu de um vilarejo pioneiro de terra vermelha e desafios logísticos para uma metrópole planejada, marcada pelo desenvolvimento urbano, expansão do comércio na Av. Brasil e a criação de instituições educacionais e culturais, destacando-se seu passado com a dicotomia Maringá Velho/Novo e seu futuro focado em preservar a qualidade de vida, enfrentando debates sobre modernização e memória histórica. ',
    image: l1
  },
  {
    id: 2,
    title: 'Envelhecendo com dignidade e humor',
    description:
      'Este livro mostra, através de textos e ilustrações bem humorados, as mais diversas situações que todos nós um dia teremos que enfrentar, quando a terceira idade chegar. Ele não tem a pretensão de ensinar as pessoas a envelhecer, mas, sim, mostrar muitos dos embaraços que podem surgir se não forem tomados os devidos cuidados. Um livro para quem é idoso, para quem um dia vai chegar lá e, principalmente, para quem tem humor e vê no idoso uma pessoa que é jovem por mais tempo.',
    image: l2
  },
  {
    id: 3,
    title: 'Homenagem ao cinquentenário de Maringá',
    description:
      'A homenagem ao cinquentenário de Maringá (1997) foi marcada por celebrações e, notavelmente, pelo lançamento de um livro histórico de mesmo nome por Edgar Werner Osterroht, que registrou os 50 anos da "Cidade Canção", celebrando a história dos pioneiros, a fundação em 1947 pela Companhia de Terras Norte do Paraná, e marcos como a criação do Parque Cinquentenário no ano do aniversário, consolidando a memória da cidade que cresceu do sonho à realidade',
    image: l3
  },
  {
    id: 4,
    title: 'Londrina Raízes e Dados Históricos',
    description:
      'Londrina, no Paraná, tem raízes no projeto de colonização inglês da Companhia de Terras Norte do Paraná, fundada em 1929, sendo inaugurada oficialmente em 1930 como "Londrina", homenagem à capital britânica. Desenvolveu-se rapidamente com o café, tornando-se a "Capital Mundial do Café" nos anos 60, mas diversificou sua economia após a Geada Negra de 1975, estabelecendo-se como polo regional de serviços, educação (com universidades como a UEL) e agronegócio, com marco no pioneirismo de centros de pesquisa. ',
    image: l4
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
            <S.TextoDes>{book.description}</S.TextoDes>

            <S.Button>Ver detalhes</S.Button>
          </S.BookContent>
        </S.BookCard>
      ))}
    </S.BooksSection>
  )
}

export default BookList
