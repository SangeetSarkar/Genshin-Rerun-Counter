import './Card.css';

function timeElapsed(timeFromRerun){
    const now=new Date();
    const diff=now.getTime()-timeFromRerun.getTime();
    const res=Math.ceil(diff/(1000*60*60*24));
    
    if(res<=0)
        return "Currently Running";
    else 
        return "Last rerun "+res+" days ago"
}

function Card(props){
    const {info, setFav} = props;
    const timeFromRerun =new Date(info.date);
    
    function removeFav(old,info){
        let arr=[]
        old.filter(el=>{
            if(el!==info)
            arr.push(el)
        })
        return arr;
    }

    function addFav(old,info){
        let arr=[]
        old.forEach(el=>{
            arr.push(el)
        })
        arr.push(info)
        return arr;
    }

    const addToFav = e => {
        if(info.isFav==true)
        {
            e.currentTarget.classList.remove('fa-solid')
            info.isFav=false;
            setFav(old=>{
                return removeFav(old,info);
            })
        }
        else
        {
            e.currentTarget.classList.add('fa-solid')
            info.isFav=true;
            setFav(old=>{
               return addFav(old,info)
            })
        }
    }

    return(
        <div className='cardContainer' >
            <img src={info.src} alt={info.charName} id="character-img" />
            <div className='character-info'>
                
                <div className="name">{info.charName}</div>
                <div className="lastRerunShow">{timeElapsed(timeFromRerun)}</div>
                {setFav && <div className="addFav">
                    <div className="fav">
                       <i className="fa-regular fa-star" onClick={addToFav} id="isSelected"></i>
                    </div>
                </div>}
            </div>

        </div>
    )
}

export default Card;