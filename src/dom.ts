document.getElementById("holder").addEventListener("drop", e => {
  e.preventDefault();
  e.stopPropagation();
  const { dataTransfer } = e;
  if (dataTransfer.files) {
    const processFile = require("./processFile");
    // due to dataTransfer not exposing iterator
    // @ts-ignore
    for (const f of dataTransfer.files) {
      processFile(f.path);
    }
  }
});

document.getElementById("holder").addEventListener("dragover", e => {
  e.preventDefault();
  e.stopPropagation();
});
