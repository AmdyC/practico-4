import './App.css';
import React,{ useState } from "react";
function BMICalculator() {
  // Estados para los inputs y el resultado
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [interpretation, setInterpretation] = useState('');

  // Manejar el cambio de inputs
  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  // Calcular el IMC
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convertir cm a metros
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));
      setInterpretation(getBMICategory(bmiValue));
    }
  };

  // Determinar la categoría del IMC
  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Peso inferior al normal';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Peso normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obesidad';
    }
  };

  return (
    <div className="BMICalculator">
      <h2>Calculadora de IMC</h2>
      <form onSubmit={(e) => { e.preventDefault(); calculateBMI(); }}>
        <div>
          <label>Peso (kg): </label>
          <input type="number" value={weight} onChange={handleWeightChange} required />
        </div>
        <div>
          <label>Altura (cm): </label>
          <input type="number" value={height} onChange={handleHeightChange} required />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {bmi && (
        <div>
          <h3>Tu IMC es: {bmi}</h3>
          <p>{interpretation}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
