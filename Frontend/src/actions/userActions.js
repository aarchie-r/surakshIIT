import { sessionService } from "redux-react-session";



export const login = (uid,security) => async ()=>{
    try {
        const response = {
            uid:uid,
            isSecurity: security
        };


        sessionService.saveSession();
        sessionService.saveUser(response);
        
    }
    catch (err) {
        console.log("error");
    }
    

};