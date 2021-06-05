import { extendTheme } from '@chakra-ui/react'
// Base rebass theme, copied from @rebass-preset
const theme = extendTheme({
  styles: {
    global: {
      '.pac-container, .pac-logo, &::after': {
        zIndex: 9999,
      },
      '.marker-text-price': {
        color: 'white',
        fontFamily: 'Inter',
        fontSize: '16px',
      },
      '.marker-text-price-favorite': {
        color: '#203F9D',
        fontFamily: 'Inter',
        fontSize: '16px',
      },
      '.marker-text-price-favorite-rent': {
        color: '#4e0f78',
        fontFamily: 'Inter',
        fontSize: '16px',
      },
      '.marker-text-price-favorite-sold': {
        color: '#AA0000',
        fontFamily: 'Inter',
        fontSize: '16px',
      },
      '.gm-ui-hover-effect': {
        display: 'none !important',
      },
      '.card-info-container': {
        margin: '10px',
      },
      '.gm-style-iw': {
        margin: '0 !important',
        padding: '0 !important',
        backgroundColor: '#1D1D1D',
      },
      '.gm-style-iw-d': {
        overflow: 'hidden !important',
      },
      '.gm-style .gm-style-iw-t&::after': {
        // background: '#1D1D1D !important',
        display: 'none',
      },
      '.tip-info': {
        backgroundColor: '#1D1D1D',
        color: 'white',
        padding: '10px',
      },
      '.tip-info-neighbourhood': {
        backgroundColor: '#1D1D1D',
        color: 'white',
        padding: '10px',
        maxWidth: '200px',
      },
      '.card-personal-location-container': {
        margin: '10px',
        width: '180px',
        height: '140px',
      },
      '.card-personal-location-header': {
        fontSize: '13px',
        fontWeight: 'bold',
      },
      '.card-personal-location-address': {
        fontSize: '10px',
        fontWeight: 'normal',
        color: '#CDCDCD',
      },
      '.card-neighbour-location-container': {
        margin: '10px',
        width: '180px',
        height: '200px',
      },
      '.card-neighbour-short-location-container': {
        margin: '10px',
        width: '180px',
        height: '125px',
      },
      '.no-scroll-bar': {
        '&::-webkit-scrollbar': {
          width: '0px',
          height: '0px',
        },
        '&::-webkit-scrollbar-track': {
          width: '0px',
          height: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '0px',
        },
      },
    },
  },
  breakpoints: {
    xxl: '96em',
  },
  colors: {
    // 600 hover
    // 700 active
    tog: {
      primary: {
        100: '#E2EFFF',
        200: '#C6DDFF',
        300: '#8CB1F1',
        400: '#6E96E8',
        500: '#406FDB',
        600: '#2F55BD',
        700: '#203F9D',
        800: '#142C7E',
      },
      text: '#3b3b3b',
      secondaryText: '#656565',
      foregroundGrey: '#e6e6e6',
      backgroundGrey: '#f1f1f1',
      backgroundBlue: '#DDF0FF',
      divider: '#cdcdcd',
      inputBorder: '#cdcdcd',
      success: {
        100: '#E8F9E7',
        200: '#C9E9C8',
        300: '#AED6AA',
        400: '#6DAB64',
        500: '#558E4B',
        600: '#397031',
        700: '#27571F',
        800: '#1C4614',
      },
      link: {
        600: '#E2EFFF',
        700: '#C6DDFF',
      },
      white: {
        inactive: 'rgba(255, 255, 255, 0.4)',
        active: 'rgba(255, 255, 255, 1.0)',
      },
      blue: {
        500: '#00AEEF',
      },
      red: {
        500: '#EE2A7B',
      },
      yellow: {
        500: '#F7941D',
      },
    },
    gray: {
      100: '#F5F5F5',
      200: '#E6E6E6',
      300: '#CDCDCD',
      400: '#A1A1A1',
      500: '#757575',
      600: '#676767',
      700: '#3B3B3B',
      800: '#1D1D1D',
    },
  },
  sizes: {
    section: {
      md: '480px',
    },
  },
  textStyles: {
    h1: {
      fontSize: [24, null, null, 40],
    },
    h2: {
      fontSize: [20],
    },
    h3: {
      fontSize: [16],
    },
    h4: {
      fontSize: [12, null, null, 14],
    },
    h5: {
      fontSize: [14],
      fontWeight: 'normal',
    },
    h6: {
      fontSize: [12],
      fontFamily: 'Inter',
      fontWeight: '600',
      fontStyle: 'normal',
    },
    tableHeader: {
      fontSize: [12, null, null, 16],
      fontWeight: '600',
    },
  },
  components: {
    Skeleton: {
      baseStyle: {},
      defaultProps: {
        startColor: 'tog.backgroundGray',
        endColor: 'tog.foregroundGray',
      },
    },
    Button: {
      defaultProps: {
        colorScheme: 'tog.primary',
      },
      baseStyle: {
        bg: 'tog.primary.500',
        color: 'white',
        borderRadius: 4,
        _hover: {
          bg: 'tog.primary.600',
          _disabled: {
            bg: 'tog.primary.500',
          },
        },
        _active: { bg: 'tog.primary.700' },
      },
      variants: {
        mobile: {
          display: 'block',
          mx: 'auto',
          mt: 4,
          px: 8,
          py: 3,
          width: 'auto',
          height: 'auto',
          overflow: 'hidden',
        },
        unSelectedTab: {
          border: 'none',
          bg: 'gray.100',
          color: 'tog.primary.500',
        },
        btnOutline: {
          bg: 'white',
          border: '1px solid #406FDB',
          color: 'tog.primary.500',
          borderRadius: 'md',
          borderColor: 'tog.primary',
          _active: { bg: 'white' },
          _hover: { bg: 'tog.primary.100' },
        },
        listingCardButton: {
          borderRadius: 4,
          h: '18px',
          bg: 'white',
          border: '1px',
          borderColor: 'tog.divider',
          textTransform: 'capitalize',
          fontWeight: 'normal',
          fontSize: '12px',
          px: 2,
          py: 1,
          color: 'text',
          height: 'auto',
          _active: { bg: 'white' },
          _hover: { bg: 'tog.primary.100' },
        },
        googleMapButton: {
          bg: 'white',
          color: 'gray.700',
          borderRadius: 4,
          _hover: {
            bg: 'gray.200',
            _disabled: {
              bg: 'tog.primary.500',
            },
          },
          _active: { bg: 'tog.primary.500', color: 'white' },
        },
        googleMapButtonOpen: {
          bg: 'tog.primary.500',
          color: 'white',
        },
        personalLocationDelete: {
          bg: 'transparent',
          _hover: { bg: 'none' },
          _active: { bg: 'none' },
        },
        deleteButtton: {
          bg: 'transparent',
          opacity: 0,
          _hover: {
            bg: 'transparent',
            opacity: 1,
            _active: {
              bg: 'transparent',
            },
          },
        },
        signInActive: {
          bg: 'white',
          borderBottom: '2px',
          borderColor: 'tog.primary.500',
          borderRadius: 0,
          _hover: { bg: 'tog.primary.100' },
          _active: { bg: 'tog.primary.200' },
          _focus: { boxShadow: 'none' },
        },
        signInUnactive: {
          borderColor: 'gray.300',
          borderBottom: '1px',
          color: 'gray.300',
          bg: 'white',
          borderRadius: 0,
          _hover: { bg: 'tog.primary.100' },
          _active: { bg: 'tog.primary.200' },
          _focus: { boxShadow: 'none' },
        },
        locationButton: {
          px: 4,
          py: [2, null, null, 6],
          my: [4, null, null, 0],
          textAlign: ['center', null, null, 'left'],
          color: 'gray.500',
          bg: 'white',
          justifyContent: 'flex-start',
          h: ['80%', null, null, 'full'],
          w: ['full', null, null, 'full'],
          rounded: [4, null, null, 0],
          borderBottom: [0, null, null, '1px'],
          borderColor: 'tog.divider',
          _active: { bg: 'tog.primary.500' },
          _hover: { bg: 'tog.primary.100' },
        },
        locationSelectedButton: {
          px: 4,
          py: [2, null, null, 6],
          my: [4, null, null, 0],
          textAlign: ['center', null, null, 'left'],
          bg: 'tog.primary.500',
          justifyContent: 'flex-start',
          rounded: [4, null, null, 0],
          borderBottom: [0, null, null, '1px'],
          color: 'white',
          h: ['80%', null, null, 'full'],
          w: ['full', null, null, 'full'],
          borderColor: 'tog.divider',
          _active: { bg: 'tog.primary.700' },
          _hover: { bg: 'tog.primary.600' },
        },
        locationSearchButton: {
          py: [4, null, 2],
          my: 0,
          textAlign: ['center', null, null, 'left'],
          color: 'gray.500',
          bg: 'white',
          justifyContent: 'flex-start',
          alignItems: 'center',
          h: ['50px', null, '40px'],
          w: ['full', null, null, 'full'],
          rounded: 0,
          borderBottom: '1px',
          borderColor: 'tog.divider',
          _active: { bg: 'tog.primary.500', boxShadow: 'none' },
          _hover: { bg: 'tog.primary.100' },
          _focus: { boxShadow: 'none' },
        },
        locationSelectedSearchButton: {
          py: 2,
          my: 0,
          textAlign: ['center', null, null, 'left'],
          bg: 'tog.primary.500',
          alignItems: 'center',
          justifyContent: 'flex-start',
          rounded: 0,
          borderBottom: '1px',
          color: 'white',
          h: ['50px', null, '40px'],
          w: ['full', null, null, 'full'],
          borderColor: 'tog.divider',
          _active: { bg: 'tog.primary.700' },
          _hover: { bg: 'tog.primary.600' },
          _focus: { boxShadow: 'none' },
        },
        linkButton: {
          color: 'tog.primary.500',
          textDecoration: 'underline',
          border: 'none',
          bg: 'transparent',
          _active: { bg: 'white' },
          _hover: { bg: 'tog.primary.100' },
        },
        linkRequestButton: {
          color: 'tog.primary.500',
          border: 'none',
          fontSize: '12px',
          bg: 'transparent',
          h: 'auto',
          p: 0,
          m: 0,
          _active: { bg: 'tranparent' },
          _hover: { bg: 'tranparent' },
          _focus: { boxShadow: 'none' },
        },
        linkFooterButton: {
          color: 'tog.secondaryText',
          bg: 'transparent',
          fontWeight: 'normal',
          fontSize: 14,
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          px: 0,
          mb: [6, null, null, 0],
          border: 'none',
          _focus: { boxShadow: 'none' },
          _active: { bg: 'white' },
          _hover: {
            textDecoration: 'underline',
            bg: 'transparent',
          },
        },
        referButton: {
          rounded: 'full',
          bg: 'tog.yellow.500',
          _active: { bg: '#A85E06' },
          _hover: { bg: '#D97A08' },
          _focus: { boxShadow: 'none' },
        },
        cashBackButton: {
          px: 4,
          mt: 3,
        },
      },
    },
    Container: {
      variants: {
        dropzoneFlex: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px',
          borderColor: 'tog.divider',
          px: 0,
          py: 4,
        },
        dropzoneFlexNoBorder: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px',
          borderColor: 'transparent',
          px: 0,
          pt: 4,
        },
        mortgageFlex: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        },
      },
    },
    Box: {
      variants: {
        card: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        placeholder: {
          borderRadius: 4,
          bg: 'tog.backgroundGray',
        },
      },
    },
    Dropzone: {
      baseStyle: {
        borderRadius: 'base',
      },
      variants: {
        dropzoneCanDrop: {
          bg: 'tog.primary.200',
          border: '2px',
          borderColor: 'tog.primary.200',
        },
        dropzoneIsOver: {
          bg: 'tog.success.300',
          border: '2px',
          borderColor: 'tog.success.400',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Inter',
        color: 'tog.text',
      },
      variants: {
        mobile: {
          textAlign: 'center',
        },
        desktop: {},
        heroBanner: {
          textAlign: 'center',
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Inter',
        color: 'tog.text',
      },
      variants: {
        mobile: {
          fontSize: 16,
          textAlign: 'center',
        },
        desktop: {
          py: 4,
        },
        heroBanner: {
          textAlign: 'center',
        },
        dropzoneLabel: {
          fontSize: 12,
        },
        buttonLink: {
          color: 'tog.primary.500',
        },
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: 'tog.primary.500',
      },
    },
    NumberInput: {
      defaultProps: {
        focusBorderColor: 'tog.primary.500',
      },
    },
    Input: {
      baseStyle: {
        field: {
          color: 'tog.text',
        },
      },
      defaultProps: {
        focusBorderColor: 'tog.primary.500',
      },
      sizes: {
        md: {
          field: {
            borderRadius: 4,
            bg: 'black',
          },
          addon: {
            bg: 'black',
          },
        },
      },
      variants: {
        outline: {
          field: {
            bg: 'white',
            textOverflow: 'ellipsis',
            type: 'text',
          },
        },
        lightOutline: {
          field: {
            fontSize: 12,
            fontWeight: '500',
            lineHeight: '16px',
            color: 'gray.800',
            letterSpacing: '0.5px',
            h: 7,
            pl: '7px',
            borderRadius: 4,
            bg: 'white',
            border: '1px',
            borderColor: 'tog.inputBorder',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        fontWeight: 600,
        color: 'tog.primary.500',
      },
      variants: {
        logo: {
          color: 'tog.text',
          fontWeight: 'bold',
          fontSize: 20,
        },
        logoDesktop: {
          color: 'tog.text',
          fontWeight: 'bold',
          fontSize: 20,
          mr: 4,
          _focus: { boxShadow: 'none' },
        },
        navLink: {
          color: 'tog.text',
          _focus: { boxShadow: 'none' },
        },
        navLinkDesktop: {
          color: 'gray.100',
        },
        footer: {
          fontWeight: 'normal',
          fontSize: 14,
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          mb: [4, null, null, 0],
          pr: [10, null, null, 0],
          color: 'tog.secondaryText',
          _focus: { boxShadow: 'none' },
        },
        subnav: {
          color: 'tog.link.600',
          mx: '4',
          fontSize: 'lg',
          fontWeight: 'medium',
        },
        linkNeighbourhoodButton: {
          color: 'tog.primary.500',
          fontSize: '14px',
          textAlign: 'left',
          border: 'none',
          bg: 'transparent',
          _active: { bg: 'white' },
          _hover: { bg: 'transpanent', color: 'tog.primary.600' },
        },
      },
    },
    Section: {
      baseStyle: {
        bg: 'tog.backgroundGray',
      },
      variants: {
        mobile: {
          py: 10,
          flexDirection: 'column',
        },
        desktop: {
          py: 20,
          flexDirection: 'row',
        },
        mobileSearch: {
          py: 0,
          flexDirection: 'column',
        },
        desktopSearch: {
          py: 0,
          flexDirection: 'row',
        },
        heroBanner: {
          py: 118,
          flexDirection: 'column',
        },
        searchLinks: {
          py: 20,
          flexDirection: 'column',
        },
      },
    },
    Badge: {
      baseStyle: {
        bg: 'tog.backgroundGray',
        fontSize: 'lg',
      },
      variants: {
        rounded: {
          borderRadius: 'full',
          ml: 2,
          px: 5,
          py: 3,
        },
        new: {
          borderRadius: 4,
          bg: 'white',
          border: '1px',
          borderColor: 'tog.divider',
          textTransform: 'capitalize',
          fontWeight: 'normal',
          fontSize: '12px',
          py: 1,
          px: 2,
          mr: 2,
        },
        sold: {
          borderRadius: 4,
          bg: 'gray.700',
          color: 'white',
          border: '1px',
          borderColor: 'gray.700',
          textTransform: 'capitalize',
          fontWeight: 'normal',
          fontSize: '12px',
          py: 1,
          px: 2,
          mr: 2,
        },
        date: {
          borderRadius: 4,
          bg: 'white',
          border: '1px',
          borderColor: 'tog.divider',
          textTransform: 'capitalize',
          fontWeight: 'normal',
          fontSize: '12px',
          py: 1,
          px: 2,
          mr: 2,
        },
        roundedSmall: {
          borderRadius: 'full',
          ml: 2,
          px: 3,
          py: 1,
        },
      },
    },
    Popover: {
      variants: {
        googleMapLocation: {
          popper: {
            maxWidth: 'unset',
            width: 'unset',
          },
        },
        filterPopover: {
          popper: {
            width: 'unset',
            maxWidth: 'unset',
            minW: '325px',
          },
        },
        filterTypePopover: {
          popper: {
            width: '200px',
            maxWidth: 'unset',
            minW: 'unset',
          },
        },
      },
    },
  },
})

export default theme
