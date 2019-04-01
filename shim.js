/* eslint-disable */

require("raf/polyfill");

const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const createSerializer = require("enzyme-to-json").createSerializer;

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

Enzyme.configure({ adapter: new Adapter() });

// /* eslint-disable */
