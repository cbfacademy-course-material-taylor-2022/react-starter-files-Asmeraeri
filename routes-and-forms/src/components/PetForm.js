import React, { useState } from 'react';

const PetForm = () => {
  const [name, setName] = useState('');
  const [,setSubmitted] = useState(false);
  const [age, setAge] = useState('');
  const [colour, setColour] = useState('');
  
  
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Pet's Name:<input type="text" value={name} onChange={(e) => { setName(e.target.value); setSubmitted(false) }} /></label>
        </div>

        <div>
          <label>Pet's age:<input type="text" value={age} onChange={(e) => { setAge(e.target.value); setSubmitted(false) }} /></label>
        </div>
        
        <div>
          <label>Pet's Colour:<input type="text" value={colour} onChange={(e) => { setColour(e.target.value); setSubmitted(false) }} /></label>
        </div>


        <input type="submit" value="Submit" id="submit-button"/>
      </form>
      <div id="results">
        <h3>Results</h3>
            Name: {name}<br />   Age: {age}<br />   Colour: {colour}<br />
            
      </div>
    </>
  );
}

export default PetForm;