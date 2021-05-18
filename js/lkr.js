document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function() {
    document.getElementById('buttonContainer').classList.remove('fade');
    document.getElementById('logoContainer').classList.remove('fade');
  }, 230);
});

function join(){
  document.getElementById('joinLayer').classList.add("fullHeight");
  document.getElementById('joinLayerContent').classList.add("opacityFull");
}
function closeJoin(){
  document.getElementById('joinLayer').classList.remove("fullHeight");
  document.getElementById('joinLayerContent').classList.remove("opacityFull");
}
