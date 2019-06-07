import React from 'react';
import classNames from 'classnames';
import './App.css';

const wishes = [
  { done: false, text: 'Travel to the moon' },
  { done: true, text: 'Make an intro course to React' },
  { done: true, text: 'Pay the gym' },
  { done: false, text: 'Go to the gym' },
];
const App = () => (
  <div className="app">
    <h1>My wishlist</h1>
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input className="wish-input__field" placeholder="Enter your wish here" />
    </fieldset>
    <ul className="wish-list">
      {wishes.map(({ done, text }, i) => (
        <li
          key={text}
          className={classNames('wish-list__item', {
            'wish-list__item--done': done,
          })}
        >
          <input id={`wish${i}`} type="checkbox" checked={done} />
          <label htmlFor={`wish${i}`}>{text}</label>
        </li>
      ))}
    </ul>
    <button type="button" className="wish-clear">
      Archive done
    </button>
  </div>
);

export default App;
