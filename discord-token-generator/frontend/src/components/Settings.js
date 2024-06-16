import React, { useState } from 'react';

const Settings = () => {
    const [tokenLength, setTokenLength] = useState(10);
    const [tokenComplexity, setTokenComplexity] = useState('medium');
    const [tokenExpiration, setTokenExpiration] = useState('never');

    const handleTokenLengthChange = (e) => {
        setTokenLength(e.target.value);
    };

    const handleTokenComplexityChange = (e) => {
        setTokenComplexity(e.target.value);
    };

    const handleTokenExpirationChange = (e) => {
        setTokenExpiration(e.target.value);
    };

    const handleSaveSettings = () => {
        // Logic to save settings
    };

    return (
        <div>
            <label>
                Token Length:
                <input type="number" value={tokenLength} onChange={handleTokenLengthChange} />
            </label>
            <br />
            <label>
                Token Complexity:
                <select value={tokenComplexity} onChange={handleTokenComplexityChange}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <br />
            <label>
                Token Expiration:
                <select value={tokenExpiration} onChange={handleTokenExpirationChange}>
                    <option value="never">Never</option>
                    <option value="1">1 day</option>
                    <option value="7">1 week</option>
                    <option value="30">1 month</option>
                </select>
            </label>
            <br />
            <button onClick={handleSaveSettings}>Save Settings</button>
        </div>
    );
};

export default Settings;