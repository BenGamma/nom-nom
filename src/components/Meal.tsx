import React, { ReactNode } from 'react'

import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { mb, pb } from 'styled-components-spacing'

import { formatDateDistanceToNow } from '../data/languages'
import ContentfulRichText from './ContentfulRichText'

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mb({ mobile: 2, tablet: 3, desktop: 3 })};
  ${breakpoint('tablet')`
    flex-wrap: nowrap;
  `}
`

const Header = styled.h1`
  margin: 0;
  width: 100%;
  ${breakpoint('tablet')`
    width: auto;
  `}
`

const SubHeader = styled.div`
  margin: 0;
  font-size: 0.8em;
  color: #777;
  flex-shrink: 0;
`

const Description = styled.div`
  width: 100%;
  color: #223;
  ${pb({ mobile: 2, tablet: 3, desktop: 4 })};
`

interface IProps {
  meal: IMeal
  children: ReactNode
}

const Meal: React.FC<IProps> = ({ meal, children }) => {
  const { title, updatedAt, description, node_locale } = meal

  return (
    <>
      <HeaderWrapper>
        <Header>{title}</Header>
        <SubHeader>
          {formatDateDistanceToNow(node_locale, new Date(updatedAt))}
        </SubHeader>
      </HeaderWrapper>

      <Description>{ContentfulRichText(description.json)}</Description>
      {children}
    </>
  )
}

export default Meal
