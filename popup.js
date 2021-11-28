const tones = document.getElementById("tonesInput");
const saveButton = document.getElementById("save");

saveButton.addEventListener("click", async () => {
  chrome.storage.sync.set("tonesInput", ({ tonesInput }) => {
    tones.style.backgroundColor = tonesInput;
  });

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => transposer(Number(tones.textContent)),
  });
});
