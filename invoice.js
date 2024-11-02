document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const invoiceItems = document.getElementById('invoice-items').querySelector('tbody');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const dueDateInput = document.getElementById('due-date');
    const dueDatePreview = document.getElementById('due-date-preview').querySelector('span');
    const addItemButton = document.getElementById('add-item-btn');

    let itemCount = 0;
    let subtotal = 0;

    function addItem(name = 'Product Name', quantity = 1, price = 45.00) {
        itemCount++;

        const itemRow = document.createElement('div');
        itemRow.className = 'product-group';
        itemRow.dataset.itemId = itemCount;
        itemRow.innerHTML = `
        <input type="text" placeholder="Item Name" value="${name}">
        <input type="number" min="1" value="${quantity}" class="quantity">
        <input type="number" step="0.01" value="${price}" class="price">
        <button class="remove-btn">Remove</button>
      `;

        productList.appendChild(itemRow);

        updatePreview();
    }

    function updatePreview() {
        subtotal = 0;
        invoiceItems.innerHTML = '';

        document.querySelectorAll('.product-group').forEach(group => {
            const itemName = group.querySelector('input[type="text"]').value;
            const quantity = parseInt(group.querySelector('.quantity').value, 10);
            const price = parseFloat(group.querySelector('.price').value);
            const itemTotal = quantity * price;

            subtotal += itemTotal;

            const row = document.createElement('tr');
            row.innerHTML = `
          <td>${itemName}</td>
          <td>${quantity}x</td>
          <td>$${itemTotal.toFixed(2)}</td>
        `;
            invoiceItems.appendChild(row);
        });

        subtotalElement.textContent = $`${subtotal.toFixed(2)}`;
        totalElement.textContent = $`${subtotal.toFixed(2)}`;
    }

    addItemButton.addEventListener('click', () => {
        addItem();
    });

    productList.addEventListener('input', event => {
        if (event.target.classList.contains('quantity') || event.target.classList.contains('price')) {
            updatePreview();
        }
    });

    productList.addEventListener('click', event => {
        if (event.target.classList.contains('remove-btn')) {
            event.target.closest('.product-group').remove();
            updatePreview();
        }
    });

    dueDateInput.addEventListener('change', () => {
        dueDatePreview.textContent = dueDateInput.value;
    });
});