import React from 'react';

function ScoreBoard(props){
    return(
        <>
            <p className='w-full text-center text-xl' >
                Your Score: {props.score}
            </p>
        </>
    )
}

export default ScoreBoard;