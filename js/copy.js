const copyButtons = document.querySelectorAll('.copy-button');
const notCopied = '<i class="fa-solid fa-copy"></i>';
const copied = '<i class="fa-solid fa-check"></i>'
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        copyButtons.forEach(otherButton => {
            otherButton.innerHTML = notCopied;
        });

        const textarea = button.parentElement.parentElement.querySelector('textarea');
        const textValue = textarea.value;
        navigator.clipboard.writeText(textValue)
            .then(() => {
                button.innerHTML = copied;
            })
            .catch(err => {
                console.error('Error copying text: ', err);
            });
    });
})