import localFont from 'next/font/local'

export const serifKorean = localFont({
    src: [
      {
        path: './Serif-Korean/SourceHanSerif.otf.woff2',
        weight: '200',
        style: 'normal',
      },
      {
        path: './Serif-Korean/SourceHanSerif.otf.woff2',
        weight: '300',
        style: 'normal',
      },
      {
        path: './Serif-Korean/SourceHanSerif.otf.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: './Serif-Korean/SourceHanSerif.otf.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: './Serif-Korean/SourceHanSerif.otf.woff2',
        weight: '600',
        style: 'normal',
      },
      {
        path: './Serif-Korean/SourceHanSerif.otf.woff2',
        weight: '700',
        style: 'normal',
      },
      {
        path: './Serif-Korean/SourceHanSerif.otf.woff2',
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
  