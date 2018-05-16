class FormatCurrency extends Polymer.Element {

  static get is() {
    return 'format-currency';
  }

  static get properties() {
    return {
      
      amount: {
        type: Number,
        value: 2000,
      },

      currencyCode: {
        type: String,
        observer: 'currencySymbol',
      },

      currencyPrefix: {
        type: String,
      },

      currencySuffix: {
        type: String,
      },

      separator: {
        type: String,
        value: ','
      },

      value: {
        type: String,
        notify: true,
      },

    };
  }

  currencySymbol(code) {
    if(code === 'US' || code === 'MXN') {
      this.set('currencyPrefix', '$');
      this.set('currencySuffix', '');
    } else {
      this.set('currencyPrefix', '');
      this.set('currencySuffix', '€');     
    }
  }

}

customElements.define(FormatCurrency.is, FormatCurrency);