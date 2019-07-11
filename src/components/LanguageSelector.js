import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { getMessage } from '../data/languages'

const Selector = styled.div`
  font-size: 1rem;
  width: 150px;
  position: relative;
  display: flex;
  padding: 10px;
  border: 1px solid #333;

  & a {
    text-decoration: none;
  }

  &:hover {
    background-color: white;
    border-top: 1px solid #333;
    border-left: 1px solid #333;
    border-right: 2px solid #000;
  }
`

const SelectorLabel = styled.span`
  width: 100%;

  &::after {
    content: '\\25BC';
    margin-left: 10px;
    float: right;
  }

  ${Selector}:hover &::after {
    content: '\\25B2';
  }
`

const Items = styled.div`
  display: none;
  position: absolute;
  margin-top: 30px;
  background-color: white;
  width: 150px;
  margin-left: -11px;
  z-index: 99999;
  border-top: 1px solid #EEE;
  border-left: 1px solid #333;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;

  ${Selector}:hover & {
    display: block;
  }
`

const Item = styled.div`
  padding: 10px;
`

const LanguageSelector = ({ currentLocale }) => {
  const messages = getMessage(currentLocale);
  const data = useStaticQuery(graphql`
    query LanguageQuery {
      site {
        siteMetadata {
          languages {
            locale
            label
          }
        }
      }
    }
  `) 

  return (
    <Selector>
      <SelectorLabel>{messages('LANGUAGE')}</SelectorLabel>
      <Items>
        {data.site.siteMetadata.languages.map(({label, locale}) =>(
          <Item key={locale}>
            <Link to={`/${locale}/`}>{label}</Link>
          </Item>
        ))}
      </Items>
    </Selector>
  )
}

export default LanguageSelector
