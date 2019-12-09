import React, { Component } from 'react';
import './App.css';
import BandPage from './BandPage.js'
import Search from './Search.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function searchingFor(term) {
  return function(x){
    return x.name.toLowerCase().includes(term.toLowerCase()) || false;
  }
}

function sortByPopularity() {
}

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
      term : '',
      loading: true,
      banda: '',
      bnd: []
      }
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event){
    this.setState({ term : event.target.value })
    console.log(event.target.value);
  }

  /* Fetch json ficou um pouco bagunçado */

  async componentDidMount() {
    const url = 'https://iws-recruiting-bands.herokuapp.com/api/bands';
    const response = await fetch(url);
    const data = await response.json();
    let i = 0;
    var arr = [];
    while(i < 50) {
    var obj = JSON.stringify(data[i]);
    var s = JSON.parse(obj);
    arr.push(s);
    i++
    }
    console.log(arr)
    this.setState({ banda: data[1], bnd: arr, loading: false })
  }

  render() {
    const {term} = this.state;
    return (

      <div className="App">
        <nav>
              <div className="search-header-nav">
                  <form className="search-input-form">
                      <input type="text" placeholder="Search..." onChange={this.searchHandler} value={term}/>
                  </form>
                  <div className="logo-img"></div>
              </div>
          </nav>
          <div>
              {this.state.loading ? <div>loading...</div> : 
          <div>
            <div className="search-items-body">
             
            <i class="fa fa-sort-amount-asc sort-by" aria-hidden="true"></i>
            
              {this.state.bnd.filter(searchingFor(term)).map(( b ) => 
              <div key={b.id}>
                <Router>
                  <Switch>
                    <Route path='/BandPage' component={BandPage} />
                  </Switch>
                  <div className="search-artist-item">
                    <p className="item-list-img">
                        <img className="search-avatar-img" src={b.image} alt="=/"/>
                    </p>
                    <div className="display-artist-name">
                        <span>{b.name.toUpperCase()}</span>
                    </div>
                    <p className="display-plays">{b.numPlays} Plays</p>
                    <hr />
                  </div>
                </Router>
              </div>
              )}
            </div>
            </div>}
        </div>
      </div>
    );
  }
}

export default App