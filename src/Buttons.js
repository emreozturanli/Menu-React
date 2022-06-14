import React from "react";

const Buttons = ({buttons, filterPhones})=> {
    return(
        <nav>
            {
                buttons.map((btn)=>{
                    return <button onClick={()=>filterPhones(btn)}> {btn.toUpperCase()}</button>
                })
            }
            
        </nav>
    )
}

export default Buttons;