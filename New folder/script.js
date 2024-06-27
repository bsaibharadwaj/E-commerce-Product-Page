document.addEventListener('DOMContentLoaded', () => {
    // Product Information
    const productName = 'Fastrack Men Leather Fastfit Analog Black Dial Watch';
    const productDescription = '5 ATM/50 m Water resistance, Leather Strap, Stainless steel back cover. High precision quartz analogue movement.';
    const productPrice = '$21.99';
    const productImageSrc = 'watch.jpg'; // Adjust the image path as necessary

    // Updating the HTML elements with product information
    document.getElementById('productName').textContent = productName;
    document.getElementById('productDescription').textContent = productDescription;
    document.getElementById('productPrice').textContent = productPrice;
    document.getElementById('productImage').src = productImageSrc;

    // Adding event listener to the CTA button
    document.getElementById('ctaButton').addEventListener('click', () => {
        alert('Added to cart!');
    });
});
