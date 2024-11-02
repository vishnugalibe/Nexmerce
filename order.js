document.querySelectorAll('.button-group button').forEach(button => {
    button.addEventListener('click', (e) => {
        const action = e.target.textContent;
        const row = e.target.closest('tr');
        const orderId = row.cells[0].textContent;

        if (action === 'View') {
            alert(`Viewing details for Order ID: ${orderId}`);
        } else if (action === 'Invoice') {
            alert(`Generating invoice for Order ID: ${orderId}`);
        }
    });
});
