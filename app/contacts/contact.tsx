'use client';
import Image from "next/image";

export default function ContactPage() {
    return (
        <section className="w-[1120px] mx-auto bg-gray-800 rounded-lg min-h-[620px] py-2">
            <h2 className="text-2xl mt-10 md:text-2xl font-extrabold mb-6 text-center">
                Contact <span className="text-accent">me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 px-6 md:px-12">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    Have a question or a project in mind? We&apos;d love to hear from you.
                </p>
                <Image src="/contactme.png" alt="photo" width={500} height={500} />

            </div>

            <form className=" bg-white dark:bg-gray-800 rounded-none md:rounded-2xl shadow-xl p-10 space-y-6 w-full max-w-md mx-auto">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                    </label>
                    <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 focus:outline-none"
                    placeholder="Your Name"
                    disabled
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                    </label>
                    <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 focus:outline-none"
                    placeholder="you@example.com"
                    disabled
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                    </label>
                    <textarea
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 focus:outline-none"
                    placeholder="Your message..."
                    disabled
                    />
                </div>

                <button type="button"
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg opacity-50 cursor-not-allowed"
                >
                    Send Message
                </button>
            </form>

            </div>
        </section>
    );
}