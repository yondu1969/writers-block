import React, { Component } from "react";
import { ReactComponent as Comment } from "../../svg/comment.svg";
import { ReactComponent as Heart } from "../../svg/heart2.svg";
import { Link } from "react-router-dom";

const BlogImage1 = (
  <img src="assets/images/resources/news-l-1.jpg" alt="chef List" />
);
const BlogImage2 = (
  <img src="assets/images/resources/news-l-2.jpg" alt="chef List" />
);
const BlogImage3 = (
  <img src="assets/images/resources/news-l-3.jpg" alt="chef List" />
);
const BlogImage4 = (
  <img src="assets/images/resources/news-l-4.jpg" alt="chef List" />
);
const BlogImage5 = (
  <img src="assets/images/resources/news-l-5.jpg" alt="chef List" />
);

const BlogData = [
  {
    image: BlogImage1,
    category: "22 Likes",
    title: "Tips for best ever homemade Macaroni",
    DatePre: " 20 July 2021",
    description:
      "Lorem ipsum dolor sit amet di isicing elit. Ea ratione opius dlor maion adipisicing ili sit amet di isicing elit Ea ratione opius. ",
    comment: "No Comments",
    link: "blog-detail.html",
  },
  {
    image: BlogImage2,
    category: "22 Likes",
    title: "Tips for best ever homemade Macaroni",
    DatePre: " 20 July 2021",
    description:
      "Lorem ipsum dolor sit amet di isicing elit. Ea ratione opius dlor maion adipisicing ili sit amet di isicing elit Ea ratione opius. ",
    comment: "No Comments",
    link: "blog-detail.html",
  },
  {
    image: BlogImage3,
    category: "22 Likes",
    title: "Tips for best ever homemade Macaroni",
    DatePre: " 20 July 2021",
    description:
      "Lorem ipsum dolor sit amet di isicing elit. Ea ratione opius dlor maion adipisicing ili sit amet di isicing elit Ea ratione opius. ",
    comment: "No Comments",
    link: "blog-detail.html",
  },
  {
    image: BlogImage4,
    category: "22 Likes",
    title: "Tips for best ever homemade Macaroni",
    DatePre: " 20 July 2021",
    description:
      "Lorem ipsum dolor sit amet di isicing elit. Ea ratione opius dlor maion adipisicing ili sit amet di isicing elit Ea ratione opius. ",
    comment: "No Comments",
    link: "blog-detail.html",
  },
  {
    image: BlogImage5,
    category: "22 Likes",
    title: "Tips for best ever homemade Macaroni",
    DatePre: " 20 July 2021",
    description:
      "Lorem ipsum dolor sit amet di isicing elit. Ea ratione opius dlor maion adipisicing ili sit amet di isicing elit Ea ratione opius. ",
    comment: "No Comments",
    link: "blog-detail.html",
  },
];

class BlogCotent extends Component {
  render() {
    return (
      <article>
        {BlogData.map((value, index) => (
          <div className="blog-list-item position-relative" key={index}>
            <figure className="mb-0">
              <Link to="/Blog" title="">
                {value.image}
              </Link>
            </figure>
            <div className="blog-list-desc">
              <div className="blog-list-txt">
                <a
                  href="javascript:void(0)"
                  title=""
                  className="blog-date theme-color text-them fs-16"
                >
                  {value.DatePre}
                </a>
                <h3 className="fs-24 mb-3 mt-2">
                  <Link to="/Blog" title="">
                    {value.title}
                  </Link>
                </h3>
                <p className="mb-0"> {value.description}</p>
              </div>
              <div className="blog-meta d-flex flex-row py-4 bg-theme mt-35">
                <a className="text-white fs-15" href="{value.link}" title="">
                  <Comment />
                  {value.comment}
                </a>
                <a
                  className="fm-arimo text-white fs-15 ml-auto"
                  href="{value.link}"
                  title=""
                >
                  <Heart />
                  22 Likes
                </a>
              </div>
            </div>
          </div>
        ))}
      </article>
    );
  }
}
export default BlogCotent;
