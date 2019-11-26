import { CognitoAuth } from 'amazon-cognito-auth-js/dist/amazon-cognito-auth'
import { CognitoUserPool } from 'amazon-cognito-identity-js'
import { config as AWSConfig } from 'aws-sdk'
import appConfig from "../config/app-config.json";



const createCognitoAuth=()=>{
    const appWebDomain=appConfig.userPoolBaseUri.replace('https://', '').replace('http://', '');
    const auth=new CognitoAuth({
        UserPoolId: appConfig.userPool,
        ClientId: appConfig.clientId,
        AppWebDomain: appWebDomain,
        TokenScopesArray: appConfig.tokenScopes,
        RedirectUriSignIn: appConfig.callbackUri,
        RedirectUriSignOut: appConfig.signoutUri
    })
    return auth;
}

// Creates a CognitoUser instance
const createCognitoUser = () => {
    const pool = createCognitoUserPool()
    return pool.getCurrentUser()
  }

// Creates a CognitoUserPool instance
const createCognitoUserPool = () => new CognitoUserPool({
    UserPoolId: appConfig.userPool,
    ClientId: appConfig.clientId
  })


// Get the URI of the hosted sign in screen
const getCongitoSignInUri=()=>{
    const singinUri=`${appConfig.userPoolBaseUri}/login?response_type=token&client_id=${appConfig.clientId}&redirect_uri=${appConfig.callbackUri}`
    console.log(appConfig.callbackUri);
    return singinUri;
}

const signOutCognitoSession=()=>{
  
}

const parseCognitoWebResponse=(href)=>{
    console.log("parseCognitoWebResponse called")
    return new Promise((resolve,reject)=>{
       const auth=createCognitoAuth();

       auth.userhandler={
           onSuccess: function(result){
               resolve(result);
           },
           onFailure: function(err){
               reject(new Error('Failure parsing cognito web response'+ err))
           }
       }
       auth.parseCognitoWebResponse(href);
    })
}

const getCognitoSession=()=>{
    console.log("getCognitoSession called");
    return new Promise((resolve,reject)=>{
        const cognitoUser=createCognitoUser();
        cognitoUser.getSession((err,result)=>{

            if (err||!result){
                reject(new Error("Failure getting Cognito session"+err));
                return;
            }

            console.debug('Successfully got session: ' + JSON.stringify(result));

            const session={
                credentials: {
                    accessToken: result.accessToken.jwtToken,
                    idToken: result.idToken.jwtToken,
                    refreshToken: result.refreshToken.token
                  },
                  user: {
                    userName: result.idToken.payload['cognito:username'],
                    email: result.idToken.payload.email
                  }
            }
            resolve(session);
        })
    })
}



export default {
    getCongitoSignInUri,
    signOutCognitoSession,
    parseCognitoWebResponse,
    getCognitoSession
}