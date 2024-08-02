
import { Link } from 'react-router-dom';
import { Styles } from '../styles/recentPost.js';
import React, {useState, useEffect } from 'react';


const RecentPost = () => {
    const [alldata, setAllData] = useState([]);

    // Utility function to strip HTML tags
    function stripHTML(html) {
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    // Wrapper component to use the utility function
    const TextWrapper = ({ html }) => {
        return <>{stripHTML(html)}</>;
    }

    useEffect(() => {
        fetch("https://www.admin.neocompany.org/index.php/wp-json/wp/v2/posts?per_page=3")
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data);
                setAllData(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    console.log('data', alldata);
        return (
            <Styles>
                {/* Recent Post */}
                <div className="recent-blog">
                    <h5>Post Recent</h5>
                    <div className="blog-items">
                        {
                            alldata.map((data, i) => (

                                <div className="item-box d-flex" key={i}>
                                    <div className="item-img">
                                        <Link to={data.blogLink}><img src={process.env.PUBLIC_URL + `/assets/images/${data.imgUrl}`} alt="" /></Link>
                                    </div>
                                    <div className="item-content">
                                        <p className="title"><Link to={process.env.PUBLIC_URL + data.blogLink}><TextWrapper html={data.title?.rendered} /></Link></p>
                                        <span className="date">{data.date}</span>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </Styles>
        )
    }


export default RecentPost
