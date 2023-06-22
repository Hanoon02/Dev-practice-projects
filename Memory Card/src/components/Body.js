import React , {useState} from 'react';
import ImageCard from './ImageCard';
import ScoreBoard from './ScoreBoard';
function Body(){
    const fruitArray = ['watermelon', 'banana', 'cherry', 'lime', 'tangerine','pear', 'pineapple', 'strawberry', 'pomegranate']
    const [points, setPoints] = useState(0);
    const [allFruit, setFruit] = useState(fruitArray);

    const check = (fruit) => {
        if(points===9){
            alert('You Win!');
            setPoints(0);
            setFruit(fruitArray);
        }
        else if(allFruit.includes(fruit)){
            setPoints(points + 1);
            setFruit(allFruit.filter(item => item !== fruit));
        }
        else{
            setPoints(0);
            setFruit(fruitArray);
        }
    }
    return(
        <>
            <div className='py-5'>
                <ScoreBoard score = {points}/>
                
            </div>
            <div>
                <div className='flex flex-row h-64 bg-cyan-100 justify-center' >
                    <div className='border-black' onClick={()=>check("banana")}><ImageCard fruit="banana"/></div>
                    <div className='border-black' onClick={()=>check("cherry")}><ImageCard fruit="cherry"/></div>
                    <div className='border-black' onClick={()=>check("pineapple")}><ImageCard fruit="pineapple"/></div>
                </div>
                <div className='flex flex-row h-64 bg-cyan-100 justify-center' >
                    <div className='border-black' onClick={()=>check("pomegranate")}><ImageCard fruit="pomegranate"/></div>
                    <div className='border-black' onClick={()=>check("strawberry")}><ImageCard fruit="strawberry" /></div>
                    <div className='border-black' onClick={()=>check("watermelon")}><ImageCard fruit="watermelon"/></div>
                </div>
                <div className='flex flex-row h-64 bg-cyan-100 justify-center' >
                    <div className='border-black' onClick={()=>check("tangerine")}><ImageCard fruit="tangerine"/></div>
                    <div className='border-black' onClick={()=>check("lime")}><ImageCard fruit="lime"/></div>
                    <div className='border-black' onClick={()=>check("pear")}><ImageCard fruit="pear"/></div>
                </div>
            </div>

        </>
    )
}

export default Body;