import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {

  databaseURL: 'https://le-coin-gateau.firebaseio.com',
  apiKey: "AIzaSyDiwrWDZZbm1e0tVtgEw7acugdEKEKLuW4",
    authDomain: "le-coin-gateau.firebaseapp.com",
    projectId: "le-coin-gateau",
    storageBucket: "le-coin-gateau.appspot.com",
    messagingSenderId: "763805707707",
    appId: "1:763805707707:web:9f920e0a5605a00e9b289e"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
