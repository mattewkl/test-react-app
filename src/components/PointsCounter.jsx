import React, {useState} from 'react';

const PointsCounter = () => {

    let [points, setPoints] = useState(0)
    function increment() {
        setPoints(points++)
    }

    function decrement() {
        setPoints(points--)
    }
    return (
        <div>
            <p>{points}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default PointsCounter;