// import { transposer } from "./chord_transposer";

// const tones = document.getElementById("tonesInput");
// const saveButton = document.getElementById("save");

// saveButton.addEventListener("click", async () => {
//   saveButton.textContent = "shot";
//   console.log(tones.textContent);
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: () => transposer(Number(tones.textContent)),
//   });
// });
