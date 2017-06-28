// @flow
import React from "react";

type Props = {
  node?: ?string,
  chrome?: ?string,
  electron?: ?string
};

export default function HelloWorldComponent(props: Props) {
  return (
    <div>
      <div>Hello World!</div>
      <div>
        We are using Node.js {props.node},
      </div>
      <div>
        Chromium {props.chrome},
      </div>
      <div>
        and Electron {props.electron}.
      </div>
    </div>
  );
}
