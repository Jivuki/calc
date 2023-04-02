function calculateSquareFeet() {
  // Get the values entered in the input fields
  var widthInputs = document.getElementsByClassName("width");
  var lengthInputs = document.getElementsByClassName("length");
  var sqftPrice = parseFloat(document.getElementById("sqftPrice").value);

  // Calculate square footage and total cost
  var squareFeet = 0;
  for (var i = 0; i < widthInputs.length && i < lengthInputs.length; i++) {
    var width = parseFloat(widthInputs[i].value);
    var length = parseFloat(lengthInputs[i].value);
    if (!isNaN(width) && !isNaN(length)) {
      squareFeet += width * length;
    }
  }

  // Display the square feet result in the HTML
  document.getElementById("squareFeetResult").innerText = squareFeet.toFixed(2);

  // Calculate and display the total price only if sqftPrice is not NaN
  if (!isNaN(sqftPrice)) {
    var totalPrice = sqftPrice * squareFeet;
    document.getElementById("totalPriceResult").innerText = '$' + totalPrice.toFixed(2);
  } else {
    document.getElementById("totalPriceResult").innerText = '';
  }
}

function calculateLinearFeet() {
  // Get the values entered in the input fields
  var baseboardLength = parseFloat(document.getElementById("baseboardLength").value);
  var installationPrice = parseFloat(document.getElementById("linearFtPrice").value);

  // Calculate linear feet and total cost
  var linearFeet = 0;
  var totalPrice = 0;
  if (!isNaN(baseboardLength) && !isNaN(installationPrice)) {
    linearFeet = baseboardLength;
    totalPrice = baseboardLength * installationPrice;
  }

  // Display the results in the HTML
  document.getElementById("linearFeetResult").innerText = '';
  document.getElementById("totalPriceLabel").innerText = '';
 
  if (totalPrice > 0) {
    document.getElementById("totalPriceLabel").innerText = 'Total Price: $' + totalPrice.toFixed(2);
  }
}

function calculateStairsInstallation() {
  var steps = parseInt(document.getElementById("steps").value);
  var risers = parseInt(document.getElementById("risers").value);
  var stairsInstallation = steps + risers;
  document.getElementById("stairsInstallationResult").innerText = stairsInstallation;
}

function addDimensionRow() {
  var table = document.getElementById("dimensionsTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = '<div class="form-group"><label for="width">Width (feet):</label><input type="number" class="width" step="0.01"></div>';
  cell2.innerHTML = '<div class="form-group"><label for="length">Length (feet):</label><input type="number" class="length" step="0.01"></div>';
}

function calculateSqFtPrice() {
  var sqftPrice = parseFloat(document.getElementById("sqftPrice").value);
  var squareFeet = parseFloat(document.getElementById("squareFeetResult").textContent);
  if (!isNaN(sqftPrice) && !isNaN(squareFeet)) {
    var totalPrice = sqftPrice * squareFeet;
    document.getElementById("totalPriceResult").textContent = "$" + totalPrice.toFixed(2);
  }
}

function calculateLFtPrice() {
  var installationPrice = parseFloat(document.getElementById("linearFtPrice").value);
  var linearFeet = parseFloat(document.getElementById("baseboardLength").value);
  if (!isNaN(installationPrice) && !isNaN(linearFeet)) {
    var totalPrice = installationPrice * linearFeet;
    document.getElementById("totalPriceResultLFt").textContent = "$" + totalPrice.toFixed(2);
  }
}

function calculateStepPrice() {
  var steps = parseInt(document.getElementById("steps").value);
  var stepPrice = parseFloat(document.getElementById("stepPrice").value);

  if (!isNaN(steps) && !isNaN(stepPrice)) {
    var totalPrice = steps * stepPrice;
    document.getElementById("stepsInstallationResult").innerText = '$' + totalPrice.toFixed(2);
  }
}

function calculateRiserPrice() {
  var risers = parseInt(document.getElementById("risers").value);
  var riserPrice = parseFloat(document.getElementById("riserPrice").value);

  if (!isNaN(risers) && !isNaN(riserPrice)) {
    var totalPrice = risers * riserPrice;
    document.getElementById("risersInstallationResult").innerText = '$' + totalPrice.toFixed(2);
  }
}

function calculateStairsTotal() {
  var stepsInstallation = parseFloat(document.getElementById("stepsInstallationResult").innerText.replace('$', ''));
  var risersInstallation = parseFloat(document.getElementById("risersInstallationResult").innerText.replace('$', ''));

  if (isNaN(stepsInstallation)) stepsInstallation = 0;
  if (isNaN(risersInstallation)) risersInstallation = 0;

  var stairsTotal = stepsInstallation + risersInstallation;

  document.getElementById("stairsTotalResult").innerText = '$' + stairsTotal.toFixed(2);
}

function calculateSandingJobPrice() {
  var refinishingPrice = parseFloat(document.getElementById("refinishingPrice").value);
  var squareFeet = parseFloat(document.getElementById("squareFeetResult").textContent);
  if (!isNaN(refinishingPrice) && !isNaN(squareFeet)) {
    var totalPrice = refinishingPrice * squareFeet;
    document.getElementById("sandingJobResult").textContent = "$" + totalPrice.toFixed(2);
  }
}

function calculateFlooringTotal() {
  var installationTotal = parseFloat(document.getElementById("totalPriceResult").innerText.replace('$', ''));
  var sandingJobTotal = parseFloat(document.getElementById("sandingJobResult").innerText.replace('$', ''));

  if (isNaN(installationTotal)) installationTotal = 0;
  if (isNaN(sandingJobTotal)) sandingJobTotal = 0;

  var flooringTotal = installationTotal + sandingJobTotal;

  document.getElementById("flooringTotal").value = flooringTotal.toFixed(2);
}
