import React from "react";

const Button=(props)=>{
    const {title,customClass,clickTriger}=props
    return(
        <>
            <button className={`
            bg-blue-600
            text-white
            px-1 py-3 
            mx-3
            w-24
            rounded 
            font-bold 
            hover:bg-blue-700
            ${customClass}
            `} 
            onClick={clickTriger}>
            {title}
            </button>  <br/>
        </>
    )
}

export default Button;