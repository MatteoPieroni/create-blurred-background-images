document.getElementById("holder").addEventListener("drop", e => {
  e.preventDefault();
  e.stopPropagation();
  if (e.dataTransfer.files) {
    const processFile = require("./processFile");
    for (const f of e.dataTransfer.files) {
      processFile(f.path);
    }
  }
});
document.getElementById("holder").addEventListener("dragover", e => {
  e.preventDefault();
  e.stopPropagation();
});
