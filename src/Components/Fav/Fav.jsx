import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import './Fav.css'

function Fav(props){
    const {fav} = props;
    const [visible,setVisible]=useState("favourites");
   

    // useEffect(()=>{
    //     console.log(fav)    
    //     if(fav.size==0)
    //     {
    //         setVisible("favCardContainer-none")
    //     }
    //     else{
    //         setVisible("favCardContainer") 
    //     }
    // },[fav])


    return (
        <div className={`favourites${fav.length?"":"-none"}`}>
            <div className="favcontainer">
                <div className="favHeading">My Favourites</div>
                <div className="favCardContainer">
                    { 
                        fav?.map(char => {
                        if(char.isFav==true)
                        return (
                            <Card key={char.charName} info={char}></Card>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default Fav;