fetch('assets/collection.json')
  .then(response => response.json())
  .then(data => {
    const sortedData = data.sort((a, b) => {
      if (a["CUISINE DESCRIPTION"] < b["CUISINE DESCRIPTION"]) {
        return -1;
      }
      if (a["CUISINE DESCRIPTION"] > b["CUISINE DESCRIPTION"]) {
        return 1;
      }
      return 0;
    });

    const result = [];

    let currentCuisine = null;
    for (let i = 0; i < sortedData.length; i++) {
      const item = sortedData[i];

      if (item["CUISINE DESCRIPTION"] !== currentCuisine) {
        currentCuisine = item["CUISINE DESCRIPTION"];
      }

      result.push(item);
    }

    const navItems = document.querySelectorAll("nav ul li a");

    navItems.forEach(navItem => {
        navItem.addEventListener("click", event => {
          event.preventDefault();
          const cuisineId = navItem.getAttribute("href").replace("#", "");
          const cuisineDescription = document.getElementById(cuisineId);
          const offset = 100; // set the offset to 100 pixels
          const topPos = cuisineDescription.getBoundingClientRect().top;
          window.scrollBy({ top: topPos - offset, behavior: "smooth" });
        });
      });
    const container = document.getElementById("data-container");
    result.forEach(item => {
        if (item === "CUISINE DIVIDER") {
          // Add a line break
          const lineBreak = document.createElement("hr");
          container.appendChild(lineBreak);
        } else {
          // Create a new grid item for the current item
          const row = document.createElement("div");
          row.classList.add("row");
      
          const square = document.createElement("div");
          square.classList.add("grid-item");
          square.classList.add(item["CUISINE DESCRIPTION"].replace(/ /g, "-"));
          square.classList.add("clickable");
      
          // Add a CSS class based on the cuisine ID
          square.classList.add("cuisine-" + item["CUISINE DESCRIPTION"]);
      
          const dba = document.createElement("div");
          dba.classList.add("dba");
          dba.textContent = item["DBA"];
          square.appendChild(dba);
      
          const cuisineDesc = document.createElement("div");
          cuisineDesc.classList.add("cuisine-description");
          cuisineDesc.setAttribute("id", item["CUISINE DESCRIPTION"].replace(/ /g, "-"));
          cuisineDesc.setAttribute("data-tooltip", "They serve " + item["CUISINE DESCRIPTION"] + " food.");
          cuisineDesc.textContent = "They serve " + item["CUISINE DESCRIPTION"] + " food.";
          square.appendChild(cuisineDesc);

          const grade = document.createElement("div");
          grade.classList.add("cuisine-description");
          grade.textContent = "Grade: " + item["GRADE"];
          square.appendChild(grade);

          const date = document.createElement("div");
          date.classList.add("cuisine-description");
          date.textContent = "Inspected on: " + item["INSPECTION DATE"];
          square.appendChild(date);

          square.addEventListener("click", () => {
            const phone = document.createElement("div");
            phone.classList.add("phone");
            phone.textContent = "Call " + item["PHONE"] + " to make reservation today!";
            document.body.appendChild(phone);
            
            setTimeout(() => {
              phone.style.animation = "move-phone 30s linear";
              setTimeout(() => {
                document.body.removeChild(phone);
              }, 10000);
            }, );
        });
      
          row.appendChild(square);
          container.appendChild(row);
      
          if (item["VIOLATION DESCRIPTION"].toLowerCase().includes("rats")) { 
            square.addEventListener("click", () => moveRat());
          }

          if (item["VIOLATION DESCRIPTION"].toLowerCase().includes("mice")) { 
            square.addEventListener("click", () => moveMice());
          }

          if (item["VIOLATION DESCRIPTION"].toLowerCase().includes("roaches")) { 
            square.addEventListener("click", () => moveRoach());
          }
        }
      });
      
      function moveRat() {
        const rat = document.createElement("img");
        rat.setAttribute("src", "assets/rat.png");
        rat.setAttribute("alt", "rat");
        rat.setAttribute("class", "rat");
        document.body.appendChild(rat);

      
        setTimeout(() => {
          rat.style.animation = "move-rat 18s linear";
          setTimeout(() => {
            document.body.removeChild(rat);
          }, 3000);
        }, 0);
      }

      function moveMice() {
        const mice = document.createElement("img");
        mice.setAttribute("src", "assets/mice.png");
        mice.setAttribute("alt", "mice");
        mice.setAttribute("class", "mice");
        document.body.appendChild(mice);
      
        setTimeout(() => {
          mice.style.animation = "move-mice 18s linear";
          setTimeout(() => {
            document.body.removeChild(mice);
          }, 3000);
        }, 0);
      }
      
      function moveRoach() {
        const roach = document.createElement("img");
        roach.setAttribute("src", "assets/roach.png");
        roach.setAttribute("alt", "roach");
        roach.setAttribute("class", "roach");
        document.body.appendChild(roach);
      
        setTimeout(() => {
          roach.style.animation = "move-roach 18s linear";
          setTimeout(() => {
            document.body.removeChild(roach);
          }, 3000);
        }, 0);
      }
  })
  .catch(error => {
    console.error(error);})
