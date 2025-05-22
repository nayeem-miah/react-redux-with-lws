import Count from "./Count";

const Counter = ({ count, onIncrement, onDecrement, onReset }) => {

    return (
        <div className="mx-auto max-w-7xl p-2 flex justify-center items-center">
            <div className="bg-gray-50 text-black p-4 rounded">
                <div className="text-center">
                    <Count count={count} />
                </div>
                <div className="space-x-5 my-5">
                    <button onClick={onIncrement} className="btn bg-green-500" > increment</button >
                    <button onClick={onDecrement} className="btn bg-red-500" > decrement</button >
                    <button onClick={onReset} className="btn bg-yellow-500" > reset</button >
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