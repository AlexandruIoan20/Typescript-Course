import './App.css'; 
import InputField from './components/InputField';

const App: React.FC = () => { 
  return ( 
    <div className = 'app'>
      <span className = 'heading'> Taskify </span>

      <InputField /> 
    </div>
  )
}


export default App
