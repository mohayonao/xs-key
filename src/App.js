"use strict";

const React = require("react");

const KEYS = [ 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ];

class App extends React.Component {
  render() {
    const { actions, offset, keys } = this.props;
    const keyElems = keys.map((state, i) => {
      const noteNumber = offset + i;
      const keyType = KEYS[noteNumber % 12];
      const style = { color: state ? "red" : noteNumber % 12 === 0 ? "lime" : "black" };
      const noteOn = () => actions.noteOn(noteNumber);
      const noteOff = () => actions.noteOff(noteNumber);

      return (<span key={ i } style={ style } onMouseDown={ noteOn } onMouseUp={ noteOff } onMouseOut={ noteOff }>{ keyType ? "■" : "□" }</span>);
    });
    const changeKeyOffset = e => actions.changeKeyOffset(+e.target.value);
    return (
      <div>
        <div>
          KEY OFFSET: <input type="range" value={ offset } min={ 48 } max={ 96 } onChange={ changeKeyOffset }/>
        </div>
        <div>{ keyElems }</div>
      </div>
    );
  }
}

App.propTypes = {
  actions: React.PropTypes.object.isRequired,
  offset : React.PropTypes.number.isRequired,
  keys   : React.PropTypes.array.isRequired,
};

module.exports = App;
