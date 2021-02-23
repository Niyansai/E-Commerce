const API_KEY = "AIzaSyAMFffGiSLgOX73vd1mxuEyR_13M-9936E";
const channelID = 'UC7HUAlkMwfif648ySsi08Cw'
const result = 20;



const requests = {
    YouTubeEndPoint:`/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`, 
}


export default requests;