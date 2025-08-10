import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [value, setValue] = useState('Jam is');
  const [activeGood, setActiveGood] = useState('Jam');
  const [selectedGood, setSelectedGood] = useState(true);
  // const [activeButton, setButton] = useState(false);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value} selected
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setValue('No goods');
              setActiveGood(null);
              setSelectedGood(false);
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isActive = activeGood === good;

            return (
              <tr
                data-cy="Good"
                className={isActive ? 'has-background-success-light' : ''}
                key={good}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={`button ${isActive ? 'is-info' : ''}`}
                    onClick={() => {
                      if (isActive) {
                        setValue('No goods');
                        setActiveGood(null);
                        setSelectedGood(false);
                      } else {
                        setValue(`${good} is`);
                        setActiveGood(good);
                        setSelectedGood(true);
                      }
                    }}
                  >
                    {isActive ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
