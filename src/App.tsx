import React, { useState } from 'react';
import Display from './components/Display.tsx';
import Keypad from './components/Keypad.tsx';

const App: React.FC = () => {
  const [display, setDisplay] = useState<string>('');

  const handleKeyPress = (key: string) => {
    switch (key) {
      case 'C':
        setDisplay('');
        break;
      case '=':
        try {
          setDisplay(eval(display).toString());
        } catch {
          setDisplay('Error');
        }
        break;
      case 'DEL':
        setDisplay(display.slice(0, -1));
        break;
      default:
        setDisplay(display + key);
    }
  };

  return (
    <>
      <Display value={display} /> 
    <div className="calculator">
      <Keypad onKeyPress={handleKeyPress} />
    </div>
    </>
  );
};

export default App;