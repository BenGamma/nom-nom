require('ts-node').register()
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const locales = require('./src/data/languages')

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Nom-nom. Om nom nom nom',
    languages: locales.languages,
    defaultLocale: locales.defaultLocale,
  },
  pathPrefix: '/nom-nom',
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nom-nom. Om nom nom nom',
        short_name: 'Nom-nom',
        start_url: '/',
        background_color: '#fffde4',
        theme_color: '#303080',
        display: 'standalone',
        icon: 'static/icon.png',
        localize: [
          {
            start_url: '/en-US/',
            lang: 'en',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-tslint',
  ],
}
