const currencies = {
    "USD": {"name":"US Dollar","symbol":"$"},
    "AED": {"name":"United Arab Emirates Dirham","symbol":"إ.د"},
    "AFN": {"name":"Afghan Afghani","symbol":"؋"},
    "ALL": {"name":"Albanian Lek","symbol":"Lek"},
    "AMD": {"name":"Armenian Dram","symbol":"֏"},
    "ANG": {"name":"Netherlands Antillean Guilder","symbol":"ƒ"},
    "AOA": {"name":"Angolan Kwanza","symbol":"Kz"},
    "ARS": {"name":"Argentine Peso","symbol":"$"},
    "AUD": {"name":"Australian Dollar","symbol":"$"},
    "AWG": {"name":"Aruban Florin","symbol":"ƒ"},
    "AZN": {"name":"Azerbaijani Manat","symbol":"m"},
    "BAM": {"name":"Bosnia-Herzegovina Convertible Mark","symbol":"KM"},
    "BBD": {"name":"Barbados Dollar", "symbol": "Bds$"},
    "BDT": {"name":"Bangladeshi Taka","symbol":"৳"},
    "BGN": {"name":"Bulgarian Lev","symbol":"Лв."},
    "BHD": {"name":"Bahraini Dinar","symbol":".د.ب"},
    "BIF": {"name":"Burundian Franc","symbol":"FBu"},
    "BMD": {"name":"Bermudan Dollar","symbol":"$"},
    "BND": {"name":"Brunei Dollar","symbol":"B$"},
    "BOB": {"name":"Bolivian Boliviano","symbol":"Bs."},
    "BRL": {"name":"Brazilian Real","symbol":"R$"},
    "BSD": {"name":"Bahamian Dollar","symbol":"B$"},
    "BTN": {"name":"Bhutanese Ngultrum","symbol":"Nu."},
    "BWP": {"name":"Botswanan Pula","symbol":"P"},
    "BYN": {"name":"Belarusian Ruble","symbol":"Br"},
    "BZD": {"name":"Belize Dollar","symbol":"$"},
    "CAD": {"name":"Canadian Dollar","symbol":"$"},
    "CDF": {"name":"Congolese Franc","symbol":"FC"},
    "CHF": {"name":"Swiss Franc","symbol":"CHf"},
    "CLP": {"name":"Chilean Peso","symbol":"$"},
    "CNY": {"name":"Chinese Yuan","symbol":"¥"},
    "COP": {"name":"Colombian Peso","symbol":"$"},
    "CRC": {"name":"Costa Rican ColÃ³n","symbol":"₡"},
    "CUP": {"name":"Cuban Convertible Peso","symbol":"$, CUC"},
    "CVE": {"name":"Cape Verdean Escudo","symbol":"$"},
    "CZK": {"name":"Czech Republic Koruna","symbol":"Kč"},
    "DJF": {"name":"Djiboutian Franc","symbol":"Fdj"},
    "DKK": {"name":"Danish Krone","symbol":"Kr."},
    "DOP": {"name":"Dominican Peso","symbol":"$"},
    "DZD": {"name":"Algerian Dinar","symbol":"دج"},
    "EGP": {"name":"Egyptian Pound","symbol":"ج.م"},
    "ERN": {"name":"Eritrean Nakfa","symbol":"Nfk"},
    "ETB": {"name":"Ethiopian Birr","symbol":"Nkf"},
    "EUR": {"name":"Euro","symbol":"€"},
    "FJD": {"name":"Fijian Dollar","symbol":"FJ$"},
    "FKP": {"name":"Falkland Islands Pound","symbol":"£"},
    "FOK": {"name":"Faroese Króna", "symbol": "kr"},
    "GBP": {"name":"British Pound Sterling","symbol":"£"},
    "GEL": {"name":"Georgian Lari","symbol":"ლ"},
    "GGP": {"name":"Guernsey Pound", "symbol":"£"},
    "GHS": {"name":"Ghanaian Cedi","symbol":"GH₵"},
    "GIP": {"name":"Gibraltar Pound","symbol":"£"},
    "GMD": {"name":"Gambian Dalasi","symbol":"D"},
    "GNF": {"name":"Guinean Franc","symbol":"FG"},
    "GTQ": {"name":"Guatemalan Quetzal","symbol":"Q"},
    "GYD": {"name":"Guyanaese Dollar","symbol":"$"},
    "HKD": {"name":"Hong Kong Dollar","symbol":"$"},
    "HNL": {"name":"Honduran Lempira","symbol":"L"},
    "HRK": {"name":"Croatian Kuna","symbol":"kn"},
    "HTG": {"name":"Haitian Gourde","symbol":"G"},
    "HUF": {"name":"Hungarian Forint","symbol":"Ft"},
    "IDR": {"name":"Indonesian Rupiah","symbol":"Rp"},
    "ILS": {"name":"Israeli New Sheqel","symbol":"₪"},
    "IMP": {"name":"Manx Pound","symbol":"£"},
    "INR": {"name":"Indian Rupee","symbol":"₹"},
    "IQD": {"name":"Iraqi Dinar","symbol":"د.ع"},
    "IRR": {"name":"Iranian Rial","symbol":"﷼"},
    "ISK": {"name":"Icelandic KrÃ³na","symbol":"kr"},
    "JEP": {"name":"Jersey Pound","symbol":"£"},
    "JMD": {"name":"Jamaican Dollar","symbol":"J$"},
    "JOD": {"name":"Jordanian Dinar","symbol":"ا.د"},
    "JPY": {"name":"Japanese Yen","symbol":"¥"},
    "KES": {"name":"Kenyan Shilling","symbol":"KSh"},
    "KGS": {"name":"Kyrgystani Som","symbol":"лв"},
    "KHR": {"name":"Cambodian Riel","symbol":"KHR"},
    "KID": {"name":"Kiribati Dollar","symbol":"$"},
    "KMF": {"name":"Comorian Franc","symbol":"CF"},
    "KRW": {"name":"South Korean Won","symbol":"₩"},
    "KWD": {"name":"Kuwaiti Dinar","symbol":"ك.د"},
    "KYD": {"name":"Cayman Islands Dollar","symbol":"$"},
    "KZT": {"name":"Kazakhstani Tenge","symbol":"лв"},
    "LAK": {"name":"Laotian Kip","symbol":"₭"},
    "LBP": {"name":"Lebanese Pound","symbol":"£"},
    "LKR": {"name":"Sri Lankan Rupee","symbol":"Rs"},
    "LRD": {"name":"Liberian Dollar","symbol":"$"},
    "LSL": {"name":"Lesotho Loti","symbol":"L"},
    "LYD": {"name":"Libyan Dinar","symbol":"د.ل"},
    "MAD": {"name":"Moroccan Dirham","symbol":"MAD"},
    "MDL": {"name":"Moldovan Leu","symbol":"L"},
    "MGA": {"name":"Malagasy Ariary","symbol":"Ar"},
    "MKD": {"name":"Macedonian Denar","symbol":"ден"},
    "MMK": {"name":"Burmese Kyat","symbol":"K"},
    "MNT": {"name":"Mongolian Tugrik","symbol":"₮"},
    "MOP": {"name":"Macanese Pataca","symbol":"MOP$"},
    "MRU": {"name":"Mauritanian Ouguiya","symbol":"MRU"},
    "MUR": {"name":"Mauritian Rupee","symbol":"₨"},
    "MVR": {"name":"Maldivian Rufiyaa","symbol":"Rf"},
    "MWK": {"name":"Malawian Kwacha","symbol":"MK"},
    "MXN": {"name":"Mexican Peso","symbol":"$"},
    "MYR": {"name":"Malaysian Ringgit","symbol":"RM"},
    "MZN": {"name":"Mozambican Metical","symbol":"MT"},
    "NAD": {"name":"Namibian Dollar","symbol":"$"},
    "NGN": {"name":"Nigerian Naira","symbol":"₦"},
    "NIO": {"name":"Nicaraguan CÃ³rdoba","symbol":"C$"},
    "NOK": {"name":"Norwegian Krone","symbol":"kr"},
    "NPR": {"name":"Nepalese Rupee","symbol":"₨"},
    "NZD": {"name":"New Zealand Dollar","symbol":"$"},
    "OMR": {"name":"Omani Rial","symbol":".ع.ر"},
    "PAB": {"name":"Panamanian Balboa","symbol":"B/."},
    "PEN": {"name":"Peruvian Nuevo Sol","symbol":"S/."},
    "PGK": {"name":"Papua New Guinean Kina","symbol":"K"},
    "PHP": {"name":"Philippine Peso","symbol":"₱"},
    "PKR": {"name":"Pakistani Rupee","symbol":"₨"},
    "PLN": {"name":"Polish Zloty","symbol":"zł"},
    "PYG": {"name":"Paraguayan Guarani","symbol":"₲"},
    "QAR": {"name":"Qatari Rial","symbol":"ق.ر"},
    "RON": {"name":"Romanian Leu","symbol":"lei"},
    "RSD": {"name":"Serbian Dinar","symbol":"din"},
    "RUB": {"name":"Russian Ruble","symbol":"₽"},
    "RWF": {"name":"Rwandan Franc","symbol":"FRw"},
    "SAR": {"name":"Saudi Riyal","symbol":"﷼"},
    "SBD": {"name":"Solomon Islands Dollar","symbol":"Si$"},
    "SCR": {"name":"Seychellois Rupee","symbol":"SRe"},
    "SDG": {"name":"Sudanese Pound","symbol":".س.ج"},
    "SEK": {"name":"Swedish Krona","symbol":"kr"},
    "SGD": {"name":"Singapore Dollar","symbol":"$"},
    "SHP": {"name":"Saint Helena Pound","symbol":"£"},
    "SLE": {"name":"Sierra Leonean Leone","symbol":"Le"},
    "SOS": {"name":"Somali Shilling","symbol":"Sh.so."},
    "SRD": {"name":"Surinamese Dollar","symbol":"$"},
    "SSP": {"name":"South Sudanese Pound","symbol":"£"},
    "STN": {"name":"São Tomé and Príncipe Dobra","symbol":"Db"},
    "SYP": {"name":"Syrian Pound","symbol":"LS"},
    "SZL": {"name":"Eswatini Lilangeni","symbol":"L or E"},
    "THB": {"name":"Thai Baht","symbol":"฿"},
    "TJS": {"name":"Tajikistani Somoni","symbol":"SM"},
    "TMT": {"name":"Turkmenistan Manat","symbol":"T"},
    "TND": {"name":"Tunisian Dinar","symbol":"ت.د"},
    "TOP": {"name":"Tongan Pa'anga","symbol":"$"},
    "TRY": {"name":"Turkish Lira","symbol":"₺"},
    "TTD": {"name":"Trinidad & Tobago Dollar","symbol":"$"},
    "TVD": {"name":"Tuvaluan Dollar","symbol":"TV$"},
    "TWD": {"name":"New Taiwan Dollar","symbol":"$"},
    "TZS": {"name":"Tanzanian Shilling","symbol":"TSh"},
    "UAH": {"name":"Ukrainian Hryvnia","symbol":"₴"},
    "UGX": {"name":"Ugandan Shilling","symbol":"USh"},
    "UYU": {"name":"Uruguayan Peso","symbol":"$"},
    "UZS": {"name":"Uzbekistan Som","symbol":"лв"},
    "VES": {"name":"Venezuelan BolÃvar","symbol":"Bs"},
    "VND": {"name":"Vietnamese Dong","symbol":"₫"},
    "VUV": {"name":"Vanuatu Vatu","symbol":"VT"},
    "WST": {"name":"Samoan Tala","symbol":"SAT"},
    "XAF": {"name":"CFP Franc","symbol":"₣"},
    "XCD": {"name":"East Caribbean Dollar","symbol":"$"},
    "XDR": {"name":"Special Drawing Rights","symbol":"SDR"},
    "XOF": {"name":"West African CFA franc","symbol":"CFA"},
    "XPF": {"name":"CFP Franc","symbold":"₣"},
    "YER": {"name":"Yemeni Rial","symbol":"﷼"},
    "ZAR": {"name":"South African Rand","symbol":"R"},
    "ZMW": {"name":"Zambian Kwacha","symbol":"ZK"},
    "ZWL": {"name":"Zimbabwean Dollar", "symbol":"Z$"},
    };

    

  const dropList = document.querySelector(".dropList");
  const firstCurrency = document.querySelector(".currency1");
  const secondCurrency = document.querySelector(".currency2");
  


  firstCurrency.innerHTML = loadCountries(currencies);
  secondCurrency.innerHTML = loadCountries(currencies);
  const resetButton = document.querySelector(".reset-button");
  resetButton.onclick = resetValues;


  function loadCountries(currencies) {
      
      return Object.entries(currencies)
        .map(([country, currency]) => `<option value="${country}">${country} | ${currency.name} </option>`)
        .join("")
  }

  
  document.querySelector(".convert").addEventListener("click", fetchCurrencies);


  function fetchCurrencies() {
      const first = firstCurrency.value;
      const second = secondCurrency.value;
      const amount = document.querySelector(".amount").value;
      const firstSymbol = currencies[first].symbol;
      const secondSymbol = currencies[second].symbol;
      


      fetch("https://v6.exchangerate-api.com/v6/e180883e3cd79ac9321b020c/latest/" + first)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then((data) => {
            console.log(data);
            displayCurrency(firstSymbol, secondSymbol, data, first, second, amount);
       
        })
        .catch((error) => console.error("FETCH ERROR:", error));


        function displayCurrency(firstSymbol, secondSymbol, data, first, second, amount) {
            const calculated = amount * data.conversion_rates[second];
            document.querySelector(".result").setAttribute("style", "display:block");
            document.querySelector(".exchange-text").setAttribute("style", "display:none");
            document.querySelector(".result-currency1").innerHTML = firstSymbol + " " + amount + " " + first + " = ";
            document.querySelector(".result-currency2").innerHTML = secondSymbol + " " + calculated.toFixed(2) + " " + second;  
        }

  }

  const switchValues = document.querySelector(".fa-solid");
  switchValues.addEventListener("click", ()=>{
    let tempCode = firstCurrency.value;
    firstCurrency.value = secondCurrency.value;
    secondCurrency.value = tempCode;
    fetchCurrencies();
})  

function resetValues() {
   //window.location.reload()
   document.getElementById("converter-form").reset();
   document.querySelector(".result").setAttribute("style", "display:none");
   document.querySelector(".exchange-text").setAttribute("style", "display:block");
}


  