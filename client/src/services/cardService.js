import http from "./httpService";
import { apiUrl } from "../config.json";

export function getCards() {
    return http.get(`${apiUrl}cards`);
}

export function getCard(id) {
    return http.get(`${apiUrl}cards/getcard/${id}`);
}

export function getMyCards(userId) {
    return http.get(`${apiUrl}cards/getmycards/${userId}`);
}



export function createCard(card) {
    return http.post(`${apiUrl}cards/create`, card);
}
export function editCard(card) {
    return http.put(`${apiUrl}cards/updatecard`, card);
}

export function deleteCard(id) {
    return http.delete(`${apiUrl}cards/deleteone/${id}`, );
  }



export default {
    createCard,
    getMyCards,
    editCard,
    getCards,
    getCard,
    deleteCard,
};