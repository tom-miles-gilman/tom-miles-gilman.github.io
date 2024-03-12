document.addEventListener('DOMContentLoaded', fetchHousePlans);

async function fetchHousePlans() {
    try {
        const response = await fetch('https://portiaportia.github.io/json/house-plans.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const housePlans = await response.json();
        displayHousePlans(housePlans);
    } catch (error) {
        console.error('Error fetching house plans:', error);
    }
}

function displayHousePlans(housePlans) {
    const container = document.getElementById('container');
    if (!container) {
        console.error('Container element not found');
        return;
    }

    container.innerHTML = ''; // Clear previous content

    housePlans.forEach(plan => {
        const houseElement = document.createElement('div');
        houseElement.className = 'house';

        const houseName = document.createElement('h2');
        houseName.textContent = plan.name;
        houseElement.appendChild(houseName);

        const mainImage = document.createElement('img');
        mainImage.src = `https://portiaportia.github.io/json/images/house-plans/${plan.main_image}`;
        mainImage.alt = plan.name;
        mainImage.classList.add('main-house-image'); // Use this class for specific styling
        houseElement.appendChild(mainImage);

        const details = document.createElement('div');
        details.className = 'details';

        const size = document.createElement('p');
        size.textContent = `Size: ${plan.size} square feet`;
        details.appendChild(size);

        const bedrooms = document.createElement('p');
        bedrooms.textContent = `Bedrooms: ${plan.bedrooms}`;
        details.appendChild(bedrooms);

        const bathrooms = document.createElement('p');
        bathrooms.textContent = `Bathrooms: ${plan.bathrooms}`;
        details.appendChild(bathrooms);

        const featuresList = document.createElement('ul');
        plan.features.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.textContent = feature;
            featuresList.appendChild(featureItem);
        });
        details.appendChild(featuresList);

        houseElement.appendChild(details);

        const floorPlansSection = document.createElement('div');
        floorPlansSection.className = 'floor-plans';

        plan.floor_plans.forEach(floorPlan => {
            const floorPlanDiv = document.createElement('div');
            floorPlanDiv.className = 'floor-plan';

            const floorPlanName = document.createElement('h3');
            floorPlanName.textContent = floorPlan.name;
            floorPlanDiv.appendChild(floorPlanName);

            const floorPlanImage = document.createElement('img');
            floorPlanImage.src = `https://portiaportia.github.io/json/images/house-plans/${floorPlan.image}`;
            floorPlanImage.alt = `${plan.name} - ${floorPlan.name}`;
            floorPlanImage.classList.add('floor-plan-image'); // Use this class for specific styling
            floorPlanDiv.appendChild(floorPlanImage);

            floorPlansSection.appendChild(floorPlanDiv);
        });

        houseElement.appendChild(floorPlansSection);
        container.appendChild(houseElement);
    });
}
