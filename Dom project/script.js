
document.addEventListener("DOMContentLoaded", () => {
  
  const nameInput = document.getElementById("nameInput");
  const bioInput = document.querySelector("#bioInput");
  const hobbyInput = document.getElementById("hobbyInput");
  const addHobbyBtn = document.getElementById("addHobbyBtn");
  const toggleModeBtn = document.getElementById("toggleModeBtn");

  const profileName = document.getElementById("profileName");
  const profileBio = document.getElementById("profileBio");
  const hobbyList = document.getElementById("hobbyList");
  const profileCard = document.getElementById("profileCard");

 

  nameInput.addEventListener("input", () => {
    profileName.textContent = nameInput.value || "Your Name";
  });

 
  bioInput.addEventListener("change", () => {
    profileBio.textContent = bioInput.value || "Your bio will appear here...";
  });

  
  addHobbyBtn.addEventListener("click", () => {
    addHobby();
  });


  hobbyInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addHobby();
    }
  });
 
  function addHobby() {
    const hobbyText = hobbyInput.value.trim();
    if (hobbyText === "") return;

   
    const li = document.createElement("li");
    li.textContent = hobbyText;

   
    li.addEventListener("mouseover", () => {
      li.style.backgroundColor = "#f0f0f0";
    });
    li.addEventListener("mouseout", () => {
      li.style.backgroundColor = "";
    });

    li.addEventListener("dblclick", () => {
      li.remove();
    });

    
    hobbyList.appendChild(li);

    
    hobbyInput.value = "";
  }

  
  toggleModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
 
  const style = document.createElement("style");
  style.textContent = `
    body { font-family: Arial, sans-serif; padding: 20px; }
    .card { border: 1px solid #ccc; padding: 20px; border-radius: 10px; width: 300px; }
    .dark { background-color: #222; color: white; }
    .dark .card { border-color: white; }
    button { margin-top: 5px; }
  `;
  document.head.appendChild(style);
});
