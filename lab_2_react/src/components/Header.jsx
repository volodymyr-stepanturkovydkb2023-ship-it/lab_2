export default function Header() {
    return (
        <header className="rounded-lg bg-emerald-800 p-6 text-white shadow-sm">
            <h1 className="text-3xl font-bold">
                Турковид Володимир
            </h1>

            <p className="mt-3">Студент | Кібербезпека | КБ-402</p>

            <p className="mt-2 text-sm text-emerald-100">
                Лабораторна робота №3 — Варіант 15
            </p>

            <nav className="mt-5 flex flex-wrap gap-4">
                <a href="#profile" className="hover:underline">Профіль</a>
                <a href="#education" className="hover:underline">Освіта</a>
                <a href="#skills" className="hover:underline">Навички</a>
                <a href="#projects" className="hover:underline">Проєкти</a>
            </nav>
        </header>
    );
}