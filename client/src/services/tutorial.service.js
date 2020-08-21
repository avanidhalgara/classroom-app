import API from "../API";

class TutorialDataService {
  getAll() {
    return API.get("/tutorials");
  }
  get(id) {
    return API.get(`/tutorials/${id}`);
  }
  create(data) {
    return API.post("/tutorials", data);
  }
  deletecourse(data) {
    return API.put("/tutorialsdelete", data);
  }

  
  

  update(id, data) {
    return API.put(`/tutorials/${id}`, data);
  }
  delete(id) {
    return API.delete(`/tutorials/${id}`);
  }
  deleteAll() {
    return API.delete(`/tutorials`);
  }
  findByTitle(title) {
    return API.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();