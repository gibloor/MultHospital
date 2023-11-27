import React, { useState } from 'react'

import Chooser from './Chooser'
import MultOffer from './MultOffer'
import QuestOffer from './QuestOffer'

import './styles.scss'

interface Props {
  id: number
}

const UserOffer = (props: Props) => {

  const [offer, setOffer] = useState('option')

  const changeOffer = (option: string) => {
    setOffer(option)
  }

  return (
    <div className={`user-offer ${offer != 'option' ? 'user-offer__opened' : ''}`}>
      <p>
        User offer
      </p>
      <Chooser changeOffer={changeOffer} offer={offer} />
      {
        offer === 'multOffer' &&
        <MultOffer id={props.id} />
      }
      {
        offer === 'questOffer' &&
        <QuestOffer id={props.id} />
      }
    </div>
  )
}

export default UserOffer