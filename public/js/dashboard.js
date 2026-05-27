const deploymentCounter = document.querySelector(".deployments");

const uptimeCounter = document.querySelector(".uptime");

const requestsCounter = document.querySelector(".requests");

let deployments = 0;

let uptime = 0;

let requests = 0;

function updateDashboard() {
  if (deployments < 125) {
    deployments++;
    deploymentCounter.innerText = deployments + "+";
  }

  if (uptime < 99.99) {
    uptime += 0.1;
    uptimeCounter.innerText = uptime.toFixed(2) + "%";
  }

  if (requests < 10) {
    requests++;
    requestsCounter.innerText = requests + "M+";
  }
}

setInterval(updateDashboard, 50);