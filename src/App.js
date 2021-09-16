import { PageContainer } from './components/PageContainer/PageContainer';
import { Button } from './components/Button/Button';
import { PalettePicker } from './components/PalettePicker/PalettePicker';
import { FaAddressBook } from 'react-icons/fa';
import { ThemeProvider } from './context/theme';


import './App.css';

function App() {
  return (
    <ThemeProvider>
    <PageContainer>
      <Button icon={FaAddressBook}>Super button</Button>
      <PalettePicker />
      </PageContainer>
      </ThemeProvider>
  );
}

export default App;
