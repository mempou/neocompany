import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './helper/ScrollToTop';
import { GlobalStyle } from "./components/common/styles/global.js";
import HomeOne from './HomeOne';
//import HomeTwo from './HomeTwo';
import About from './pages/about/About';
import CourseGrid from './pages/courses/CourseGrid';
import CourseList from './pages/courses/CourseList';
import CourseDetails from './pages/courses/CourseDetails';
import Formation from './pages/courses/Formation';
import Instructor from './pages/instructor/Instructors';
import InstructorDetails from './pages/instructor/InstructorDetails';
import Gallery from './pages/gallery/Gallery';
import Events from './pages/events/Events';
import EventDetails from './pages/events/EventsDetails';
import Login from './pages/account/Login';
import Register from './pages/account/Register';

import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import PageNotFound from './pages/404/PageNotFound';
import ComingSoon from './pages/comingsoon/ComingSoon';
import BlogClassic from './pages/blog/BlogClassic';
import BlogGrid from './pages/blog/BlogGrid';
import BlogDetails from './pages/blog/BlogDetails';
import Product from './pages/shop/Products';
import ProductDetails from './pages/shop/ProductDetails';
import Cart from './pages/shop/Cart';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Switch>
                <Route exact path={"/"} component={HomeOne} />
                <Route path={ "/about"} component={About} />
                <Route path={ "/course-grid"} component={CourseGrid} />
                <Route path={ "/course-list"} component={CourseList} />
                <Route path={ "/services/:id"} component={CourseDetails} />
                <Route path={ "/formation/:id"} component={Formation} />
                <Route path={ "/students"} component={Instructor} />
                <Route path={ "/instructor-details"} component={InstructorDetails} />
                <Route path={ "/gallery"} component={Gallery} />
                <Route path={ "/events"} component={Events} />
                <Route path={ "/event-details/:id"} component={EventDetails} />
                <Route path={ "/login"} component={Login} />
                <Route path={ "/registration"} component={Register} />            
                <Route path={ "/contact"} component={Contact} />
                <Route path={ "/faq"} component={Faq} />
                <Route path={ "/404"} component={PageNotFound} />
                <Route path={ "/coming-soon"} component={ComingSoon} />
                <Route path={ "/blog-classic"} component={BlogClassic} />
                <Route path={ "/blog-grid"} component={BlogGrid} />
                <Route path={ "/blog/postDetail/:id"} component={BlogDetails} />
                <Route path={ "/products"} component={Product} />
                <Route path={ "/product-details/:id"} component={ProductDetails} />
                <Route path={ "/cart"} component={Cart} />
            </Switch>
        </Router>
    )
}

export default App;