import { useSelector, useDispatch } from "react-redux";
import Counter from "./Components/Counter/Counter"
import Stats from "./Components/Counter/Stats";
import { decrement, increment, reset } from "./features/counters/CounterSlice";



const App = () => {
    const counters = useSelector(state => state.counters);
    const dispatch = useDispatch();

    const handleIncrement = (counterId) => {
        dispatch(increment(counterId))
    };

    const handleDecrement = (counterId) => {
        dispatch(decrement(counterId))
    };
    const handleReset = (counterId) => {
        dispatch(reset(counterId))
    };
    const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

    return (
        <div className="mx-auto max-w-7xl p-2 flex justify-center items-center">
            <div>
                <h3 className="text-2xl my-2">simple counter application </h3>
                {
                    counters.map(counter =>
                    (<Counter
                        key={counter.id}
                        onIncrement={() => handleIncrement(counter.id)}
                        onDecrement={() => handleDecrement(counter.id)}
                        onReset={() => handleReset(counter.id)}
                        count={counter.value}
                    />))
                }
                <Stats totalCount={totalCount} />
            </div>
        </div>
    )
};
export default App;