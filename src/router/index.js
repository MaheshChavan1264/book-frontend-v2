import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Admin from '../views/Admin/Admin.vue'
import Gallery from '../views/Admin/Gallery.vue'
import AddImage from '../views/Admin/AddImage.vue'

import PageNotFound from '../views/PageNotFound.vue'

import Book from '../views/Book/Book.vue'
import AddBook from '../views/Book/AddBook.vue'
import EditBook from '../views/Book/EditBook.vue'
import ShowBookDetails from '../views/Book/ShowBookDetails.vue'
import Wishlist from '../views/Book/Wishlist.vue'
import Cart from '../views/Cart/Cart.vue'
import Checkout from '../views/Checkout/Checkout.vue'
import Order from '../views/Orders/Order.vue'

import Author from '../views/Author/Author.vue'
import AddAuthor from '../views/Author/AddAuthor.vue'
import EditAuthor from '../views/Author/EditAuthor.vue'
import ListBooks from '../views/Author/ListBooks.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'

import Success from '../helper/payment/Success.vue'
import Failed from '../helper/payment/Failed.vue'

import OrderDetails from "../views/Orders/OrderDetails";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //Admin routes
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path : '/admin/gallery',
    name : 'Gallery',
    component : Gallery
  },
  {
    path : '/admin/gallery/add',
    name : 'AddImage',
    component : AddImage
  },
  //Books routes
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/admin/book',
    name: 'AdminBook',
    component: Book
  },
  {
    path: '/admin/book/add',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/admin/book/:id',
    name: 'EditBook',
    component: EditBook,
  },
  {
    path : '/book/show/:id',
    name : 'ShowBookDetails',
    component: ShowBookDetails
  },
  //Author routes
  {
    path: '/author',
    name: 'Author',
    component: Author
  },
  {
    path: '/admin/author',
    name: 'AdminAuthor',
    component: Author
  },
  {
    path: '/admin/author/add',
    name: 'AddAuthor',
    component: AddAuthor
  },
  {
    path: '/admin/author/:id',
    name: 'EditAuthor',
    component: EditAuthor
  },
  {
    path : '/author/show/:id',
    name : 'ListBooks',
    component: ListBooks
  },
  //Page Not found
  {
    path : '/:catchAll(.*)',
    name : 'PageNotFound',
    component : PageNotFound
  },
  //Signin and Signup
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path : '/cart',
    name : 'Cart',
    component : Cart
  },
  {
    path : '/checkout',
    name : 'Checkout',
    component : Checkout
  },
  {
    path : '/order',
    name : 'Order',
    component : Order
  },
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component:Success
  },
  {
    path: '/payment/failed',
    name: 'FailedPayment',
    component:Failed
  },
  {
    path:'/order/:id',
    name:'OrderDetails',
    component: OrderDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
