import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'
import { configureReadme } from 'storybook-readme'

const theme = create()

addons.setConfig({
  panelPosition: 'bottom',
  theme,
})

configureReadme({
  StoryPreview: ({ children }) => (
    <div
      style={{
        margin: '15px 0',
        padding: '15px',
        border: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  ),
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
