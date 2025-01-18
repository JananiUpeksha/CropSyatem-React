import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RootLayout from './componenets/RootLayout'; // Adjust the import path if needed
import { VehicleProvider } from './pages/Vehicles'; // Correct import for VehicleProvider

function App() {
    return (
        <BrowserRouter>

                <RootLayout />

        </BrowserRouter>
    );
}

export default App;
