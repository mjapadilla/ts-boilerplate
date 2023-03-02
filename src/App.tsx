import React from 'react';

function App() {
  const [state, setState] = React.useState({ name: 'foo' });

  React.useEffect(() => {
    setState({ name: '2' });
  }, []);

  return (
    <div className="w-screen h-screen bg-cyan-700 flex">
      <div className="text-white m-auto">
        <h4 className="text-2xl font-medium">Technology Used:</h4>
        <ul className="text-lg list-disc pl-7">
          <li>React</li>
          <li>Typescript</li>
          <li>TailwindCss</li>
          <li>ReactQuery</li>
          <li>Axios</li>
          <li>{state.name}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
