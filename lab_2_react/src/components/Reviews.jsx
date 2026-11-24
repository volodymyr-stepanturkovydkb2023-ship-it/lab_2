import { useState, useEffect } from 'react';

export default function Reviews() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchComments() {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts/15/comments'
                );

                if (!response.ok) {
                    throw new Error('Помилка завантаження');
                }

                const data = await response.json();
                setComments(data);
            } catch {
                setError('Не вдалося завантажити відгуки.');
            } finally {
                setLoading(false);
            }
        }

        fetchComments();
    }, []);

    return (
        <section id="reviews" className="rounded-lg bg-white p-5 shadow-sm md:col-span-2">
            <h2 className="mb-3 text-xl font-bold text-emerald-800">
                Коментарі попередніх роботодавців
            </h2>

            <p className="mb-4 text-gray-600">
                Навчальні відгуки з JSONPlaceholder. Варіант 15.
            </p>

            {loading && <p>Завантаження відгуків...</p>}

            {error && <p className="text-red-600">{error}</p>}

            {comments.map((comment) => (
                <article
                    key={comment.id}
                    className="mb-4 rounded-lg border-l-4 border-emerald-700 bg-gray-100 p-4"
                >
                    <h3 className="font-bold">{comment.name}</h3>

                    <p className="my-2 text-sm text-gray-500">
                        {comment.email}
                    </p>

                    <p className="text-gray-700">{comment.body}</p>
                </article>
            ))}
        </section>
    );
}