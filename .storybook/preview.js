// export const decorators = [
//   (Story) => (
//     <MemoryRouter initialEntries={['/']}>
//       <Story />
//     </MemoryRouter>
//   ),
// ]
import 'tailwindcss/tailwind.css'
// import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark',
    darkClass: 'dark',
    stylePreview: true,
  },
}
