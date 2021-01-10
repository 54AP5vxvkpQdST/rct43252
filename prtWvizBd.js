'use strict';

const e = React.createElement;

class SePrtWvizBd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '11';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      '1+1'
    );
  }
}



const domContainer = document.querySelector('#prtWvizBd');
ReactDOM.render(e(SePrtWvizBd), domContainer);
