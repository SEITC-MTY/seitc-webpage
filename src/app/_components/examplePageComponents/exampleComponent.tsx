interface ExampleProps {
    title: number;
    message: string;
}

const ExampleComponent = ({ title, message }: ExampleProps) => {
    return (
        <div className="w-min p-6 bg-gray-800 rounded-lg">
            <h1 className="text-blue-400 font-bold">
                {title}
            </h1>
            <p className="text-gray-white">
                {message}
            </p>
        </div>
    )
}

export default ExampleComponent;