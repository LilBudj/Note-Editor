import axios from "axios"

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
  addNote(note){
      return instance.post('', {note}).then(response => response)
  },
    updateNote(text, id, tags){
      debugger
      return instance.put('', {text, id, tags}).then(response => response)
    },
    deleteNote(id){
      return instance.delete(`?id=${id}`).then(response => response)
    },
    deleteTag(id, tag){
      debugger
      return instance.delete(`tag?id=${id}&tag=${tag}`).then(response => response)
    }
};