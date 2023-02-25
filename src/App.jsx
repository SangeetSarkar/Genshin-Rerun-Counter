
import './App.css'
import Card from './Components/Card/Card.jsx'
import Header from './Components/Header/Header.jsx'
import ElSymbol from './Components/ElSymbol/ElSymbol.jsx'
import Fav from './Components/Fav/Fav.jsx'
import Foot from './Components/Foot/Footer'
import { useEffect,useState } from 'react';

function App() {

  const[info,setInfo]=useState(null);
  const [fav, setFav] = useState([]);

  function compDates(a,b){
    const date1=new Date(a.date);
    const date2=new Date(b.date);

    if(date1<date2)
      return 1;
    else if(date1>date2)
      return -1;
    else
      return 0;
  }

  useEffect(()=>{
    fetch("/data/data.json")
    .then(data=> data.json())
    .then(data=>{
      const elementInfo=data.elements;
      elementInfo.forEach(el=>{
        el.characters.sort(compDates);
      })
      setInfo(elementInfo);
    })
  },[])

  
  return (
    <div>
      <Header></Header>
      {/* <video id="video">
        <source src="/vids/GI_Main_Page_Background_Video.mp4" type="video/mp4" />
      </video> */}
      <Fav fav={fav} ></Fav>
      {
        info?.map((element, elemIdx)=>( 
          <div className="main-container" key={element.divName}> 
            <div className={element.divName} >
              <ElSymbol elemIdx={elemIdx} elementImg={element.elementImg} elementColor={element.elementColor} symbolName={element.symbolName}></ElSymbol>
              <div className="characterContainer">
                {
                element.characters?.map((character)=>{
                  return(
                    <Card fav={fav} setFav={setFav} key={character.charName} info={character}></Card>
                  )
                })
                }
              </div>
            </div>
          </div>
        ))
      }
      <Foot></Foot>
    </div>
  ) 
  
}

export default App