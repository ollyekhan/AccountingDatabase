import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';


function MainProgram() {
  const [inputValue, setInputValue] = useState('');
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (buttonName: string, headers: string[]) => {
    if (selectedButton === buttonName) {
      setSelectedButton(null);
      setTableHeaders([]);
    }
    else {
      setSelectedButton(buttonName);
      setTableHeaders(headers);
    }

  };

  return (
    <>
      <div>
        <h1 className = "title">Accountax Pro. Database</h1>
        <p>Please enter the name/SSN of your client</p>
        <input type="text" value={inputValue} onChange={handleInputChange}></input>
        <button className="searchButton">Search</button>
      </div>
      <div className="infoContainer">
        <div className="infoButtonsContainer">
          <button
            className={`infoButtons ${selectedButton === 'Business Info' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('Business Info', ['Name', 'Name of Company', 'Date of Creation', 'Document Number', 'Address (Business and Mailing)'])}>
            Business Info
          </button>
          <button
            className={`infoButtons ${selectedButton === 'Owners Info' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('Owners Info', ['Owner #1', 'Owner #2', 'Owner #3'])}>
            Owners Info
          </button>
          <button
            className={`infoButtons ${selectedButton === 'Tax Info' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('Tax Info', ['EIN', 'RTG #', 'Business Partner #', 'Sales Tax Registry #'])}>
            Tax Info
          </button>
          <button
            className={`infoButtons ${selectedButton === 'Bank Info' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('Bank Info', ['Bank Name', 'Account #', 'Routing #'])}>
            Bank Info
          </button>
          <button
            className={`infoButtons ${selectedButton === 'Vendors Info' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('Vendors Info', ['Vendors Stuff'])}>
            Vendors Info
          </button>
          <button
            className={`infoButtons ${selectedButton === 'Employees Info' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('Employees Info', ['Employee Stuff'])}>
            Employees Info
          </button>
        </div>

        {selectedButton && (
          <table>
            <thead>
              <tr>
                {tableHeaders.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Table data goes here */}
            </tbody>
          </table>
        )}
        
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainProgram />} />
      </Routes>
    </Router>
  );
}
