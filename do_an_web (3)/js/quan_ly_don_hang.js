  // Mock data for demonstration purposes
       const totalOrders = 10;
    const ordersPerPage = 3;

    // Function to generate pagination links
    function generatePaginationLinks() {
      const totalPages = Math.ceil(totalOrders / ordersPerPage);
      const paginationContainer = document.getElementById('pagination');

      for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = i;

        // Add click event listener to each pagination link
        link.addEventListener('click', function () {
          // Implement logic to fetch and display orders for the clicked page
          alert('Page ' + i + ' clicked!');
        });

        paginationContainer.appendChild(link);
      }
    }

    // Call the function to generate pagination links
    generatePaginationLinks();