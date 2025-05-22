import Counter from "./Components/Counter/Counter"
import Stats from "./Components/Counter/Stats";

const App = () => {
    return (
        <div className="mx-auto max-w-7xl p-2 flex justify-center items-center">
            <div>
                <h3 className="text-2xl my-2">simple counter application </h3>

                <Counter />
                <Counter />
                <Stats totalCount={0} />
            </div>
        </div>
    )
};
export default App;