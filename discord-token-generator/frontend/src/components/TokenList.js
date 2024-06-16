import React, { useState } from 'react';
import { generateToken } from '../../utils/tokenUtil';

const TokenList = () => {
  const [tokens, setTokens] = useState([]);

  const handleGenerateToken = () => {
    const newToken = generateToken();
    setTokens([...tokens, newToken]);
  };

  return (
    <div>
      <button onClick={handleGenerateToken}>Generate Token</button>
      <ul>
        {tokens.map((token, index) => (
          <li key={index}>{token}</li>
        ))}
      </ul>
    </div>
  );
};

export default TokenList;