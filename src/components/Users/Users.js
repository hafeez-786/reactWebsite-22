import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useTheme } from "../../Context";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUrl = "https://jsonplaceholder.typicode.com/users";

  const { url } = useRouteMatch();
  const { theme } = useTheme();

  useEffect(() => {
    axios.get(getUrl).then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="display-4">Users</h1>
      <div className="row">
        {loading ? (
          <div className="display-5">Loading....</div>
        ) : (
          users.map((user) => {
            return (
              <div className="col-md-3 my-2">
                <div className={`card bg-${theme}`}>
                  <img src="https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg" alt="users photograph" className="w-100" />
                </div>
                <div className="card-body">
                  <h5 className="pl-2 card-title">{user.name}</h5>
                  <ul className="list-group my-3">
                    <li className="list-group-user">
                      <strong>User Name: </strong>
                      {user.username}
                    </li>
                  </ul>
                  <Link
                    className="btn btn-outline-danger"
                    to={`${url}/${user.id}`}
                  >
                    Show More Details
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Users;
