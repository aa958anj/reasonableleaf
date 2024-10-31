  async function updateLeafColor() {
    const location = document.getElementById("location").value;
    const date = new Date(document.getElementById("date").value);
    const leafElement = document.getElementById("leaf");
    const month = date.getMonth() + 1;
  
    try {
      const response = await fetch("data/leaf-colors.json");
      const colorData = await response.json();
  
      const color = colorData[location]?.[month] || "#228B22"; // Default to green if not found
      leafElement.style.color = color;
    } catch (error) {
      console.error("Error loading leaf color data:", error);
    }
  }
  