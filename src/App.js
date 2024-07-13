import './App.css';
import Foot from './Comp/Foot';
import Form from './Comp/Form';
import Head from './Comp/Head';
import Sect from './Comp/Sect';
import Todos from './Comp/Todos';


function App() {
  return (
    <div className="App">
     <main>
      <Head />
      <Form />
      <Todos />
      <Sect />
     </main>
     <Foot />
    </div>
  );
}

export default App;
