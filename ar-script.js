window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const lat = urlParams.get("lat");
  const lon = urlParams.get("lon");

  var entityEl = document.querySelector("#ar-object");
  entityEl.setAttribute(
    "gps-entity-place",
    `latitude: ${lat}; longitude: ${lon};`
  );

  // Your 3D model goes here.
  entityEl.innerHTML = `
	<a-box color="#4CC3D9"></a-box>`;
};
