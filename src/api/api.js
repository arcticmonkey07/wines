import * as axios from "axios/index";

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
});

export const winesAPI = {
  getWines(currentPage = 1, pageSize = 3) {
    return instance.get('wines')
      .then(response => {
        return response.data;
      });
  }
};


/*
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
};*/
