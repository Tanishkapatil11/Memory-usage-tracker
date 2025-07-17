function loadMemoryInfo() {
  chrome.system.memory.getInfo((memory) => {
    const used = (
      (memory.capacity - memory.availableCapacity) /
      (1024 * 1024 * 1024)
    ).toFixed(2);
    const total = (memory.capacity / (1024 * 1024 * 1024)).toFixed(2);
    const usagePercentage = ((used / total) * 100).toFixed(0);

    let statusColor = "green";
    if (usagePercentage > 80) statusColor = "red";
    else if (usagePercentage > 60) statusColor = "orange";

    document.getElementById("memoryInfo").innerHTML = `
      <p><strong>Used:</strong> ${used} GB</p>
      <p><strong>Total:</strong> ${total} GB</p>
      <p><strong>Usage:</strong> <span style="color:${statusColor};">${usagePercentage}%</span></p>
    `;

    const bar = document.getElementById("progressBar");
    bar.style.width = `${usagePercentage}%`;
    bar.style.backgroundColor = statusColor;
  });
}

function loadTabsToClose() {
  chrome.tabs.query({}, (tabs) => {
    const tabListDiv = document.getElementById("tabList");
    tabListDiv.innerHTML = "<h3>Open Tabs:</h3>";
    tabs.forEach((tab) => {
      const div = document.createElement("div");
      div.style.marginBottom = "8px";
      div.innerHTML = `
        <p><strong>${tab.title}</strong></p>
        <button onclick="chrome.tabs.remove(${tab.id})">Close Tab</button>
      `;
      tabListDiv.appendChild(div);
    });
  });
}

document.getElementById("refreshBtn").addEventListener("click", loadMemoryInfo);
document
  .getElementById("freeMemoryBtn")
  .addEventListener("click", loadTabsToClose);

loadMemoryInfo();
