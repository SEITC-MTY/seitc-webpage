import ExampleComponent from "seitc/app/_components/examplePageComponents/exampleComponent"

const ExamplePage = () => {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold underline">
                Example Page
            </h1>
            <p className="mt-4 text-lg">
                Hello world
            </p>
            <div className="p-4 gap-4 flex flex-row">
                <ExampleComponent title={1} message="This is an example component!" />
                <ExampleComponent title={2} message="This is another example component!" />
            </div>
        </div>
    )
}

export default ExamplePage;