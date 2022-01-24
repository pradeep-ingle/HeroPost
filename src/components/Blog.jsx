import { Card } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
const Blog = (props) => {
  const GET_A_POST = gql`
    query ($id: ID!) {
      post(id: $id) {
        id
        title
        body
      }
    }
  `;
  const params = useParams();
  const postID = params.id;
  const { loading, error, data } = useQuery(GET_A_POST, {
    variables: { id: postID },
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  const { title, body } = data.post;
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <p>{body}</p>
      </Card.Body>
    </Card>
  );
};

export default Blog;
