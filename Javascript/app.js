import "regenerator-runtime/runtime"
import axios from "axios"


const BASE_URL = "https://jsonplaceholder.typicode.com";


const createTodoElement = item => {
    const todoElement = document.createElement("li")

    todoElement.appendChild(document.createTextNode(item.title));
    return todoElement;

}

//dom, nodes , append, appendchild, textnode, innerhtml, create element and remove element

const getTodoItems = async () => {
    try {
        const response = await axios.get(`{BASE_URL}/todos?_limit=5`);
        const todoItems = response.data;

        console.log("GET: Here's the list of todo's", todoItems);

        return todoItems;
    } 
    catch (errors) {
        console.error(errors);
    }
}