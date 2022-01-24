import { Link } from "react-router-dom";

const PostCard = ({ id, title }) => {
  return (
    <div className="card post" style={{ width: "16rem" }}>
      <img src="/images/nature.jpg" className="card-img-top" alt="nature" />

      <div className="card-body">
        <h5 className="card-title">Post {id}</h5>
        <p className="card-text">{title}</p>
      </div>
      <div className="card-body">
        <Link to={`/blog/${id}`} className="card-link">
          Post {id} details
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
