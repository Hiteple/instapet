import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm/index'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return <UserForm onSubmit={activateAuth} />
    }}
  </Context.Consumer>
)
