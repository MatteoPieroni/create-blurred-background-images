import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FileDragger } from './components/FileDragger';

const App: React.FunctionComponent = () => {

  const [base64, setBase64] = React.useState('');

  const handleChoose: (event: React.ChangeEvent<HTMLInputElement>) => void = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { files } = event.target;
    if (files) {
      const processFile = require("./processFile");
      // @ts-ignore
      const base64File = await processFile(files[0].path);
      console.log(base64File)
      setBase64(base64File);
    }
  };

  return (
    <div>
      <h1>Hi there</h1>
      <FileDragger handleChange={handleChoose} />
      {base64}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
export = App;