import { withLayout } from '../../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';

const firstCategory = 0;

function Courses({ menu }: CoursesProps): JSX.Element {
  return (
    <>
      {menu.map((m) => (
        <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
      ))}
    </>
  );
}

export default withLayout(Courses);

export const getStaticProps: GetStaticProps<CoursesProps> = async () => {
  try {
    const { data: menu } = await axios.get<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find'
    );
    return {
      props: {
        menu,
        firstCategory,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

interface CoursesProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
