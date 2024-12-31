import { gql } from 'graphql-request'

export const GetAllSlugsQuery = gql`
  query GetAllSlugs {
    pages {
      slug
    }
  }
`;

export const GetPageQuery = gql`
  fragment MediaFields on UploadFile {
    documentId
    hash
    ext
    url
    mime
    height
    width
  }

  fragment ImageComponent on ComponentSharedImage {
    size
    image {
      ... MediaFields
    }
  }

  fragment VideoComponent on ComponentSharedVideo {
    size
    video {
      ... MediaFields
    }
  }

  fragment MediaComponent on ComponentSharedMedia {
    images {
      ... ImageComponent
    }
    videos {
      ... VideoComponent
    }
    loopVideo
  }

  fragment InlineMediaComponent on ComponentSectionsInlineMedia {
    startFrame {
      ... ImageComponent
    }
    endFrame {
      ... ImageComponent
    }
    video {
      ... VideoComponent
    }
    options {
      ... OptionsFields
    }
    template
  }

  fragment BackgroundFields on ComponentSharedBackground {
    color {
      color
    }
    image {
      image {
        hash
        ext
      }
      breakpoint
      size
      attachment
      position
      repeat
    }
  }

  fragment PageFields on Page {
    documentId
    label
    slug
  }

  fragment TextFields on ComponentSharedText {
    id
    name
    text
    align
    role
    tag
    customOptions
  }

  fragment TextGroupFields on ComponentSharedTextGroup {
    eyebrow
    heading
    subheading
    text
  }

  fragment IconFields on ComponentSharedIcon {
    name
    svg
  }

  fragment ListItemFields on ComponentSharedListItem {
    textGroup {
      ...TextGroupFields
    }
    icon {
      ...IconFields
    }
  }

  fragment GridComponent on ComponentSectionsGrid {
    columns
    items {
      ...ListItemFields
    }
    options {
      ...OptionsFields
    }
    template
  }

  fragment OptionsFields on ComponentSharedOptions {
    margin {
      top
      bottom
    }
    show
    customOptions
  }

  fragment ButtonFields on ComponentSharedButton {
    id
    label
    to {
      label
      slug
    }
    action
    variant
    color
    size
    iconName
    trailing
    padded
    disabled
  }

  fragment CarouselOptions on ComponentSharedCarouselOptions {
    autoplayDuration
    autoplay
  }

  fragment ProductFields on ComponentProductProduct {
    name
    price
    priceFrom
    media {
      ext
      hash
    }
  }

  query GetPage($slug: String!) {
    pages (filters: { slug: { eq: $slug }}) {
      documentId
      name
      label
      slug
      header {
        logo {
          ... MediaFields
        }
        phones {
          documentId
          phone
          link
        }
        navigation {
          documentId
          menu {
            label
            link
            showInDesktop
            showInMobile
            page {
              ... PageFields
            }
            children
          }
        }
        customOptions
        componentName {
          name
        }
      }
      breadcrumbs
      parent {
        ... PageFields
        parent {
          ... PageFields
          parent {
            ... PageFields
          }
        }
      }
      product {
        ...ProductFields
      }
      sections {
        documentId
        blocks {
          ... on ComponentSectionsHero {
            __typename
            id
            textGroup {
              ...TextGroupFields
            }
            media {
              ... MediaComponent
            }
            buttonGroup {
              buttons {
                ... ButtonFields
              }
            }
            options {
              ... OptionsFields
            }
            blockComponent {
              name
            }
          }
          ... on ComponentSectionsCarousel {
            __typename 
            id
            slides {
              id
              text {
                ... TextFields
              }
              media {
                ... MediaComponent
              }
            }
            carouselOptions {
              ... CarouselOptions
            }
            options {
              ... OptionsFields
            }
            blockComponent {
              name
            }
          }
          ... on ComponentSectionsSpacer {
            height
            componentName {
              title
              name
            }
          }
          ... on ComponentTypographyHeadlineGroup {
            textList {
              ... TextFields
            }
            customOptions
            componentName {
              name
            }
          }
          ... on ComponentSharedButtonGroup {
            buttons {
              ... ButtonFields
            }
            options {
              ...OptionsFields
            }
            componentName {
              name
            }
          }
          ... on ComponentSectionsInlineMedia {
            ... InlineMediaComponent
          }
          ... on ComponentSectionsGrid {
            ... GridComponent
          }
        }
        background {
          ...BackgroundFields
        }
        options {
          ...OptionsFields
        }
      }
      seo {
        metaDescription
        metaTitle
      }
      pageComponent {
        name
      }
    }
    currency {
      rate
      currency
    }
  }
`