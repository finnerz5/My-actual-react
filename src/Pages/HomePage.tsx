import { NEWS_PATH } from "../Constants/paths";
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <>
            <h1>This is the homepage</h1>
            <p>Link to News Page: <Link to={NEWS_PATH}>News Page.</Link></p>

        </>

    )


}

export default Homepage;