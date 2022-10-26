
const FAQ = () => {
    return (
        <div className=" py-10 ">
            <div className='w-10/12 mx-auto border border-orange-400 p-4 rounded-lg '>

                <div className="collapse mt">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-orange-400 border border-black rounded-lg text-white">
                        <h1 className="text-xl font-bold">Which versions of React include Hooks?</h1>
                    </div>
                    <div className="collapse-content">
                        <ul className="font-bold">Starting with 16.8.0, React includes a stable implementation of React Hooks for:
                            <li>React DOM</li>
                            <li>React Native</li>
                            <li>React DOM Server</li>
                            <li>React Test Renderer</li>
                            <li>React Shallow Renderer</li>
                        </ul>
                    </div>
                </div>

                <div className="collapse mt-6">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-orange-400 border border-black rounded-lg text-white">
                        <h1 className="text-xl font-bold">Do I need to rewrite all my class components?</h1>
                    </div>
                    <div className="collapse-content">
                        <h1 className="font-bold">
                            No. There are no plans to remove classes from React — we all need to keep shipping products and can't afford rewrites. We recommend trying Hooks in new code.
                        </h1>
                    </div>
                </div>

                <div className="collapse mt-6">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-orange-400 border border-black rounded-lg text-white">
                        <h1 className="text-xl font-bold">What can I do with Hooks that I couldn't with classes?</h1>
                    </div>
                    <div className="collapse-content">
                        <h1 className="font-bold">
                            Hooks offer a powerful and expressive new way to reuse functionality between components. “Building Your Own Hooks” provides a glimpse of what's possible. This article by a React core team member dives deeper into the new capabilities unlocked by Hooks.
                        </h1>
                    </div>
                </div>


                <div className="collapse mt-6">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-orange-400 border border-black rounded-lg text-white">
                        <h1 className="text-xl font-bold">How much of my React knowledge stays relevant?</h1>
                    </div>
                    <div className="collapse-content">
                        <h1 className="font-bold">
                            Hooks are a more direct way to use the React features you already know — such as state, lifecycle, context, and refs. They don't fundamentally change how React works, and your knowledge of components, props, and top-down data flow is just as relevant.

                            Hooks do have a learning curve of their own. If there's something missing in this documentation, raise an issue and we'll try to help.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;