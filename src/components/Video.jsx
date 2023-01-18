export default function Video({link}) {
    return (
        <video src={link} loop controls autoStart="true" autoPlay muted />
    )
}