// Sample data for services
const servicesData = [
    { name: 'Service 1', description: 'Description for Service 1' },
    { name: 'Service 2', description: 'Description for Service 2' },
    { name: 'Service 3', description: 'Description for Service 3' },
];

// Function to dynamically create service cards
function createServiceCard(service) {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service');
    serviceCard.innerHTML = `
        <h2>${service.name}</h2>
        <p>${service.description}</p>
    `;
    return serviceCard;
}

// Add services to the DOM
const servicesContainer = document.getElementById('services-container');
servicesData.forEach(service => {
    const serviceCard = createServiceCard(service);
    servicesContainer.appendChild(serviceCard);
});