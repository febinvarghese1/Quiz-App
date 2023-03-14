import axios from "axios";


const serverRequest = axios.create({
    baseURL: "http://localhost:5500",
    headers: {
        "Content-type":"application/json"
    }
})


export const getAllQuiz = () =>{
    return serverRequest.get("/quizes");
}

export const getQuizById = id =>{
    return serverRequest.get(`/quizes/${id}`);
}


export const createNewQuiz = data =>{
    return serverRequest.post("/quizes",data);
}


export const removeQuiz = id =>{
    return serverRequest.delete("/quizes",id);
}

