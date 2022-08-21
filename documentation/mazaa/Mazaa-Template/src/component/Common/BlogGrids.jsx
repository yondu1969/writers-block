import React, { Component } from "react";
import { ReactComponent as Comment } from "../../svg/comment.svg";
import { ReactComponent as Heart } from "../../svg/heart2.svg";
import { Link } from "react-router-dom";
const BlogImage1 = (
  <img src="assets/images/resources/news1.jpg" alt="chef List" />
);
const BlogImage2 = (
  <img src="assets/images/resources/news2.jpg" alt="chef List" />
);
const BlogImage3 = (
  <img src="assets/images/resources/news3.jpg" alt="chef List" />
);
const BlogImage4 = (
  <img src="assets/images/resources/news4.jpg" alt="chef List" />
);
const BlogImage5 = (
  <img src="assets/images/resources/news5.jpg" alt="chef List" />
);
const BlogImage6 = (
  <img src="assets/images/resources/news6.jpg" alt="chef List" />
);

const Blog = [
  {
    image: BlogImage1,
    category: "22 Likes",
    title: "Fast-food chain, go behind the scenes",
    DatePre: " 20 July 2021",
    button: "learn More",
    description:
      "Lorem ipsum dolor sit amet dieu ilisicing elit. Earatione opius dlil ilm or maion.",
    comment: "No Comments",
    link: "blog-detail.html",
  },
  {
    image: BlogImage2,
    category: "22 Likes",
    title: "Tips for best ever homemade Macaroni",
    DatePre: " 20 July 2021",
    button: "learn More",
    description:
      "Lorem ipsum dolor sit amet dieu ilisicing elit. Earatione opius dlil ilm or maion.",
    comment: "No Comments",
    link: "blog-detail.html",
  },
  {
    image: BlogImage3,
    category: "22 Likes",
    title: "Healthy lifestyle, diet plans",
    DatePre: " 20 July 2021",
    button: "learn More",
    description:
      "Lorem ipsum dolor sit amet dieu ilisicing elit. Earatione opius dlil ilm or maion.",
    comment: "No Comments",
    link: "blog-detail.html",
  },
  {
    image: BlogImage4,
    category: "22 Likes",
    title: " Fast-food chain, go behind the scenes",
    description:
      "Lorem ipsum dolor sit amet dieu ilisicing elit. Earatione opius dlil ilm or maion.",
    DatePre: " 20 July 2021",
    button: "learn More",
    comment: "No Comments",
    link: "blog-detail.html",
  },
  {
    image: BlogImage5,
    category: "22 Likes",
    title: "Food & nutrition facts on a range",
    DatePre: " 20 July 2021",
    description:
      "Lorem ipsum dolor sit amet dieu ilisicing elit. Earatione opius dlil ilm or maion.",
    button: "learn More",
    comment: "No Comments",
    link: "blog-detail.html",
  },
  {
    image: BlogImage6,
    category: "22 Likes",
    title: "Healthy lifestyle, diet plans",
    DatePre: " 20 July 2021",
    description:
      "Lorem ipsum dolor sit amet dieu ilisicing elit. Earatione opius dlil ilm or maion.",
    button: "learn More",
    comment: "No Comments",
    link: "blog-detail.html",
  },
];

class BlogGrids extends Component {
  render() {
    return (
      <div className="sec-space">
        <div className="container">
          <div className="row">
            {Blog.map((value, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <article>
                  <div className="blog-item">
                    <figure className="mb-0 position-relative">
                      {value.image}
                      <div className="text-center">
                        <Link
                          to="Blog"
                          title=""
                          className="theme-btn-secondary"
                        >
                          {value.button}
                          <span></span>
                        </Link>
                      </div>
                    </figure>
                    <div className="blog-desc mx-3 position-relative">
                      <div className="blog-txt bg-white">
                        <Link to="Blog" title="" className="blog-date fs-16">
                          {value.DatePre}
                        </Link>
                        <h3 className="fs-22 mt-2">
                          <Link to="Blog" title="">
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
                          <i className="flaticon-comment"></i>
                          {value.comment}
                        </a>
                        <a
                          className="text-white fs-15 ml-auto"
                          href="javascript:void(0)"
                          title=""
                        >
                          <i className="flaticon-heart"></i>
                          {value.category}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default BlogGrids;
