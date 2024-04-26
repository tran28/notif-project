function Card({ card }) {
    return (
        <div className="group relative h-[80vw] w-[80vw] md:h-[600px] md:w-[600px] bg-accent-mid overflow-hidden">
            {card}
        </div>
    );
}

export default Card;