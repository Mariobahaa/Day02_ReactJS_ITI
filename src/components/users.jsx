
const Users = (props)=>{
    console.log(props);
    let ulist = props.sentList;

    let tableData = ulist.map((u)=> (
            <tr key={u.name}> 
                <td>{u.name}</td>
                <td>{u.age}</td>
            </tr>
    ));
    return (
          <table>
              <thead>
                  <tr>
                  <th>Name</th>
                  <th>Age</th>
                  </tr>
              </thead>
              <tbody>
                {tableData}
              </tbody>
          </table>
        )
}

export default Users;
