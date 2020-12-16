// import renderAll from "./renderService";

const globalConst = {
  currentRegion: {
    name: undefined,
    get _name() {
      console.log("getter!");
      return this.name;
    },
    set _name(value) {
      console.log("setter!");
      this.name = value;
      renderAll();
    },
  },
  dataAPI: {
    lastUpdate: [],
    totalInfo: {},
    countryList: [],
    countryFlag: [],
  },
};

export default globalConst;
