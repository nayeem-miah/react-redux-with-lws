function Stats({ totalCount }) {
    return (
        <div className="mx-auto max-w-7xl  flex justify-center items-center">
            <div className="bg-gray-50 text-black p-4 rounded">
                <div className="text-center">
                    totalCount : {totalCount}
                </div>
            </div>
        </div>
    );
}

export default Stats;
