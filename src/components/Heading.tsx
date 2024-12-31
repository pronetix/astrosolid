import { Dynamic } from 'solid-js/web';

// Определяем тип для допустимых тегов
type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'div';

// Определяем пропсы компонента
interface HeadingProps {
  tag?: TagType;
  children?: any;
  align: String;
  role: String;
  customOptions: any;
}


const Heading = (props: HeadingProps) => {
  // Устанавливаем значение по умолчанию для `tag`
  const { tag = 'h1' } = props;

  // Объект с классами
  const classes: Record<TagType, string> = {
    h1: 'text-4xl md:text-5xl lg:text-6xl !leading-[1.1] font-semibold',
    h2: 'text-3xl lg:text-5xl !leading-[1.15] font-semibold',
    h3: 'text-xl lg:text-2xl font-medium',
    h4: 'text-lg font-medium',
    div: ''
  };

  const textAlign = () => {
    return props.align ? `text-${props.align}` : '';
  };

  return (
    <Dynamic component={tag} class={`${classes[tag]} ${textAlign()}`} style={{...props.customOptions?.styles}}>
      {props.children}
    </Dynamic>
  );
};

export default Heading;