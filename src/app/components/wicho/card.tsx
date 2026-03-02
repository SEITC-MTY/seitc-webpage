
const WichoCard = ({ message, author, createdAt }: { message: string; author?: string; createdAt?: string }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <p className="mt-2">{message}</p>
            {author && <p className="text-sm opacity-70 mt-1">by {author}</p>}
            {createdAt && <p className="text-xs opacity-50 mt-1">{new Date(createdAt).toLocaleString()}</p>}
        </div>  
    )
}

export default WichoCard;