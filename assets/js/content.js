
// PORTFOLIO
// completeApps data
const completeAppsData = [
  {
    title: "Apps Title",
    description: "Apps Description",
    stack: "TECH STACK",
    image: "./assets/img/comingsoon.png",
    link1: "https://link-to-project1.com",
    link2: "https://link-to-project1.com",
  },
  // Tambahkan proyek lainnya seperti di atas
];

// Tampilkan konten completeApps ke dalam elemen dengan ID "completeApps"
document.addEventListener("DOMContentLoaded", function () {
  const completeAppsContainer = document.getElementById("completeApps");

  // Gunakan map() untuk meloop melalui objek completeAppsData
  const completeAppsHTML = completeAppsData.map((project) => {
    return `
      <div class="project">
          <img src="${project.image}" alt="${project.title}">
          <p class="stack">${project.stack}</p>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-btn">
              <a href="${project.link1}" target="_blank">GitHub <~></a>
              <a href="${project.link2}" target="_blank">Live <~></a>
          </div>
      </div>
    `;
  }).join(""); // Gunakan join("") untuk menggabungkan hasil map() menjadi satu string

  // Tampilkan konten completeApps ke dalam elemen dengan ID "completeApps"
  completeAppsContainer.innerHTML = completeAppsHTML;
});


// smallProjects data
const smallProjectsData = [

  {
    title: "Navigation Bar with Indicator",
    description: "Navigation Bar with Indicator using HTML CSS and JavaScript.",
    stack: "HTML CSS JAVASCRIPT",
    link1: "https://github.com/gtkrshnaaa/Navigation-Bar-with-Indicator.git",
    link2: "https://gtkrshnaaa.github.io/Navigation-Bar-with-Indicator/",
  },
  {
    title: "QR Code Generator",
    description: "QR Code Generator using HTML CSS and JavaScript.",
    stack: "HTML CSS JAVASCRIPT",
    link1: "https://github.com/gtkrshnaaa/QR-Code-Generator.git",
    link2: "https://gtkrshnaaa.github.io/QR-Code-Generator/",
  },
  {
    title: "Drag and Drop Image",
    description: "Drag and Drop Image using HTML CSS and JavaScript.",
    stack: "HTML CSS JAVASCRIPT",
    link1: "https://github.com/gtkrshnaaa/Drag-and-Drop-Image.git",
    link2: "https://gtkrshnaaa.github.io/Drag-and-Drop-Image/",
  },
  // Tambahkan proyek lainnya seperti di atas
];

// Tampilkan konten smallProjects ke dalam elemen dengan ID "smallProjects"
document.addEventListener("DOMContentLoaded", function () {
  const smallProjectsContainer = document.getElementById("smallProjects");

  // Gunakan map() untuk meloop melalui objek smallProjectsData
  const smallProjectsHTML = smallProjectsData.map((project) => {
    return `
      <div class="project">
          <p class="stack">${project.stack}</p>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-btn">
              <a href="${project.link1}" target="_blank">GitHub <~></a>
              <a href="${project.link2}" target="_blank">Live <~></a>
          </div>
      </div>
    `;
  }).join(""); // Gunakan join("") untuk menggabungkan hasil map() menjadi satu string

  // Tampilkan konten smallProjects ke dalam elemen dengan ID "smallProjects"
  smallProjectsContainer.innerHTML = smallProjectsHTML;
});


//SKILLS
// skills data
const skillsData = [
  {
    category: "Languages",
    list: "JavaScript JAVA Python",
  },
  {
    category: "Databases",
    list: "MongoDB MySQL",
  },
  {
    category: "Tools",
    list: "VSCode Git",
  },
  {
    category: "Frameworks",
    list: "React Next.js Expres.js",
  },
  {
    category: "Other",
    list: "HTML CSS EJS",
  },
  
  // Tambahkan skill lainnya seperti di atas
];

// Tampilkan konten skills ke dalam elemen dengan ID "skills"
document.addEventListener("DOMContentLoaded", function () {
  const skillsContainer = document.getElementById("listSkills");

  // Gunakan map() untuk meloop melalui objek skillsData
  const skillsHTML = skillsData.map((skills) => {
    return `
      <div class="list-skills-box">
        <h3>${skills.category}</h3>
        <p>${skills.list}</p>
      </div>
    `;
  }).join(""); // Gunakan join("") untuk menggabungkan hasil map() menjadi satu string

  // Tampilkan konten skills ke dalam elemen dengan ID "skills"
  skillsContainer.innerHTML = skillsHTML;
});
