import React, { useState } from 'react';
import PropTypes from 'prop-types';

const createWish = text => ({ done: false, text });

const WishInput = ({ defaultValue, onNewWish }) => {
  const [newWishText, setNewWishText] = useState(defaultValue);
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        className="wish-input__field"
        value={newWishText}
        onChange={e => setNewWishText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newWishText.length) {
            onNewWish(createWish(newWishText));
            setNewWishText(defaultValue);
          }
        }}
        placeholder="Enter your wish here"
      />
    </fieldset>
  );
};

WishInput.propTypes = {
  defaultValue: PropTypes.string,
  onNewWish: PropTypes.func,
};
WishInput.defaultProps = {
  defaultValue: '',
  onNewWish: () => {},
};
export default WishInput;
