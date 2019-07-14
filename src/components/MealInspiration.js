import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { mb } from 'styled-components-spacing'

const Item = styled.div`
  width: 250px;
  height: 250px;
  flex: none;
  display: flex;
  position: relative;
`

const HeroImage = styled(props => <Img {...props} />)`
  max-width: 100%;
  max-height: 100%;
  perspective: 1px;
`

const Title = styled.h1`
  display: none;
  position: absolute;
  width: 100%;
  color: white;
  bottom: 2rem;
  margin: 0;
  padding: 0.25rem;
  background-color: rgba(0, 0, 0, 0.6);

  ${Item}:hover & {
    display: block;
  }
`

const MealInspiration = ({ meal, locale }) => (
  <Item>
    <Link to={`/${locale}/meal/${meal.slug}/`}>
      <HeroImage resolutions={meal.heroImage.resolutions} />
      <Title>{meal.title}</Title>
    </Link>
  </Item>
)

export default MealInspiration
