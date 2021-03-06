import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// firebase init
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
}
const firebaseApp: any = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth(firebaseApp)

// collection references
const usersCollection = db.collection("users")
const todosCollection = db.collection("posts")

// export utils/refs
export { db, auth, usersCollection, todosCollection }
