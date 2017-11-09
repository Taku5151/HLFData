class DataSet {
  constructor() {
    this.dimKeys = [];
    this.valueKeys = [];
    this.current = {};
    this.current.x = null;
    this.current.y = null;
    this.current.value = null;
    this.data = null;
    this.filters = [];
  }

  addDim(group, name, field) {
    const newDim = {group: group, name: name, field: field};
    this.dimKeys.push(newDim);
  }

  addValue(group, name, field) {

  }

  setCurrentDimX(name) {
    const dimKey = this._getKeyFromName(name, this.dimKeys);
    if(this.current.y === dimKey) {
      this.current.y = this.current.x;
    }
    this.current.x = dimKey;
  }

  setCurrentDimY(name) {
    const dimKey = this._getKeyFromName(name, this.dimKeys);
    if(this.current.x === dimKey) {
      this.current.x = this.current.y;
    }
    this.current.y = dimKey;
  }

  setCurrentValues(name) {
    this.current.value = this._getKeyFromName(name, this.valueKeys);
  }

  addFilter(name, criteria) {

  }

  clearFilter() {

  }

  displayTable() {

  }

  displayChart() {

  }

  refreshData() {

  }

  _generateSQL(dim, ydim, filters) {

  }

  _getKeyFromName(name, keys) {
    for (let i = 0; i < keys.length; i++) {
      if(keys[i].name === name) {
        return keys[i];
      }
    }
    return null;
  }
}

const demandDS = new DataSet();

function onLoad() {
  demandDS.addDim("Date", "Month", "Period");
  demandDS.addDim("Date", "Quarter", "Period");
  demandDS.addDim("Date", "Year", "Period");
  demandDS.addDim("Item", "Sku", "StockSKU");
  demandDS.addDim("Scenario", "Scenario", "Scenario");
  demandDS.addValue("Qty", "Qty", "Units");
  demandDS.setCurrentDimX("Month");
  demandDS.setCurrentDimY("Scenario");
  demandDS.setCurrentValues("Qty");
}
