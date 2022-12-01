import {React} from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import  PetForm  from './components/PetForm'
export default function App() {
  return (
    <Router>
      <ul className="breadcrumb">
        <li><Link to="/"> All Pets </Link></li>
        <li><Link to="/kittens"> Kittens </Link></li>
        <li><Link to="/Puppies"> Puppies </Link></li>
        <li><Link to="/Ducklings"> Ducklings </Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="kittens" element={<Kittens />} />
        <Route path="Puppies" element={<Puppies />} />
        <Route path="Ducklings" element={<Ducklings />} />
      </Routes>
  </Router>
  );
}

function Home() {
  const people = ["HELEN", "Mulu", "elephant", "zibra"];
  const [Helen, person2] = people; // {clare}'s

  return <>
           <PetForm/>
          <h1>All Pets</h1>
          <section>This is the page for all {Helen}'s pet needs</section>
          <img src="imgs/kitten.jpg" alt="Kitten"/>
          <img src="imgs/puppy.jpg" alt="Puppy"/>
          <img src="imgs/duckling.jpg" alt="Duckling"/>
        </>
}

function Kittens() {
  return <>
      <h1>Kittens</h1>
      <section>This is the cats page</section>
      <img src="imgs/kitten.jpg" alt="Kitten"/>
    </>
}

function Puppies() {
  return <>
      <h1>puppy</h1>
      <section>This is the cats page</section>
      <img src="imgs/puppy.jpg" alt="puppy"/>
    </>
}
  function Ducklings() {
  return <>
      <h1> Duckling</h1>
      <section>This is the cats page</section>
      <img src="imgs/duckling.jpg" alt="duckling"/>
    </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
