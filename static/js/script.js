document.addEventListener("DOMContentLoaded", function() {
    const map = L.map('map', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2, // Restrict minimum zoom level
        maxBounds: [[90, -180], [-90, 180]] // Restricting map to the whole world
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const circles = [
        { coords: [40, -100], label: 'North America', spots: 50, continent: 'north-america', color: 'blue' },
        { coords: [-15, -60], label: 'South America', spots: 50, continent: 'south-america', color: 'lightblue' },
        { coords: [50, 10], label: 'Europe', spots: 70, continent: 'europe', color: 'darkblue' },
        { coords: [10, 20], label: 'Africa', spots: 50, continent: 'africa', color: 'red' },
        { coords: [30, 100], label: 'Asia', spots: 50, continent: 'asia', color: 'lightgreen' },
        { coords: [-25, 140], label: 'Oceania', spots: 70, continent: 'oceania', color: 'purple' }
    ];

    circles.forEach(circle => {
        const icon = L.divIcon({
            className: 'leaflet-div-icon',
            html: `<div>${circle.label}</div><div>+${circle.spots}</div>`,
            iconSize: [60, 60]
        });

        L.marker(circle.coords, { icon: icon }).addTo(map)
        .on('click', function() {
            window.location.href = `/continent/${circle.continent}`;
        });
    });
});
