import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// firebase init
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
}
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection("users")
const todosCollection = db.collection("posts")

// export utils/refs
export { db, auth, usersCollection, todosCollection }
