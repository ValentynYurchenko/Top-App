import { useEffect, useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log(`Counter: ${counter}`);
    return function cleanup() {
      console.log('Unmount');
    };
  });

  useEffect(() => {
    console.log(`Mounted`);
  }, []);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>
      <Tag size="m">Тег</Tag>
      <Tag color="red">Тег</Tag>
      <Tag color="green">Тег</Tag>
      <Tag color="grey">Тег</Tag>
      <Tag size="m" color="grey">
        Тег
      </Tag>
      <Tag
        size="m"
        color="primary"
        href="https://www.instagram.com/valentynyurchenko/"
      >
        Ссылка
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
