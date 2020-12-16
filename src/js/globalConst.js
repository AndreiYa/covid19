/* eslint-disable */

import renderAll from "./renderService";

const globalConst = {
    currentRegion: {
        name: undefined,
        get _name() {
            console.log('getter!');
            return this.name;
        },
        set _name(value) {
            console.log('setter!');
            this.name = value;
            renderAll();
        }
    },
    dataAPI: undefined
};

export default globalConst;