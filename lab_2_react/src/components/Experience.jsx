export default function Experience() {
    return (
        <section id="projects" className="rounded-lg bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-emerald-800">
                Практичний досвід
            </h2>

            <h3 className="mb-2 font-semibold">
                Навчальні проєкти
            </h3>

            <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>Аналіз безпеки вебресурсів.</li>
                <li>Створення HTML-резюме.</li>
                <li>Розробка компонентів React.</li>
                <li>Робота із системою Git.</li>
                <li>Стилізація за допомогою Tailwind CSS.</li>
            </ol>
        </section>
    );
}