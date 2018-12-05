document.getElementById("spacing").addEventListener('input', (e) => {
    const spacing = e.target.value;
    document.documentElement.style.setProperty('--padding',spacing + "px");
})
document.getElementById("blur").addEventListener('input', (e) => {
    const blur = e.target.value;
    document.documentElement.style.setProperty('--blur',blur + "px");
})
document.getElementById("color").addEventListener('input', (e) => {
    const background = e.target.value;
    document.documentElement.style.setProperty('--background',background);
})
