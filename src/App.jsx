// src/App.jsx

import './App.css';
import qrImg from "./assets/image-qr-code.png";


// const containerProperties = {
//   width: 320,
//   height: 497,
//   maxWidth: '100%',
//   backgroundColor: 'var(--white)',
//   padding: '1.25rem',
//   borderRadius: '1.5rem',
//   fontSize: '1rem',
//   boxShadow: '0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.05)',
//   margin: '7rem 3rem 7rem 3rem',
// };


// const containerImage = {
//   maxWidth: '100%',
//   borderRadius: '0.625rem',
//   marginBottom: '1rem',
// };

// const containerHeading = {
//   color: 'var(--dark-blue)',
//   textAlign: 'center',
//   marginBottom: '1rem',
//   fontSize: '1.5rem',
// };

// const containerDescription = {
//   color: 'var(--grayish_blue)',
//   textAlign: 'center',
//   fontSize: '1rem',
//   marginBottom: '2.5rem',
// };

function App() {
  return (
    <div>
      <main className="container container--properties">
        <img className="container__image" src={qrImg} alt="QR Code Image" />
        <h1 className="container__heading">Improve your front-end skills by building projects</h1>
        <p className="container__description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next
          level</p>
      </main>

      <footer className="attribution attribution--properties">
        Challenge by <a className="attribution__source" href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          rel="noopener noreferrer">Frontend
          Mentor</a>.
        Coded by <a className="attribution__creator" href="https://www.frontendmentor.io/profile/mayankdrvr" target="_blank"
          rel="noopener noreferrer">Mayank Arora</a>
      </footer>
    </div>
  );
}

export default App;