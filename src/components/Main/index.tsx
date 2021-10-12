import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Teste</S.Title>
    <S.Description>
      Bacon ipsum dolor amet fatback boudin kevin shankle tri-tip meatloaf.
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para tela com algoritmos"
    />
  </S.Wrapper>
)

export default Main
