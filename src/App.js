import React, { useEffect, useState } from 'react';
import GithubIcon from './assets/img/GitHub-Mark-Light-32px.png';
import GitHubArrowDown from './assets/img/Ic_arrow_drop_down_36px.svg';

function App() {
  const handleOpenCreate = (e) => e.preventDefault();

  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user')
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData(data);
        }
      });
  }, []);

  console.log(data);

  return (
    <div className='App'>
      <nav className='App-nav'>
        <div className='container'>
          <ul className='first-section'>
            <li>
              <img
                id='gh-icon'
                src={GithubIcon}
                alt='Github icon'
                width='32'
                height='32'
              />
            </li>
            <li>
              <input
                id='search-input'
                type='text'
                placeholder='Search or jump to...'
              />
            </li>
            <li>
              <span> Pulls</span>
            </li>
            <li>
              <span>Issues</span>
            </li>
            <li>
              <span>Marketplace</span>
            </li>
            <li>
              <span>Explore</span>
            </li>
          </ul>
          <ul className='second-section'>
            <li>
              <button id='button-create' onClick={(e) => handleOpenCreate(e)}>
                <div id='wrapper'>
                  <span>+</span>
                  <img src={GitHubArrowDown} alt='GitHubArrowDown' />
                </div>
              </button>
            </li>
            <li>
              <button id='button-profile' onClick={(e) => handleOpenCreate(e)}>
                <div id='wrapper'>
                  <img
                    src='https://avatars.githubusercontent.com/u/33124156?s=40&v=4'
                    alt='Profile pic'
                    width='18'
                    height='18'
                  />
                  <img src={GitHubArrowDown} alt='GitHubArrowDown' />
                </div>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <section>
        {Object.keys(data).length > 0 && (
          <table id='my-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Credit Card</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.first_name + ' ' + data.last_name}</td>
                <td>{data.email}</td>
                <td>{data.credit_card.cc_number}</td>
              </tr>
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default App;
