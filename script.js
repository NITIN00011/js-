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