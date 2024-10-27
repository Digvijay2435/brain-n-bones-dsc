import './App.css'
import ContactDetails from './ContactDetails';
import NavbarActions from './NavbarActions';
import HomePage from './HomePage';
function App() {
  return (
    <div className='main-container'>
      <NavbarActions/>
      <HomePage />
      <ContactDetails />
    </div>
  )
}

export default App
