import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Contato: (44) 99999-9999</S.SectionTitle>
      </S.FooterSection>
      <p>{currentYear} - &copy; Acervo Todos os direitos reservados.</p>
    </div>
  </S.Container>
)

export default Footer
