<script>
  // Function to update the position of the floating squares based on the mouse movement
  function updateSquaresPosition(event) {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      square.style.left = `${x}%`;
      square.style.top = `${y}%`;
    });
  }

  // Event listener to track mouse movement and update squares position
  document.addEventListener('mousemove', updateSquaresPosition);
</script>