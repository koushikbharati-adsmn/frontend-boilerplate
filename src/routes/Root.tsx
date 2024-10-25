import { ThemeProvider } from '@/components/themes/ThemeProvider'

export default function Root() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <div className='text-warning'>Root</div>;
    </ThemeProvider>
  )
}
