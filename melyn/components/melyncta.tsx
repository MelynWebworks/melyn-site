import { HeadsetIcon } from "lucide-react";

export default function MelynCTA() {
    return (
        <section
            className="min-w-screen relative bg-cover bg-center py-20 px-4"
            style={{ backgroundImage: 'url(/ctabg.png)' }}
        >
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-4xl font-semibold text-white text-center">
                    Ready to elevate your online presence?
                </h2>
                <p className="max-w-[80vh] text-center text-lg font-medium text-white">
                    Let's discuss how we can help you achieve your goals.
                </p>
                
                {/* call to action */}
                <div className="mt-8">
                    <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-base font-semibold text-sky-100 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-black"
                    >
                    <HeadsetIcon size={20} />
                    <span>Get a Free Consultation</span>
                    </button>
                </div>
            </div>
        </section>
    );
}