import React, { useState }from 'react';
import axios from "axios";
import * as S from './styled'
import { useHistory } from 'react-router-dom'


function App(props) {
  const history = useHistory()
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState(false)

  function handlePesquisa(param){
      axios.get(`https://api.github.com/users/${param}/repos`).then(response => {
        const repositories = response.data
        const repositoriesName = []
        repositories.map(repository => {
          repositoriesName.push(repository.name)
        })
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
        setErro(false)
        history.push('/repositories')
        
      }).catch(err => {
        setErro(true)
      })
    }
    return (
    <S.HomeContainer>
      <S.Container>
        <S.Input className="textoPesquisa" id="usuario" value={usuario} placeholder="Usuário no GitHub" onChange={e => setUsuario(e.target.value)}></S.Input>
        <S.Button className="botaoPesquisa" type="submit" onClick={e => handlePesquisa(usuario)}>Pesquisar</S.Button>
        { erro ? <S.ErrorMsg>Ocorreu um erro! Tente Novamente!</S.ErrorMsg> : ''}
      </S.Container>
    </S.HomeContainer>
  );
}

export default App;
