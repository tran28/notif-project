function useCardContents() {
    const card1 = (
        <div className="flex items-center justify-center h-full w-full">
            <h1>Card 1</h1>
        </div>
    );

    const card2 = (
        <div className="flex items-center justify-center h-full w-full">
            <h1>Card 2</h1>
        </div>
    );

    const card3 = (
        <div className="flex items-center justify-center h-full w-full">
            <h1>Card 3</h1>
        </div>
    );

    const card4 = (
        <div className="flex items-center justify-center h-full w-full">
            <h1>Card 4</h1>
        </div>
    );

    const card5 = (
        <div className="flex items-center justify-center h-full w-full">
            <h1>Card 5</h1>
        </div>
    );

    const cards = [card1, card2, card3, card4, card5];
    return cards;
}

export default useCardContents;