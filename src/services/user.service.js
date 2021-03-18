import { authHeader } from '../helpers';
import * as fb from '../firebase'


export const userService = {
    login
};

function login(payload) {
   return fb.usersCollection.where('email', '==', payload.email).
    where('password', '==', payload.password).
    get().
    then( querySnapshot => {
        return querySnapshot.forEach((doc)=>{
          localStorage.setItem('userProfile',doc.data()) ;
          return doc;
        });
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });
}
