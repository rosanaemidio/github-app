import React, { useContext } from 'react'

import { GithubContext } from '../../contexts';

export default function Header() {
    const { user } = useContext(GithubContext);
    return (
        <header>
            <span>{user.login}</span>
            <img src={user.avatar_url} alt={`foto do ${user.login}`} />
        </header>
    )
}