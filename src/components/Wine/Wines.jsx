import React from 'react';
import './Wines.css';
import Wine from "./Wine.jsx";
import * as axios from "axios";

class Wines extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:3000/wines`)
      .then(response => {
        this.props.setTotalWinesCount(response.data);
      });
    axios.get(`http://localhost:3000/wines?_limit=${this.props.pageSize}&_page=${this.props.currentPage}`)
      .then(response => {
        this.props.setWines(response.data);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`http://localhost:3000/wines?_limit=${this.props.pageSize}&_page=${pageNumber}`)
      .then(response => {
        this.props.setWines(response.data)
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalWinesCount.length / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <div>
      <div className='wines__pagination'>
        {pages.map(p => {
          return <span
            className={this.props.currentPage === p && 'wines__selectedPage'}
            onClick={() => { this.onPageChanged(p); }}
          >{p}</span>
        })}
      </div>
      <div className='wines__container'>
        {
          this.props.wines.map(w => <Wine favorite={this.props.favorite} unfavorite={this.props.unfavorite} id={w.id} favorited={w.favorited} image={w.image} name={w.name} country={w.country} grape={w.grape} sugar={w.sugar} color={w.color} price={w.price} description={w.description} key={w.id}/>)
        }
      </div>
    </div>
  }
}

export default Wines;