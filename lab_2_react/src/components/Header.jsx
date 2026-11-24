export default function Header({ darkMode, toggleTheme }) {
    return (
        <header className="rounded-lg bg-emerald-800 p-6 text-white shadow-sm">
            <h1 className="text-3xl font-bold">
                Турковид Володимир
            </h1>

            <p className="mt-3">Студент | Кібербезпека | КБ-402</p>

            <p className="mt-2 text-sm text-emerald-100">
                Лабораторна робота №4 — Варіант 15
            </p>

            <nav className="mt-5 flex flex-wrap gap-4">
                <a href="#profile" className="hover:underline">Профіль</a>
                <a href="#education" className="hover:underline">Освіта</a>
                <a href="#skills" className="hover:underline">Навички</a>
                <a href="#projects" className="hover:underline">Проєкти</a>
                <a href="#reviews" className="hover:underline">Відгуки</a>
            </nav>

            <button
                type="button"
                onClick={toggleTheme}
                className="mt-5 rounded-lg bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-600"
            >
                {darkMode ? '☀️ Денний режим' : '🌙 Нічний режим'}
            </button>
        </header>
    );
}