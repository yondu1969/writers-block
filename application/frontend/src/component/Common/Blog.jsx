import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Comment } from "../../svg/comment.svg";
import { ReactComponent as Heart } from "../../svg/heart.svg";

const BlogImage = (
  <img src="assets/images/resources/news1.jpg" alt="chef List" />
);
const BlogImage2 = (
  <img src="assets/images/resources/news2.jpg" alt="chef List" />
);
const BlogImage3 = (
  <img src="assets/images/resources/news3.jpg" alt="chef List" />
);

const Bloglist = [
  {
    image: BlogImage,
    category: "22 Likes",
    title: "Fast-food chain, go behind the scenes",
    learnMore: "learn More",
    DatePre: " 20 July 2021",
    description:
      " Lorem ipsum dolor sit amet dieu ilisicing elit. Earatione opius dlil ilm or maion.",
    comment: "No Comments",
  },
  {
    image: BlogImage2,
    category: "22 Likes",
    title: "Fast-food chain, go behind the scenes",
    learnMore: "learn More",
    DatePre: " 20 July 2021",
    description:
      " Lorem ipsum dolor sit amet dieu ilisicing elit. Earatione opius dlil ilm or maion.",
    comment: "No Comments",
  },
  {
    image: BlogImage3,
    category: "22 Likes",
    title: "Fast-food chain, go behind the scenes",
    learnMore: "learn More",
    DatePre: " 20 July 2021",
    description:
      " Lorem ipsum dolor sit amet dieu ilisicing elit. Earatione opius dlil ilm or maion.",
    comment: "No Comments",
  },
];
class Blog extends Component {
  render() {
    return (
      <div className="sec-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="sec-heading text-center">
                <span className="text-theme theme-color fs-20 d-block mb-2">
                  Best Articles & News
                </span>
                <h2 className="text-uppercase fs-45 mb-40">recipes programs</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {Bloglist.map((value, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="blog-item">
                  <figure className="mb-0 position-relative">
                    {value.image}
                    <div className="text-center">
                      <Link to="/Blog" title="" className="theme-btn-secondary">
                        {value.learnMore}
                        <span></span>
                      </Link>
                    </div>
                  </figure>

                  <div className="blog-desc mx-3 position-relative">
                    <div className="blog-txt bg-white">
                      <a
                        href="javascript:void(0)"
                        title=""
                        className="blog-date fs-16"
                      >
                        {value.DatePre}
                      </a>
                      <h3 className="fs-22 mt-2">
                        <Link to="/Blog" title="">
                          {value.title}
                        </Link>
                      </h3>
                      <p className="mb-0">{value.description}</p>
                    </div>
                    <div className="blog-meta d-flex flex-row">
                      <a
                        className="text-white fs-15"
                        href="javascript:void(0)"
                        title=""
                      >
                        <Comment />
                        {value.comment}
                      </a>
                      <a
                        className="text-white fs-15 ml-auto"
                        href="javascript:void(0)"
                        title=""
                      >
                        <Heart />
                        {value.category}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
