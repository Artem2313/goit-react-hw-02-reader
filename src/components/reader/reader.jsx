import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Conrols/Controls';
import Publication from './Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    publicationIndex: 0,
  };

  handleClick = e => {
    const targetName = e.target.name;
    this.setState(prevState => ({
      publicationIndex:
        targetName === 'next'
          ? prevState.publicationIndex + 1
          : prevState.publicationIndex - 1,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const publication = items[publicationIndex];
    return (
      <div>
        <Controls
          publicationIndex={publicationIndex}
          items={items.length}
          handleClick={this.handleClick}
        />

        <Publication
          publication={publication}
          number={publicationIndex}
          items={items.length}
        />
      </div>
    );
  }
}
