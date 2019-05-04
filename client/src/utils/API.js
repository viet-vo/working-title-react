import axios from "axios";

export default {
    getTests: function() {
        return axios.get("/api/testData");
    },
    getTest: function(id) {
        return axios.get("/api/testData/" + id);
    },
    saveTest: function(userData) {
        return axios.post("/api/testData/", userData);
    },
    seedMe: function() {
        return axios.post("/api/testData2/");
    },
    getUsers: function() {
         return axios.get("/user/");
    },
    submitUser: function(userData) {
        return axios.post("/user/", userData);
    },
}