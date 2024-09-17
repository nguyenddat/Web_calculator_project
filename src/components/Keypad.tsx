import React from 'react';

interface KeypadProps {
  onKeyPress: (key: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
  const keys = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', ')', '+',
    'C', 'DEL', '(', '=',
  ];

  return (
    <div className="keypad">
      {keys.map((key) => (
        <button key={key} onClick={() => onKeyPress(key)}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
