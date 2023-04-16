import React, { useState , useMemo, memo} from 'react'

const PracticeMemo = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    
  return (
    <div>
      <input
      type='text'
      value={name}
      onChange={e => setName(e.target.value)}
      />
      <div>
      <input
      type='text'
      value={address}
      onChange={e => setAddress(e.target.value)}
      />
      </div>
      <Greeting  name={name}/>
    </div>
    
  )
}

const Greeting = (function Greeting({ name }) {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return <h3>Hello{name && ', '}{name}!</h3>;
  });
  
export default PracticeMemo
