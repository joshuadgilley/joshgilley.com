export default function BackButton({route}: {route: string}) {
    return (
        <button className="mb-3 bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">
            <a href={`/${route}`}>
            Back
            </a>
        </button>
    )
}
