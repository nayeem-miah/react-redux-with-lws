import { useState } from "react";
import Counter from "./Components/Counter/Counter"
import Stats from "./Components/Counter/Stats";

const initialCounter = [
    {
        id: 1,
        value: 0
    },
    {
        id: 2,
        value: 0
    }
];

const App = () => {
    const [counters, setCounters] = useState(initialCounter);

    const handleIncrement = (counterId) => {
        const updatedCounters = counters.map(counter => {
            if (counter.id === counterId) {
                return {
                    ...counter,
                    value: counter.value + 1
                }
            }
            return counter;
        })
        setCounters(updatedCounters);
    };

    const handleDecrement = (counterId) => {

        const updatedCounters = counters.map(counter => {
            if (counter.id === counterId) {
                return {
                    ...counter,
                    value: counter.value - 1
                }
            }
            return counter
        });
        setCounters(updatedCounters);
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
                        count={counter.value}
                    />))
                }
                <Stats totalCount={totalCount} />
            </div>
        </div>
    )
};
export default App;