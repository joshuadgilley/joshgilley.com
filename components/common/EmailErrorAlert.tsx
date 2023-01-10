export default function EmailErrorAlert() {
    return (
        <div role="alert" className="w-1/4 m-2 transition ease-in-out delay-150">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Error
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Something not ideal might be happening.</p>
            </div>
        </div>
    )
}