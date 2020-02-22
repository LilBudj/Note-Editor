import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/'
    }
);

export const mainAPI = {
  getNotes(){
      return instance.get('').then(
          (response) => response
      )
  },
  addNote(){
      return instance.post('', note).then(response => response)
  }
};