import HeroSection from "./HeroSection";
import { useState } from "react";
import PostCard from "./PostCard";
import Pagination from "./Pagination";
import { useQuery, gql } from "@apollo/client";
import { paginate } from "./paginate";

const AllPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const GET_ALL_POSTS = gql`
    query ($options: PageQueryOptions) {
      posts(options: $options) {
        data {
          id
          title
        }
        meta {
          totalCount
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ALL_POSTS);
  // console.log(useQuery(GET_ALL_POSTS));
  // console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const postPaginated = paginate(data.posts.data, currentPage, pageSize);
  return (
    <div className="cmp-home">
      <HeroSection title="All Posts" />
      <div className="posts">
        {postPaginated.map((post) => (
          <PostCard id={post.id} title={post.title} key={post.id} />
        ))}
      </div>
      <Pagination
        itemsCount={data.posts.data.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={(page) => handlePageChange(page)}
      />
    </div>
  );
};

export default AllPosts;
