import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_XoHZeoLvvXx9jP0MYXOaPW40KFSccyd8nCUdDjyK"
);

convertCurrency("INR", "USD", 3);

 export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const multiplier = res.data[toCurrency];
  return multiplier * units;
}


// freecurrencyapi
//   .latest({
//     base_currency: "USD",
//     currencies: "INR",
//   })
//   .then((response) => {
//     console.log(response);
//   });
