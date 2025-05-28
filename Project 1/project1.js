function changeBackgroundColor() {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    // Change the background color
    document.body.style.backgroundColor = randomColor
    // Update the color code display
    document.getElementById('colorCode').textContent = randomColor.toUpperCase();
}
