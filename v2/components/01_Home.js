// const Home = () => <h1 style={{ 'color': 'green'}}>You are in the Home</h1>;

class Home extends React.PureComponent {
  render() {
    return <>
      <span>New version is developing. (Torlon Dev V2)</span><br/><br/>
      <a class="text-blue-600 underline" href="./old">Go to Old version.</a><br />
      <a class="text-blue-600 underline" target="_blank" href="./old/#/cv">Go to Old CV</a>
    </>;
  }
}

const styles = {
  h1: {
    'color': 'black'
  }
}