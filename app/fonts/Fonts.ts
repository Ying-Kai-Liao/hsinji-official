import localFont from 'next/font/local'

export const serifKorean = localFont({
    src: [
      {
        path: '@/app/fonts/Serif-Korean/extralight.otf',
        weight: '200',
        style: 'normal',
      },
      {
        path: '@/app/fonts/Serif-Korean/light.otf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '@/app/fonts/Serif-Korean/regular.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '@/app/fonts/Serif-Korean/medium.otf',
        weight: '500',
        style: 'normal',
      },
      {
        path: '@/app/fonts/Serif-Korean/semibold.otf',
        weight: '600',
        style: 'normal',
      },
      {
        path: '@/app/fonts/Serif-Korean/bold.otf',
        weight: '700',
        style: 'normal',
      },
      {
        path: '@/app/fonts/Serif-Korean/heavy.otf',
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
        path: '@/app/fonts/Sans-Korean/extralight.otf',
        weight: '200',
        style: 'normal',
      },
      {
        path: '@/app/fonts/Sans-Korean/light.otf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '@/app/fonts/Sans-Korean/normal.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '@/app/fonts/Sans-Korean/medium.otf',
        weight: '500',
        style: 'normal',
      },
      {
        path: '@/app/fonts/Sans-Korean/bold.otf',
        weight: '700',
        style: 'normal',
      },
      {
        path: '@/app/fonts/Sans-Korean/heavy.otf',
        weight: '900',
        style: 'normal',
      },
    ],
    display:'swap',
    variable: '--font-sans-korean',
  })
  