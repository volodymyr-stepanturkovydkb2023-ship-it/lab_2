import { useEffect, useState } from 'react';

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-4 text-2xl text-gray-500"
                >
                    ×
                </button>

                <h2 className="mb-4 text-xl font-bold text-emerald-800">
                    Зворотний зв'язок
                </h2>

                <form
                    action="https://formspree.io/f/mppdkzqv"
                    method="POST"
                    className="flex flex-col gap-3"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше ім'я"
                        className="rounded border p-2"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="rounded border p-2"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Номер телефону"
                        className="rounded border p-2"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Ваше повідомлення"
                        rows="4"
                        className="rounded border p-2"
                        required
                    />

                    <button
                        type="submit"
                        className="rounded bg-emerald-800 p-3 font-bold text-white hover:bg-emerald-700"
                    >
                        Надіслати
                    </button>
                </form>
            </div>
        </div>
    );
}