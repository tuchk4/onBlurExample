import React from 'react';

const total = 1000;

export default class Perfomance extends React.Component {
  constructor(props) {
    super(props);
    this.time = Date.now();
  }

  componentDidMount() {
    console.log(`${(Date.now() - this.time)/1000}sec`);
  }

  render() {
    const components = [];
    const Component = this.props.component;
    const props = this.props.componentProps;

    for (let i = 0; i < total; i++) {
      components.push(<Component key={i} {...props} />);
    }

    return <div>{components}</div>;
  }
}
