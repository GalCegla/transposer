
const tones = document.getElementById("tonesInput");
const saveButton = document.getElementById("save");

saveButton.disabled = true;

tones.addEventListener("input", () => {
    const value = tones.value;
    if(Number(value) > 5.5 || Number(value) < -5.5 || value == "") {
        saveButton.disabled = true;
    } else {
        saveButton.disabled = false;
    }
})

saveButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, tones.value)
  });

});
