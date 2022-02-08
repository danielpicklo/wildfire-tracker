import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="loading" />
            <div>Fetching data...</div>
        </div>
    )
}

export default Loader
