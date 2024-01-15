# YEONSUI

## 🏂 Getting-Started

### Installation

```
$ npm i @yeonsubaek/yeonsui
```

### Demo

Explore the UI through [Storybook](https://65a2410191d174e557802180-ohieifrhvn.chromatic.com)

## 🎨 Components

- [0. Theme](#theme)
- [1. Icon](#icon)
- [2. Button](#button)
- [3. TextField](#textfield)

### Theme

#### Usage

```tsx
return (
  <html>
    <body className="theme-light cyan"></body>
  </html>
)
```

#### Class

| Type                                                                                                         | Description                                                                                |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| default                                                                                                      | `theme-light`                                                                              |
| [color](https://65a2410191d174e557802180-ohieifrhvn.chromatic.com/?path=/story/foundation-colors--color-set) | `red` \| `volcano` \| `sunset` \| `polar` \| `cyan` \| `daybreak` \| `purple` \| `magenta` |

**Must apply both default and colour theme.**

### Icon

#### Usage

```tsx
import { Icon } from "@yeonsubaek/yeonsui"
```

```tsx
return <Icon icon="Star" />
```

#### Props

| Name  | Type                                                                                                                     | Desciption           |
| ----- | ------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| icon  | keyof typeof [icons](https://65a2410191d174e557802180-ohieifrhvn.chromatic.com/?path=/story/component-icon--icon-render) | **required**         |
| size  | `small` \| `medium` \| `large`                                                                                           | `medium`             |
| color | string                                                                                                                   | `--Font-Color-Title` |

### Button

#### Usage

```tsx
import { Button } from "@yeonsubaek/yeonsui"
```

```tsx
return (
  <Button variant="primary" size="small">
    Button Title
  </Button>
)
```

#### Props

| Name      | Type                                                                                                                     | Description  |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | ------------ |
| children  | keyof typeof [icons](https://65a2410191d174e557802180-ohieifrhvn.chromatic.com/?path=/story/component-icon--icon-render) | **required** |
| variant   | `primary` \| `secondary` \| `link` \| `text`                                                                             | `primary`    |
| size      | `small` \| `medium` \| `large`                                                                                           | `medium`     |
| disabled  | boolean                                                                                                                  | `false`      |
| startIcon | keyof typeof [icons](https://65a2410191d174e557802180-ohieifrhvn.chromatic.com/?path=/story/component-icon--icon-render) |              |
| endIcon   | keyof typeof [icons](https://65a2410191d174e557802180-ohieifrhvn.chromatic.com/?path=/story/component-icon--icon-render) |              |
| onClick   | `() => void`                                                                                                             |              |

### TextField

#### Usage

```tsx
import { TextField } from "@yeonsubaek/yeonsui"
```

```tsx
const [text, setText] = useState<string>("")

return (
  <TextField
    id="example-textfield"
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
)
```

#### Props

| Name        | Type                                                                                                                     | Description       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| id          | string                                                                                                                   | **required**      |
| value       | string                                                                                                                   | **required**      |
| onChange    | (e: ChangeEvent<HTMLInputElement>) => void                                                                               | **required**      |
| placeholder | string                                                                                                                   |                   |
| size        | `small` \| `medium` \| `large`                                                                                           | default: `medium` |
| disabled    | boolean                                                                                                                  | default: `false`  |
| suffix      | string                                                                                                                   |                   |
| icon        | keyof typeof [icons](https://65a2410191d174e557802180-ohieifrhvn.chromatic.com/?path=/story/component-icon--icon-render) |                   |
