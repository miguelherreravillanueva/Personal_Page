import React from 'react'
import { Row, Tab } from 'react-bootstrap'
import ProfileCard from './ProfileCard'

const Education = (works) => {
  return (
    <Tab.Pane eventKey="first">
    <Row>
        {
            works.map((project, index) => {
                return (
                    <ProfileCard
                        key={index}
                        {...project}
                    />
                )
            })
        }
    </Row>
</Tab.Pane>
  )
}

export default Education