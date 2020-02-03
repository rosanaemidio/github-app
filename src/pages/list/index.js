import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom'

import withServices from '../../services';

import { GithubContext } from '../../contexts'

const List = ({ service }) => {
  const [userList, setUserList] = useState([]);
  const [userListTotal, setUserListTotal] = useState(0);
  const location = useLocation();
  const { setUser } = useContext(GithubContext)

  useEffect(() => {
    console.log('location')
    console.log(location)

    service.getUsersList('thiagoguedes').then(resp => {
      setUserList(resp.data.items)
      setUserListTotal(resp.data.total_count)
      console.log(resp.data.items)
      console.log(resp.data.total_count)
      setUser(resp.data.items[0])

    })
  }, [])

  return (
    <ul>
      {userList.map((item, index) => (
        <li key={index}>
          <Link to={`detail/${item.login}`}>
            <span>{item.login}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default withServices(List);
