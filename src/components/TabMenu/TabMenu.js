import React, { useState } from 'react'
import cx from 'classnames'

import { TAB_CHOICES } from '../../constants'
import AccountSettings from '../AccountSettings/AccountSettings'
import UserInformation from '../UserInformation/UserInformation'

import './TabMenu.scss'

export default function TabMenu() {
  const [tabChoice, setTabChoice] = useState(TAB_CHOICES.ACCOUNT)

  const renderTabChoice = (choice) => {
    switch (choice) {
      case TAB_CHOICES.ACCOUNT:
        return <AccountSettings />
      case TAB_CHOICES.USER:
        return <UserInformation />
      default:
        return <AccountSettings />
    }
  }

  return (
    <div className="TabMenu">
      <div className="TabMenu__links">
        <a
          onClick={() => setTabChoice(TAB_CHOICES.ACCOUNT)}
          className={cx('TabMenu__link', {
            'TabMenu__link--active': tabChoice === TAB_CHOICES.ACCOUNT,
          })}
        >
          Account Settings
        </a>
        <a
          onClick={() => setTabChoice(TAB_CHOICES.USER)}
          className={cx('TabMenu__link', {
            'TabMenu__link--active': tabChoice === TAB_CHOICES.USER,
          })}
        >
          User Information
        </a>
      </div>
      <div className="TabMenu__choice">{renderTabChoice(tabChoice)}</div>
    </div>
  )
}
