// Tree class definition
class Tree {
    constructor(name, image, details) {
        this.name = name;
        this.image = image;
        this.details = details;
    }

    getSection() {
        return `<div class="tree-section" onclick="showDetails('${this.name}')">
                    <h2>${this.name}</h2>
                    <img src="images/${this.image}" alt="${this.name}" />
                </div>`;
    }
}

// Array of tree objects
const trees = [
    new Tree('Bald Cypress', 'baldcyprus.png', {
        type: 'Deciduous',
        growthRate: 'Fast Growth',
        height: '20 ft',
        lifespan: '60 years',
        habitat: 'Forest understory'
    }),
    new Tree('Eastern Redbud', 'easternre.png', {
        type: 'Deciduous',
        growthRate: 'Moderate Growth',
        height: '30 ft',
        lifespan: '75 years',
        habitat: 'Forest understory'
    }),
    new Tree('Loblolly Pine', 'lblolly.png', {
        type: 'Evergreen',
        growthRate: 'Fast Growth',
        height: '50 ft',
        lifespan: '100 years',
        habitat: 'Forest'
    }),
    new Tree('Southern Magnolia', 'magnolia.png', {
        type: 'Evergreen',
        growthRate: 'Slow Growth',
        height: '40 ft',
        lifespan: '80 years',
        habitat: 'Forest understory'
    })
    // Add additional trees as needed
];

// Function to show tree details in a modal
function showDetails(treeName) {
    const tree = trees.find(tree => tree.name === treeName);
    const modal = document.getElementById('treeModal');
    const treeDetailsDiv = document.getElementById('treeDetails');
    const treeImage = document.getElementById('treeImage');

    treeDetailsDiv.innerHTML = `
        <h2>${tree.name}</h2>
        <p><strong>Type:</strong> ${tree.details.type}</p>
        <p><strong>Growth Rate:</strong> ${tree.details.growthRate}</p>
        <p><strong>Height:</strong> ${tree.details.height}</p>
        <p><strong>Lifespan:</strong> ${tree.details.lifespan}</p>
        <p><strong>Habitat:</strong> ${tree.details.habitat}</p>
        <p>${tree.details.description}</p>
    `;
    treeImage.src = `images/${tree.image}`;
    treeImage.alt = tree.name;
    modal.style.display = 'block';
}

// Close the modal when the close button is clicked
function closeModal() {
    document.getElementById('treeModal').style.display = 'none';
}

// Event listeners for modal close actions
window.onload = function() {
    const closeButton = document.getElementsByClassName('close')[0];
    closeButton.onclick = closeModal;

    window.onclick = function(event) {
        const modal = document.getElementById('treeModal');
        if (event.target == modal) {
            closeModal();
        }
    };

    // Append the tree sections to the container
    const treeContainer = document.getElementById('treeContainer');
    trees.forEach(tree => {
        treeContainer.innerHTML += tree.getSection();
    });
};
