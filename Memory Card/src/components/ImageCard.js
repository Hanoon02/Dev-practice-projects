import React from 'react'

function ImageCard(props){
    return(
        <>
            <div className='container w-52 h-44 px-5 py-5'>
                <img src={require(`./images/${props.fruit}.jpg`)} alt="fruit" className='w-52 h-44'/>
                <p className='text-xl text-center'>{props.fruit}</p>
            </div>
        </>
    )
}

export default ImageCard;