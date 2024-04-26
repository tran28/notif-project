function Card({ card }) {
    return (
        <div className="group relative h-[80vw] w-[80vw] bg-accent-mid overflow-hidden md:h-[70vw] md:w-[70vw] lg:h-[80vh] lg:w-[80vh]">
            {card}
        </div>
    );
}

export default Card;