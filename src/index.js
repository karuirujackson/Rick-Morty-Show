import ReactDom from 'react-dom/client';
import List from './components/List';
import 'bootstrap/dist/css/bootsrap.min.css';

function App() {
  return (
    <>
      <h1>Rick and Morty</h1>
      <List />
    </>
  );
};

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(<App />);
