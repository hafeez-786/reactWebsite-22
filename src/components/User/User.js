import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTheme } from "../../Context";

const User = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { theme } = useTheme();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container">
      <h1>User Details</h1>
      {loading ? (
        <div className="display-5">Loading....</div>
      ) : (
        <div className="row">
          <div className="col-md-6 my-2">
            <div className={`card bg-${theme}`}>
              <div className="card-body">
                <h5 className="pl-2 card-title">{user.name}</h5>
                <ul className="list-group my-3">
                  <li className="list-group-user">
                    <strong>Username: </strong>
                    {user.username}
                  </li>
                  <li className="list-group">
                    <strong>Email:</strong>
                    {user.email}
                  </li>
                  <ul className="list-group my-3">
                    <strong>Address:</strong>
                    <li className="mx-2">
                      <strong>Street:</strong>
                      {user.address.street}
                    </li>
                    <li className="mx-2">
                      <strong>Suite:</strong>
                      {user.address.suite}
                    </li>
                    <li className="mx-2">
                      <strong>Zip:</strong>
                      {user.address.zipcode}
                    </li>
                  </ul>
                  <li className="list-group-user">
                    <strong>Phone: </strong>({user.phone})
                  </li>
                  <li className="list-group-user">
                    <strong>Website: </strong>
                    {user.website}
                  </li>
                  <ul className="list-group mt-2">
                    <strong>Company Details: </strong>
                    <li className="mx-2">
                      <strong>Name: </strong>
                      {user.company.name}
                    </li>
                    <li className="mx-2">
                      <strong>Catch Phrasey: </strong>
                      {user.company.catchPhrase}
                    </li>
                    <li className="mx-2">
                      <strong>BS: </strong>
                      {user.company.bs}
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 my-2 ">
            <div className={`img-thumbnail bg-${theme}`}>
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Users Photos"
              />
              <p className="text-center lead mt-2">{user.name}'s Photo</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
