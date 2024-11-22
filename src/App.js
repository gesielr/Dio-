import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // Importação do evaluate
import GlobalStyle from './global';
import { Container, Screen } from './styles';
import Button from './components/Button';
import Input from './components/input';

const App = () => {
  const [input, setInput] = useState(''); // Valor digitado
  const [result, setResult] = useState(''); // Resultado da operação

  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Processa a expressão de forma segura usando evaluate
        setResult(evaluate(input));
      } catch (error) {
        // Mostra "Erro" em caso de qualquer problema na avaliação
        setResult('Erro');
      }
    } else if (value === 'C') {
      // Limpa o input e o resultado
      setInput('');
      setResult('');
    } else {
      // Adiciona o valor digitado ao input
      setInput(input + value);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        {/* Componente de entrada e tela para exibir os valores */}
        <Input value={input || result} />
        <Screen>{result}</Screen>
        {/* Botões da calculadora */}
        <div>
          {['7', '8', '9', '/'].map((btn) => (
            <Button key={btn} label={btn} onClick={() => handleClick(btn)} />
          ))}
          {['4', '5', '6', '*'].map((btn) => (
            <Button key={btn} label={btn} onClick={() => handleClick(btn)} />
          ))}
          {['1', '2', '3', '-'].map((btn) => (
            <Button key={btn} label={btn} onClick={() => handleClick(btn)} />
          ))}
          {['C', '0', '=', '+'].map((btn) => (
            <Button key={btn} label={btn} onClick={() => handleClick(btn)} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default App;
