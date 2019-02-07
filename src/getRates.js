function getRates() {
  fetch(`https://api.exchangeratesapi.io/latest`)
    .then(result => {
      console.log(result);
      return result.json();
    })
    .then(data => {
      console.log(data);
      const rates = data.rates;
      console.log(rates);
    })
    .catch(error => console.log(error));
}
getRates();
