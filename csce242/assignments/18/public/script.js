document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const addCraftButton = document.getElementById('addCraftButton');
    const addCraftModal = document.getElementById('addCraftModal');
    const closeAddCraftModal = document.getElementById('closeAddCraftModal');
    const addSupplyButton = document.getElementById('addSupply');
    const craftImageInput = document.getElementById('craftImage');
    const addCraftForm = document.getElementById('addCraftForm');
    const cancelAddCraftButton = document.getElementById('cancelAddCraft');

    addCraftButton.addEventListener('click', () => {
        addCraftModal.style.display = 'block';
    });

    closeAddCraftModal.addEventListener('click', () => {
        addCraftModal.style.display = 'none';
    });

    addSupplyButton.addEventListener('click', () => {
        const newSupplyInput = document.createElement('input');
        newSupplyInput.type = 'text';
        newSupplyInput.name = 'supplies[]';
        document.getElementById('supplyInputs').appendChild(newSupplyInput);
    });

    craftImageInput.addEventListener('change', function () {
        const reader = new FileReader();
        reader.onload = function (e) {
            const previewImage = document.getElementById('previewImage');
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(this.files[0]);
    });

    addCraftForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        formData.append('supplies', JSON.stringify([...document.querySelectorAll('input[name="supplies[]"]')].map(input => input.value)));

        fetch('/api/crafts', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(newCraft => {
            addCraftModal.style.display = 'none';
            const img = document.createElement('img');
            img.src = `/uploads/${newCraft.image}`;
            img.alt = newCraft.name;
            img.className = 'craft-image';
            img.addEventListener('click', () => {
                alert(newCraft.description); // Example interaction
            });
            gallery.appendChild(img);
            addCraftForm.reset();
            document.getElementById('previewImage').style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to add the craft. Please check the console for more information.');
        });
    });

    cancelAddCraftButton.addEventListener('click', () => {
        addCraftModal.style.display = 'none';
    });
});
