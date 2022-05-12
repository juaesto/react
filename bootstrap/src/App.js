import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonList from './components/PersonList';

function App() {
  return (
    <div className='container' style={{ height: '400px', marginTop: '100px' }}>
      <div className='row' style={{ marginBottom: '40px' }}>
        <div className='col-md-3 col-sm-6' style={{ backgroundColor: 'red' }}>11</div>
        <div className='col-md-3 col-sm-6' style={{ backgroundColor: 'orange' }}>22</div>
        <div className='col-md-3 col-sm-6' style={{ backgroundColor: 'green' }}>33</div>
        <div className='col-md-3 col-sm-6' style={{ backgroundColor: 'yellow' }}>44</div>
      </div>
      <PersonList />
    </div>
  );
}

export default App;
