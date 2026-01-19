import Button from '../Button'

import * as S from './styles'

interface ChatProps {
  onClose: () => void
}

const Chat = ({ onClose }: ChatProps) => {
  return (
    <S.CartContainer>
      <S.Overlay onClick={onClose} />

      <S.Sidebar onClick={(e) => e.stopPropagation()}>
        <h2>Fale Conosco</h2>

        <S.Form>
          <label>
            Nome
            <input type="text" placeholder="Seu nome" />
          </label>

          <label>
            E-mail
            <input type="email" placeholder="seu@email.com" />
          </label>

          <label>
            Assunto
            <input type="text" placeholder="Assunto da mensagem" />
          </label>

          <label>
            Mensagem
            <textarea placeholder="Digite sua mensagem..." />
          </label>

          <Button type="button" title="Enviar mensagem">
            Enviar mensagem
          </Button>
        </S.Form>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Chat
