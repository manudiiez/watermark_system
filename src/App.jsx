import { useRef, useState } from 'react';
import './App.css';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import image from './tiger-2160x3840-muzzle-grin-amur-portrait-934 (1).jpg'

function App() {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const ref = useRef(null)

  const downloadImage = () => {
    console.log(ref.current)
    toPng(ref.current)
    .then(dataUrl => {
      download(dataUrl, 'custom-image.png')
    })
    .catch((error) => setError(error))
  }

  return (
    <div className="App">
      <input type="text" className='input' onChange={(e) => setText(e.target.value)} placeholder='Escribir aqui' />
      <div className='image' ref={ref}>
        <img src={image} alt="" />
        <p>{text}</p>
      </div>
      <button onClick={downloadImage}>Download</button>
      {
        error != false && (
          <p>{error}</p>
        )
      }
    </div>
  );
}

export default App;

// dowloadjs