import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf.isRequired,
  };

  state = {
    publicationIndex: 0,
  };

  forward = () => {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    this.setState(state => ({
      publicationIndex:
        publicationIndex < items.length && publicationIndex >= 0
          ? state.publicationIndex + 1
          : state.publicationIndex,
    }));
  };

  backward = () => {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    this.setState(state => ({
      publicationIndex:
        publicationIndex <= items.length && publicationIndex > 0
          ? state.publicationIndex - 1
          : state.publicationIndex,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const publication = items[publicationIndex];
    return (
      <div>
        <section>
          <button onClick={this.backward} type="button">
            Назад
          </button>
          <button onClick={this.forward} type="button">
            Вперед
          </button>
        </section>

        <p>
          {publicationIndex + 1}/{items.length}
        </p>
        <article>
          <h2>{publication.title}</h2>
          <p>{publication.text}</p>
        </article>
      </div>
    );
  }
}
