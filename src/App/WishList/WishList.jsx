import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

const WishList = ({ wishes, onWishesChange }) => (
  <ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
      <WishItem
        text={text}
        done={done}
        onDoneChange={(value) => {
          const updatedWishes = [...wishes];
          updatedWishes[i].done = value;
          onWishesChange(updatedWishes);
        }}
        id={`wish${i}`}
        key={text}
      />
    ))}
  </ul>
);

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.propTypes)),
  onWishesChange: PropTypes.func,
};
WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};

export default WishList;
