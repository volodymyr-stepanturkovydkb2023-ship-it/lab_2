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

    const storedData = {};

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        try {
            storedData[key] = JSON.parse(value);
        } catch {
            storedData[key] = value;
        }
    }

    document.getElementById("storageInfo").textContent =
        JSON.stringify(storedData, null, 2);

} catch (error) {
    document.getElementById("storageInfo").textContent =
        "Не вдалося отримати доступ до LocalStorage.";

    console.error(error);
}

async function fetchComments() {
    const container = document.getElementById("comments");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/15/comments"
        );

        if (!response.ok) {
            throw new Error("Помилка завантаження");
        }

        const comments = await response.json();
        container.replaceChildren();

        for (const comment of comments) {
            const card = document.createElement("article");
            card.className = "comment-card";

            const title = document.createElement("h3");
            title.textContent = comment.name;

            const email = document.createElement("p");
            email.className = "comment-email";
            email.textContent = comment.email;

            const body = document.createElement("p");
            body.textContent = comment.body;

            card.append(title, email, body);
            container.appendChild(card);
        }

    } catch (error) {
        container.textContent = "Не вдалося завантажити коментарі.";
        console.error(error);
    }
}
fetchComments();

const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

setTimeout(() => {
    contactModal.showModal();
}, 60000);

closeModal.addEventListener("click", () => {
    contactModal.close();
});


// Автоматичний вибір теми за часом
const hours = new Date().getHours();

if (hours < 7 || hours >= 21) {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}

// Ручне перемикання теми
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});