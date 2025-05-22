import { useState } from "react";
import Count from "./Count";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count => count + 1);
    };
    const handleDecrement = () => {
        setCount(count => count - 1);
    };

    return (
        <div className="mx-auto max-w-7xl p-2 flex justify-center items-center">
            <div className="bg-gray-50 text-black p-4 rounded">
                <div className="text-center">
                    <Count count={count} />
                </div>
                <div className="space-x-5 my-5">
                    <button onClick={handleIncrement} className="btn bg-green-500" > increment</button >
                    <button onClick={handleDecrement} className="btn bg-red-500" > decrement</button >
                </div>
            </div>

        </div >
    );
};

export default Counter;

//1. state --> count : 0
//2. actions --> increment, decrement, reset
//3. reduces --> increment ---> count => count + 1
//       --> decrement ---> count => count - 1
//       --> reset ---> count => 0
//4. store -->
// 5. providing store in react
// 6 using store 