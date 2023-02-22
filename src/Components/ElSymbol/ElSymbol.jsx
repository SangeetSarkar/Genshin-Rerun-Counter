import "./ElSymbol.css"

function ElSymbol({elementImg,elementColor,symbolName}){
    return(
    <div className="elContainer" style={{background:elementColor}}>
        <img src={elementImg} alt="el-sign" id="elSign" />
        <div className="elName">{symbolName}</div>
    </div>
    );
}

export default ElSymbol;