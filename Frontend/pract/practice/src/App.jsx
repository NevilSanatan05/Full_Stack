import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList  from './components/MovieList';

function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}

function ProductCard(props) {
  return (
    <> 
      <h1>The title of poem is {props.title}</h1>
      <p>The price is {props.price}</p>
      <p>The image URL is {props.url}</p>
      <img src={props.url} alt={props.title} style={{ width: "200px" }} />
    </>
  );
}



function App() {
  const [count, setCount] = useState(0);
  const currentYear = new Date().getFullYear();

  const movieArray = ["Inception", "Interstellar", "The Dark Knight", "Oppenheimer"];

  return (
    <>
      <h1>Name: Nevil</h1>
      <p>College: Bharati Vidyapeeth</p>
      <p>Year: {currentYear}</p>

      <Header />

      {/* Greeting Component */}
      <Greeting name="Nevil" />
      <Greeting name="Sanatan" />

      {/* ProductCard Component */}
      <ProductCard title="Beautiful Poem" price="₹100" url="https://via.placeholder.com/200" />

      {/* MovieList Component */}
      <MovieList movies={movieArray} />
    </>
  );
}

export default App;
