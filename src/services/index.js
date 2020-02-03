import React from 'react';

import { getUsersList, getUser }  from './api';

export default function withServices(Component) {
    const ComponenetWithServices = props => (
        <>
            <Component
                service={{
                    getUsersList,
                    getUser
                }}
                {...props}
            />
        </>
    )

    return ComponenetWithServices
}