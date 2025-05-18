console.log("Script loaded");
// Function to fetch portfolio data from an API or a local JSON file
// Example portfolio data
const portfolioData = [
    {
        "name": "Project 1",
        "description": "Description of Project 1",
        "image": "path/to/image1.jpg",
        "link": "https://example.com/project1"
    },
    {
        "name": "Project 2",
        "description": "Description of Project 2",
        "image": "path/to/image2.jpg",
        "link": "https://example.com/project2"
    }
];
// Replace the portfolioData object with this:
async function fetchPortfolioData() {
    try {
        const response = await fetch('https://your-api-endpoint.com/portfolio');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching portfolio data:", error);
        return null;
    }
}

// Then modify the DOMContentLoaded event:
document.addEventListener('DOMContentLoaded', async function() {
    const portfolioData = await fetchPortfolioData();
    if (!portfolioData) return;
    
    // Rest of your code...
});