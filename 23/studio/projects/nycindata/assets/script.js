fetch('assets/collection.json')
  .then(response => response.json())
  .then(data => {
    // Sort the data array based on the "score" property
    data.sort((a, b) => b.SCORE - a.SCORE);
    
    let output = "";
    data.forEach(item => {
      output += `
        <div>
          <p>${item.DBA}</p>
          <p>Grade: ${item.GRADE}</p>
          <p>Score: ${item.SCORE}</p>
        </div>
      `;
    });
    document.getElementById('container').innerHTML = output;
  })
  .catch(error => console.error(error));
