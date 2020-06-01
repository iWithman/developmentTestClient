import axios from "axios";

const apiEndPoint = 'http://localhost:5628/products'

export function getProducts() {
  return axios.get(apiEndPoint)
}


export function getProcut(phoneId) {
  return axios.get(`${apiEndPoint}/${phoneId}`)
}