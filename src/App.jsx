import React from "react";

import { Button } from "@nextui-org/react";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Press me</Button>
      <Button color="warning">Warning</Button>
    </div>
  );
};

export default App;
