
import logo from './logo.svg';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import IndexPage from './components/IndexPage';
import { useEffect, useState } from 'react';
import About from './components/About';
import Splash from './components/Splash';
import { Blocks, InfinitySpin } from 'react-loader-spinner'
function App() {

    const [loaded,setLoaded] = useState(false)

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoaded(true)
            clearInterval(delay)
        },2000)
    },[])


    if(loaded){
        return (
            <div className="App">
                 <IndexPage></IndexPage>
              
            </div>
        );
    }else{
        return (
            <>
                <div id="loader-container">
            <div>
            <Blocks
                width='300'
                height='300'
                color="#4fa94d"
                />
            </div>
      

    
                </div>
            </>
        )
    }

}

export default App;
