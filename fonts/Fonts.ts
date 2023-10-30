import localFont from 'next/font/local'
import { Open_Sans, Montserrat} from 'next/font/google'

  export const sansKorean = localFont({
    src: [
      {
        path: './Sans-Korean/extralight.woff2',
        weight: '200',
        style: 'normal',
      },
      {
        path: './Sans-Korean/light.woff2',
        weight: '300',
        style: 'normal',
      },
      {
        path: './Sans-Korean/normal.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: './Sans-Korean/medium.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: './Sans-Korean/bold.woff2',
        weight: '700',
        style: 'normal',
      },
      {
        path: './Sans-Korean/heavy.woff2',
        weight: '900',
        style: 'normal',
      },
    ],
    display:'swap',
    variable: '--font-sans-korean',
  })
  