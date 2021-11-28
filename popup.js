import { transposer } from "./chord_transposer";

const tones = document.getElementById("tonesInput");
console.log("hello");
const saveButton = document.getElementById("save");

saveButton.addEventListener("click", async () => {
  chrome.storage.sync.set("tonesInput", ({ tonesInput }) => {
    tones.style.backgroundColor = tonesInput;
  });

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: transpose,
  });
});

function transpose() {
  chrome.storage.sync.get("tonesInput", ({ tonesInput }) => {
    transposer(tonesInput, document);
  });
}
