import { siteInfo } from "../../../data/siteInfo";

function useCardContents() {
    const createFirstCardContent = () => (
        <div className="flex flex-col gap-10 h-full justify-center items-start mx-2 md:gap-16 md:mx-10">
            <h1 className="text-2xl md:text-3xl text-black">What is <span className="text-accent-dark">{siteInfo.name}</span>?</h1>
            <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base text-accent-dark">Imagine.</p>
                <p className="text-sm md:text-base text-black">Your favorite product went on <span className="text-accent-dark">sale</span> but by the time you check, it's already out of stock!</p>
            </div>
            <div className="flex flex-col gap-2 self-end">
                <p className="text-sm md:text-base text-black self-end">Don't worry, we will check for you.</p>
                <p className="text-lg md:text-xl text-accent-dark self-end font-semibold">Every day.</p>
            </div>
        </div>
    );

    const createCardContent = () => (
        <div className="grid grid-cols-10 grid-rows-10 h-full">
            <div className=" col-start-2 col-span-9 row-start-2 row-span-9 bg-accent-mid">

            </div>
        </div>
    );

    const cards = [
        { content: createFirstCardContent() },
        { number: 1, content: createCardContent() },
        { number: 2, content: createCardContent() },
        { number: 3, content: createCardContent() },
        { number: 4, content: createCardContent() }
    ];
    return cards;
}

export default useCardContents;