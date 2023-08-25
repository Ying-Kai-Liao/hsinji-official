import localFont from 'next/font/local'

export const serifKorean = localFont({
    src: [
      {
        path: './Serif-Korean/extralight.otf',
        weight: '200',
        style: 'normal',
      },
      {
        path: './Serif-Korean/light.otf',
        weight: '300',
        style: 'normal',
      },
      {
        path: './Serif-Korean/regular.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: './Serif-Korean/medium.otf',
        weight: '500',
        style: 'normal',
      },
      {
        path: './Serif-Korean/semibold.otf',
        weight: '600',
        style: 'normal',
      },
      {
        path: './Serif-Korean/bold.otf',
        weight: '700',
        style: 'normal',
      },
      {
        path: './Serif-Korean/heavy.otf',
        weight: '900',
        style: 'normal',
      },
    ],
    display:'swap',
    variable: '--font-serif-korean',
  })
  
  export const sansKorean = localFont({
    src: [
      {
        path: './Sans-Korean/extralight.otf',
        weight: '200',
        style: 'normal',
      },
      {
        path: './Sans-Korean/light.otf',
        weight: '300',
        style: 'normal',
      },
      {
        path: './Sans-Korean/normal.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: './Sans-Korean/medium.otf',
        weight: '500',
        style: 'normal',
      },
      {
        path: './Sans-Korean/bold.otf',
        weight: '700',
        style: 'normal',
      },
      {
        path: './Sans-Korean/heavy.otf',
        weight: '900',
        style: 'normal',
      },
    ],
    display:'swap',
    variable: '--font-sans-korean',
  })
  