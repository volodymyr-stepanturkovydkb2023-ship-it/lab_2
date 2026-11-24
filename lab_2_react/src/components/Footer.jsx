import { useState, useEffect } from 'react';

export default function Footer() {
    const [storageInfo, setStorageInfo] = useState('');

    useEffect(() => {
        const systemInfo = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            languages: navigator.languages,
            cookieEnabled: navigator.cookieEnabled,
            online: navigator.onLine,
            hardwareConcurrency: navigator.hardwareConcurrency,
            deviceMemory: navigator.deviceMemory ?? "Недоступно",
            screenWidth: screen.width,
            screenHeight: screen.height,
            colorDepth: screen.colorDepth,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };

        try {
            localStorage.setItem("systemInfo", JSON.stringify(systemInfo));

            const data = JSON.parse(localStorage.getItem("systemInfo"));
            setStorageInfo(JSON.stringify(data, null, 2));
        } catch {
            setStorageInfo("Помилка доступу до LocalStorage.");
        }
    }, []);

    return (
        <footer className="mt-5 rounded-lg bg-emerald-100 p-5">
            <h2 className="mb-2 text-lg font-bold text-emerald-800">
                Додаткова інформація
            </h2>

            <p>Львів, Україна</p>
            <p>© 2026 Турковид Володимир | КБ-402</p>

            <h2 className="mt-4 mb-3 text-lg font-bold text-emerald-800">
                Системна інформація LocalStorage
            </h2>

            <pre className="rounded-lg bg-white p-4 text-xs whitespace-pre-wrap wrap-anywhere">
                {storageInfo}
            </pre>

            <a href="#" className="mt-3 inline-block text-emerald-700 hover:underline">
                Повернутися на початок ↑
            </a>
        </footer>
    );
}