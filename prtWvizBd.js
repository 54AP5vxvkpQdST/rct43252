'use strict';

const e = React.createElement;

class SePrtWvizBd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'eleven';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'one plus one'
    );
  }
}



const domContainer = document.querySelector('#prtWvizBd');
ReactDOM.render(e(SePrtWvizBd), domContainer);
