const textareas = document.querySelectorAll('textarea');
    
textareas.forEach(function(textarea) {
    let textContent = textarea.value;
    let lines = textContent.split('\n');
    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].trimStart();
    }

    let trimmedContent = lines.join('\n');
    textarea.value = trimmedContent;
});