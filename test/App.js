"use strict";

require("run-with-mocha");

const assert = require("assert");
const sinon = require("sinon");
const React = require("react");
const { shallow } = require("enzyme");
const App = require("../src/App");

function setup({ state, actions }) {
  state = Object.assign({
    offset: 57,
    keys: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  }, state);
  actions = actions || {};

  const component = shallow(
    <App actions={ actions } offset={ state.offset } keys={ state.keys }/>
  );

  return { component, state, actions };
}

describe("App", () => {
  it("has a offset changer", () => {
    const { component, actions } = setup({ actions: { changeKeyOffset: sinon.spy() } });
    const elem = component.find("input[type='range']");

    assert(elem.length === 1);

    elem.simulate("change", { target: { value: 60 } });
    assert(actions.changeKeyOffset.callCount === 1);
    assert(actions.changeKeyOffset.args[0][0] === 60);
  });

  it("has noteOn buttons", () => {
    const { component, actions } = setup({ actions: { noteOn: sinon.spy() } });
    const elems = component.find("span");

    assert(elems.length === 20);

    elems.at(3).simulate("mousedown");
    assert(actions.noteOn.callCount === 1);
    assert(actions.noteOn.args[0][0] === 60);
  });

  it("has noteOff buttons", () => {
    const { component, actions } = setup({ actions: { noteOff: sinon.spy() } });
    const elems = component.find("span");

    assert(elems.length === 20);

    elems.at(3).simulate("mouseup");
    assert(actions.noteOff.callCount === 1);
    assert(actions.noteOff.args[0][0] === 60);
  });
});
