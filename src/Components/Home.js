import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);
    return (
        <div className="stopwatch bg-white px-10 py-5 rounded-sm shadow-md">
            <div className="numbers text-5xl ">
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div className="buttons">
                <button className=" bg-green-400 py-1 rounded-sm px-5 mx-2 mt-6" onClick={() => setRunning(true)}>Start</button>
                <button className=" bg-red-400 py-1 rounded-sm text-white px-5 mx-2 mt-6" onClick={() => setRunning(false)}>Stop</button>
                <button className=" bg-sky-400 py-1 rounded-sm px-5 mx-2 mt-6" onClick={() => setTime(0)}>Reset</button>
            </div>
        </div>
    );
};

export default Home