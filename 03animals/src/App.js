function App() {

    const handleClick = () => {
        console.log('Button was clicked')
    };

    const handleMouseMove = () => {
        console.log('Mouse moved inside of the button')
    };

    return (
    <div>
        <button onClick={handleClick} onMouseMove={handleMouseMove}>Add Animal</button>
        </div>
    )
}

export default App;