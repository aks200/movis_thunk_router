import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ItemActionCreator from "../Actions/ItemActionCreator";

class Index extends Component {
  componentDidMount() {
    this.props.fetch("http://api.tvmaze.com/shows");
  }

  render() {
    const { itemsLoading, itemsError, items, fetch } = this.props;
    if (itemsError) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (itemsLoading) {
      return <p>Loading ...</p>;
    }

    console.log("items");
    return (
      <Fragment>
        <div>{items.map(item => <div key={item.id}>{item.name}</div>)}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsLoading: state.itemsLoading,
    itemsError: state.itemsError,
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return { fetch: url => dispatch(ItemActionCreator(url)) };
};

Index = connect(mapStateToProps, mapDispatchToProps)(Index);
export default Index;
