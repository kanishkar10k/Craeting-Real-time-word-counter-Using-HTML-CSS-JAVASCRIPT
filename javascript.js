document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('inputText');
    const charCount = document.getElementById('charCount');

    ch.addEventListener('input', () => {
        const typed = ch.value.length;
        const r = 50 - typed;
        rem.textContent = r;
        typ.textContent = typed;
    });
});