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

  handlePrevClick = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - 1,
    }));
  };

  handleNextClick = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + 1,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const publication = items[publicationIndex];
    const prevBtnDisabled = publicationIndex === 0;
    const nextBtnDisabled = publicationIndex === items.length - 1;
    return (
      <div>
        <Controls
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
          items={items.length}
          btn={publicationIndex}
          onPrevClick={this.handlePrevClick}
          onNextClick={this.handleNextClick}
        />
        {/* <p>
          {publicationIndex + 1}/{items.length}
        </p> */}
        <Publication
          publication={publication}
          number={publicationIndex}
          items={items.length}
        />
      </div>
    );
  }
}
