// JavaScript for Dynamic Project Details
const projects = {
  TerraTrust: "A blockchain-based platform focusing on secure transactions.",
  JosHomes: "A house booking platform for students and residents in Plateau State.",
  MediSense: "AI-powered solution for early disease detection using wearable data.",
};

function showProjectDetails(projectName) {
  const details = document.getElementById('project-details');
  document.getElementById('project-title').innerText = projectName;
  document.getElementById('project-description').innerText = projects[projectName];
  details.style.display = 'block';
}

function closeProjectDetails() {
  document.getElementById('project-details').style.display = 'none';
}
