import React, { useState } from 'react';
import Greeting from './mydir/Greeting';

function App() {
  const [name, setName] = useState('');
  
     const handleChange = (e) => {
        setName(e.target.value);
    }

    const resultFunc = () => {
      setName(name);
    }
  return (
    <div className="App">
     이름 입력:  <input type="text" value={name} onChange={handleChange} />
     <button onClick={resultFunc}>확인</button><br/>
     결과는 : {name}

     <hr/>
     <Greeting></Greeting>
    </div>
    
  );
}

export default App;
