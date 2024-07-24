class Home extends React.PureComponent {
  render() {
    return <div className="wrapper_content text-xl" 
      style={{ minWidth: "var(--contentMinWidth)", overflowX: 'hidden' }}>
      <span>New version is developing. (Torlon Dev V2)</span><br/><br/>
      <a className="underline a_link" href="./old">Go to Old version.</a><br />
      <a className="underline a_link" target="_blank" href="./old/#/cv">Go to Old CV</a>
    </div>;
  }
}

const styles = {
  h1: {
    'color': 'black'
  }
}