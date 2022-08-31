
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import BookList from './components/BookList';

function App() {
  return (
    <div >
      <WarningSign title="Attenzione, c'è stato un errore" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
      <BookList/>
    </div>
  );
}

export default App;
