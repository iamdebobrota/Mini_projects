import { useEffect, useState } from "react";
import "./App.css";
import Pill from "./Components/Pill";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [selectedUser, setSelectedUser] = useState<String[]>([]);

  const [selectedUserSet, setselectedUserSet] = useState<any>(new Set());

  // https://dummyjson.com/users

  useEffect(() => {
    fetchUser();
  }, [searchTerm]);

  const fetchUser = () => {
    if (searchTerm.trim() === "") {
      setSuggestion([]);
      return;
    }

    fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => setSuggestion(res))
      .catch((err) => console.error(err));
  };

  const handleSelectedUser = (user: any) => {
    setSelectedUser([...selectedUser, user]);
    setselectedUserSet(new Set([...selectedUserSet, user.email]));
    setSearchTerm("");
    setSuggestion([]);
  };

  // console.log(selectedUser);

  const handleRemoveUser = (user: any) => {
    let newData = selectedUser.filter((el) => el.email !== user.email);
    setSelectedUser(newData);
    // console.log(user);
  };

  return (
    <div className="user-search-container">
      <div className="user-search-input">
        {/* Pills */}
        {selectedUser.map((el) => {
          return (
            <Pill
              // @ts-ignore
              key={el.email}
              // @ts-ignore
              image={el.image}
              // @ts-ignore
              text={`${el.firstName} ${el.lastName}`}
              onClick={() => handleRemoveUser(el)}
            />
          );
        })}
        {/* input field  */}
        <br />
        <br />
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search by multiple select option..."
          />

          {/* Search suggestions... */}
          <ul className="suggestion-list">
            {suggestion &&
              suggestion?.users?.map((el: any, index: number) => {
                return !selectedUserSet.has(el.email) ? (
                  <li
                    key={el.email + index + el.id}
                    onClick={() => handleSelectedUser(el)}>
                    <img
                      src={el.image}
                      alt={`${el.firstName} ${el.lastName}`}
                    />
                    <span>
                      {el.firstName} {el.lastName}
                    </span>
                  </li>
                ) : (
                  <></>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
