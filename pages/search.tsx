import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

const firstCategory = 0;

function Search(): JSX.Element {
  return <div>Search</div>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
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

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
