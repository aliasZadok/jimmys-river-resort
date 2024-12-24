import localFont from 'next/font/local'

export const caprasimo = localFont({
  src: '../public/fonts/Caprasimo-Regular.ttf',
  variable: '--font-caprasimo',
  display: 'swap',
})

export const nunitoSans = localFont({
  src: [
    {
      path: '../public/fonts/NunitoSans_7pt-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/NunitoSans_7pt-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-nunito-sans',
  display: 'swap',
})