import { createWebHistory, createRouter } from "vue-router";
import BooksList from "./components/BooksList.vue";
import BookDetails from "./components/BookDetails.vue";
import AddBook from "./components/AddBook.vue";

const routes = [
  {
    path: "/",
    alias: "/books",
    name: "books",
    component: BooksList
  },
  {
    path: "/books/:id",
    name: "book-details",
    component: BookDetails
  },
  {
    path: "/add",
    name: "add",
    component: AddBook
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
