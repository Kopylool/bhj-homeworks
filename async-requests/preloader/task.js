document.addEventListener("DOMContentLoaded", function() {
    let loader = document.getElementById("loader");
    let items = document.getElementById("items");
  
    const renderCurrency = (currencyCode, value) => {
      return `
        <div class="item__code">
            ${currencyCode}
        </div>
        <div class="item__value">
            ${value}
        </div>
        <div class="item__currency">
            руб.
        </div>
      `;
    };
  
    const displayCurrencies = currencies => {
      items.innerHTML = '';
  
      for (const [, currency] of Object.entries(currencies.Valute)) {
        const currencyHtml = renderCurrency(currency.CharCode, currency.Value);
        items.insertAdjacentHTML('beforeend', currencyHtml);
      }
    };
  
    const fetchData = () => {
      fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
        .then(response => response.json())
        .then(data => {
  
          displayCurrencies(data.response);
  
          localStorage.setItem('currencies', JSON.stringify(data.response));
  
          loader.classList.remove("loader_active");
        })
        .catch(error => {
          console.error("Error while fetching data:", error);
        });
    };
  
    const cachedCurrencies = localStorage.getItem('currencies');
  
    if (cachedCurrencies) {
      displayCurrencies(JSON.parse(cachedCurrencies));
    }
  
    fetchData();
  });
  