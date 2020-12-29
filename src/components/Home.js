import React from 'react';
import './Home.css';
import axios from "axios";

class Home extends React.Component {

    state = {
        isLoading: true,
        movies: []
    }

    async componentDidMount() {
        const movies = axios.get('https://yts.mx/api/v2/list_movies.json');
        console.log(movies);
    }

    render() {
        return (
            <div>
                Hello Worlds
            </div>
        )
    }
}

export default Home;