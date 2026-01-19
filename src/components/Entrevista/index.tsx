import edgar3 from '../../assets/images/edgar3.jpg'

import * as S from './styles'

const Interview = () => {
  return (
    <>
      <S.BannerSection>
        <S.ContainerColumn className="container">
          <S.Image src={edgar3} alt="Imagem do Pintor" />
          <S.Content>
            <S.Title>Edgar Werner Osterroht</S.Title>
            <S.Prices>
              <p>
                Lançou livros, folders informativos com caricaturas e diversas
                exposições artísticas em Maringá, Londrina, Curitiba e São
                Paulo. Nasceu nos anos 30 na Alemanha, na cidade de Tilsit e
                viveu em Mannheim até se mudar para o Brasil. Iniciou suas
                atividades no ano de 1951 em Maringá/PR em uma empresa
                colonizadora chamada Companhia Terras Norte do Paraná (CMNP).
                <br></br> Trabalhou como urbanista e topógrafo até os anos 1960,
                planejando mais de 15 cidades. Nos anos 1960, iniciou seu
                trabalho como sócio-diretor na Arcontec Construções Técnicas
                Ltda. e executou/participou de mais de 5000 projetos.<br></br>{' '}
                Nas horas vagas, contribuiu para o acervo histórico maringaense
                desenhando e retratando na pintura a história de Maringá e suas
                redondezas. Lançou livros, folders informativos com caricaturas
                e diversas exposições artísticas em Maringá, Londrina, Curitiba
                e São Paulo.
              </p>
            </S.Prices>
          </S.Content>
        </S.ContainerColumn>
      </S.BannerSection>
      <S.BannerSection>
        <S.ContainerColumn className="container">
          <S.VideoWrapper>
            <iframe
              src="https://www.youtube-nocookie.com/embed/K4DyBUG242c&list=RDK4DyBUG242c&start_radio=1"
              title="Entrevista Edgar Werner Osterroht"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </S.VideoWrapper>

          <S.Content>
            <S.Title>Edgar Werner Osterroht</S.Title>
            <S.Prices>
              <p>
                Lançou livros, folders informativos com caricaturas e diversas
                exposições artísticas em Maringá, Londrina, Curitiba e São
                Paulo. Nasceu nos anos 30 na Alemanha...
              </p>
            </S.Prices>
          </S.Content>
        </S.ContainerColumn>
      </S.BannerSection>
    </>
  )
}

export default Interview
