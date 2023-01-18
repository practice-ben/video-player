export default function Video({link}) {
    return (
        <div className="video">
            <video src={link} loop controls autoStart="true" autoPlay muted />
        </div>
    )
}