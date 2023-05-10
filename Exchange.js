const apiKey = "9adb02bbad5f449d974ba4a6357403c3";
      const baseURL = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

      const formulario = document.querySelector("#formulario-conversor");
      const resultadoDiv = document.getElementById("resultado");

      formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const cantidad = document.querySelector("#cantidad").value;
        const monedaDesde = document.querySelector("#moneda-desde").value;
        const monedaHacia = document.querySelector("#moneda-hacia").value;

        const url = `${baseURL}&symbols=${monedaDesde},${monedaHacia}`;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const tasaCambio =
              data.rates[monedaHacia] / data.rates[monedaDesde];
            const resultado = (cantidad * tasaCambio).toFixed(2);
            resultadoDiv.textContent = `${cantidad} ${monedaDesde} son ${resultado} ${monedaHacia}`;
          })
          .catch((error) => {
            resultadoDiv.textContent =
              "Error al obtener la tasa de cambio. Por favor, intenta de nuevo más tarde.";
            console.log(error);
          });
      });