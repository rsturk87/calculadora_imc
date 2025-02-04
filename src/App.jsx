import { useState } from "react";

import IMCForm from "./components/IMCForm";
import IMCTable from "./components/IMCTable";

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Substituir a vírgula por ponto para conversão correta
    const alturaConvertida = altura.replace(',', '.');
    const alturaNum = parseFloat(alturaConvertida);
    const pesoNum = parseFloat(peso);

    if (!alturaNum || !pesoNum) {
      alert('Por favor, insira valores válidos para altura e peso.');
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    setImc(imcCalculado.toFixed(2));

    let classificacaoTexto = '';
    if (imcCalculado < 18.5) {
      classificacaoTexto = 'Abaixo do peso';
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      classificacaoTexto = 'Peso normal';
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      classificacaoTexto = 'Sobrepeso';
    } else if (imcCalculado >= 30) {
      classificacaoTexto = 'Obesidade';
    }
    setClassificacao(classificacaoTexto);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h1 className="text-center mb-4">Calculadora de IMC</h1>
        <IMCForm
          altura={altura}
          peso={peso}
          setAltura={setAltura}
          setPeso={setPeso}
          handleSubmit={handleSubmit}
        />
        <IMCTable
          imc={imc}
          classificacao={classificacao}
        />
      </div>
    </div>
  );
};

export default App;