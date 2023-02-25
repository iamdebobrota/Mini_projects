import React, { useEffect, useState } from "react";
import style from "./Styles.module.css";

const Table = ({ data, handleDelete, handleEditDone, multipleDelete }) => {
  const [editableId, seteditableId] = useState(null);
  const [edit, setedit] = useState({});
  const [checked, setchecked] = useState(false);
  //data.find((e)=> e.id===editableId)
  const [temp, settemp] = useState([])

  useEffect(() => {
    editableId && setedit(data.find((e) => e.id === editableId));
  }, [editableId]);

  const handleDone = () => {
    handleEditDone(editableId, edit);
    seteditableId(null);
  };

  const handleSelect = (e, id) => {
    let check = e.target.checked;
    setchecked(check);
    // console.log(id)
  };
  const handleEditChange = (e) => {
    let inp = e.target.name;
    setedit({
      ...edit,
      [inp]: e.target.value,
    });
  };

  const ClickHighlight = (e, el) => {
   data.filter((user)=> {
      if(user.id===el.id){
        user.selected=e.target.checked;
        settemp([...temp, user])
      }
      return user
    })
    multipleDelete(temp)
  };
  // console.log(temp)

  return (
    <div>
      <table className={style.table}>
        <thead className="table_head">
          <tr>
            <th>
              {" "}
              <input
                onChange={handleSelect}
                type="checkbox"
                name="selected"
                className="seleted"
              />{" "}
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        {data
          // .filter((ab) => ab.name.toLowerCase().includes(query))
          .map((el) => {
            return (
              <tbody key={el.id}>
                <tr
                 style={checked || el.selected? { backgroundColor: "yellow" } : {}}
                >
                  <td>
                    <input
                      type="checkbox"
                      name="selected"
                      className="seleted"
                      checked={el.selected}
                      onChange={(e) => ClickHighlight(e, el)}
                      // onChange={(e) => handleSelect(e, el.id)}
                    />
                  </td>
                  <td>
                    {editableId === el.id ? (
                      <input
                        type="text"
                        placeholder={el.name}
                        name="name"
                        onChange={handleEditChange}
                        // value={edit.name}
                      />
                    ) : (
                      el.name
                    )}
                  </td>
                  <td>
                    {editableId === el.id ? (
                      <input
                        type="text"
                        placeholder={el.email}
                        name="email"
                        onChange={handleEditChange}
                      />
                    ) : (
                      el.email
                    )}
                  </td>
                  <td>{el.role}</td>
                  <td>
                    <button
                      onClick={() => {
                        editableId !== el.id
                          ? seteditableId(el.id)
                          : handleDone();
                      }}>
                      {editableId === el.id ? "Done" : "Edit"}
                    </button>
                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default Table;
