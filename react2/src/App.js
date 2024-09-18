import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>Tareas pendientes</h1>
      <Card>
        <h2>Crear el front</h2>
        <p>Realizar el front de la aplicación</p>
        <p>Persona: Juan Pérez</p>
        <p>Fecha de inicio: 2024-01-01</p>
        <p>Fecha de fin: 2024-10-15</p>
      </Card>
      <Card>
        <h2>Crear el back</h2>
        <p>Realizar el back de la aplicación</p>
        <p>Persona: Juana Peraza</p>
        <p>Fecha de inicio: 2024-01-01</p>
        <p>Fecha de fin: 2024-10-15</p>
      </Card>
      <Card>
        <h2>Realizar pruebas</h2>
        <p>Hacer el testing</p>
        <p>Persona: JLO</p>
        <p>Fecha de inicio: 2024-01-01</p>
        <p>Fecha de fin: 2024-10-15</p>
      </Card>
    </div>
  );
}

export default App;
