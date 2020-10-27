import React from 'react';
import bottle from "../Photos/bottle.png"

export default function Bottle({loading}) {

    return (
         loading && (<div>
            <img src={bottle} alt="beerBottle" className="bottleSpin"
        style={{height:"200px", width:"200px", display:"block", marginLeft:"auto", marginRight:"auto"}}/>
        </div>)
        
    )
}