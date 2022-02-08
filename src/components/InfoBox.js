const InfoBox = ({info}) => {
    return (
        <div className="info-box">
            <h2>EVENT LOCATION INFO</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>Title: <strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}

export default InfoBox
