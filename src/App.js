import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import useOpenNavMenu from './Components/Hooks/useOpenNavMenu';
import Work from './Components/Works/Work';
import firebase from 'firebase/app';
import 'firebase/database';
import Navbar from './Components/Header/Navbar';

const firebaseConfig = {
  apiKey: "AIzaSyAJ5cUXWkQQ-ZQ25o87LNxxUYXL5DT8tLw",
  authDomain: "portfolio-ef02d.firebaseapp.com",
  databaseURL: "https://portfolio-ef02d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-ef02d",
  storageBucket: "portfolio-ef02d.appspot.com",
  messagingSenderId: "407656283388",
  appId: "1:407656283388:web:561e6e10894d61b5992b79"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const database = firebase.database();

  const openNavMenu = useOpenNavMenu();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10 || window.scrollY < 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    });
    
    
  }, [scrolling]);

  return (
    <>
      <Navbar 
        {...openNavMenu} 
        scrolling={scrolling}
      />
      <Header/>

      <Work database={database}/>
    </>
  );
}

export default App;
