import LearnMoreButton from "./Button";

export default function Card({image, title, description}){
    const cardClassName = `card ${title.toLowerCase()}`
    return(
        <section className = {cardClassName}>
            <img className="image" src={image} alt={title}/>
            <h2 className="card-title">{title}</h2>
            <p className="description">{description}</p>
            <LearnMoreButton />
        </section>
    );
}