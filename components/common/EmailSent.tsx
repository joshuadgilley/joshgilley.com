export default function EmailErrorAlert() {
    return (
        <div role="alert" className="absolute w-1/4 m-2 transition duration-100 ease-in-out">
            <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2">
                Success!
            </div>
            <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
                <p>Email sent, thank you!</p>
            </div>
        </div>
    )
}