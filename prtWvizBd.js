'use strict';

//         const e = React.createElement;

// class SePrtWvizBd extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'eleven';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'one plus one'
//     );
//   }
// }

const Component = () => {
  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    window.addEventListener('unload', handleEndConcert)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
      window.removeEventListener('unload', handleEndConcert)
      handleEndConcert()
    }
  }, [])
  const alertUser = e => {
    e.preventDefault()
    e.returnValue = ''
  }
  const handleEndConcert = async () => {
    await fetcher({
      url: endConcert(concert.id),
      method: 'PUT'
    })
  }
  return (
    <Container>
      <Prompt
        when={isPrompt()}
        message={() => 'Are you sure you want to leave this page?'}
      />
    </Container>
  )
}



const domContainer = document.querySelector('#prtWvizBd');
ReactDOM.render(e(SePrtWvizBd), domContainer);
