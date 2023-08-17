import { createClient } from "contentful";

export default createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACEID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN
})