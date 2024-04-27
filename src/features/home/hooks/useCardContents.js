import { siteInfo } from "../../../data/siteInfo";

function useCardContents() {
    const createFirstCardContent = () => (
        <div className="grid grid-cols-10 grid-rows-10 h-full">
            <div className=" col-start-2 col-span-9 row-start-2 row-span-9">
                <div className="flex flex-col justify-around gap-10 h-full md:justify-center items-start">
                    <h1 className="text-2xl md:text-3xl text-black">What is <span className="text-accent-dark">{siteInfo.name}</span>?</h1>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm md:text-base text-black font-semibold">So this happened.</p>
                            <p className="text-sm md:text-base text-black">Your favorite product went on <span className="text-accent-dark font-semibold">sale</span>, but by the time you found out, it already sold out.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm md:text-base text-black font-semibold">"And on clearance too?!"</p>
                            <p className="text-sm md:text-base text-black">Set up <span className="text-accent-dark font-semibold">price alerts</span> today.</p>
                        </div>
                    </div>
                    <p className="text-base md:text-lg text-black self-center font-semibold md:self-end">In few simple steps</p>
                </div>
            </div>
        </div>
    );

    const createCardContent = () => (
        <div className="grid grid-cols-10 grid-rows-10 h-full">
            <div className="col-start-1 col-span-10 row-start-1 row-span-10 md:col-start-2 md:col-span-9 md:row-start-2 md:row-span-9 bg-accent-mid rounded-md">

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