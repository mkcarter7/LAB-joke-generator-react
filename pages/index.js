import { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });
  const [punchlineState, setPunchlineState] = useState('');

  function getJokes() {
    getJoke().then((newJoke) => {
      console.log(newJoke);
      setJoke(newJoke);
      setPunchlineState('');
    });
  }

  function deliverPunchline() {
    setPunchlineState('Punchline delivered!');
  }
  return (
    // <div
    //   className="text-center d-flex flex-column justify-content-center align-content-center"
    //   style={{
    //     height: '90vh',
    //     padding: '30px',
    //     maxWidth: '400px',
    //     margin: '0 auto',
    //   }}
    // >
    //   <h1>Welcome Home!</h1>
    // </div>
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '666px',
        margin: '0 auto',
      }}
    >
      <h1 id="joke">{joke.setup}</h1>
      {console.log(punchlineState)}
      <button type="button" onClick={punchlineState ? getJokes : deliverPunchline}>
        {punchlineState ? 'Get a Joke' : 'Get Punchline'}
      </button>
      {punchlineState && <h1 id="punchline">{joke.delivery}</h1>}
    </div>
  );
}

export default Home;
