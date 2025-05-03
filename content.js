
// Typo-Mancer
function scrambleWord(word) {
    if (word.length <= 3) return word;
    const mid = word.slice(1, -1).split('');
    for (let i = mid.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mid[i], mid[j]] = [mid[j], mid[i]];
    }
    return word[0] + mid.join('') + word[word.length - 1];
}
function typoMancerText(node) {
    if (node.nodeType === 3 && node.textContent.trim() !== "") {
        node.textContent = node.textContent.replace(/\b\w{4,}\b/g, scrambleWord);
    }
    if (node.nodeType === 1 && node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
        Array.from(node.childNodes).forEach(typoMancerText);
    }
}
typoMancerText(document.body);
