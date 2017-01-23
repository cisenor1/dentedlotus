import * as React from "react";
export function arrayToList (array:any[]){
    let out = [];
    array.forEach((a)=>{out.push(<li>{a}</li>)});
    return out;
}