import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

// Navbar item
export const navbarItem = [
    {
        id: 1,
        path : "/",
        title: "home"
    },
    {
        id: 2,
        path : "/rooms",
        title: "rooms"
    }
]

export const services = [
    {
        id: 1,
        icon: <FaCocktail/>,
        title: "free cocktail",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate distinctio, optio provident laboriosam odit?"
    },
    {
        id: 2,
        icon: <FaHiking/>,
        title: "endless hikings",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate distinctio, optio provident laboriosam odit?"
    },
    {
        id: 3,
        icon: <FaShuttleVan/>,
        title: "free shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate distinctio, optio provident laboriosam odit?"
    },
    {
        id: 4,
        icon: <FaBeer/>,
        title: "strongest beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate distinctio, optio provident laboriosam odit?"
    },
]