type Region = {
  id: string;
  country: string;
  name: string;
};

type User = {
  username: string;
  thumbnail: string;
  id: string;
};

type Review = {
  id: string;
  content: string;
  rating: number;
  user: User;
  coffee: Coffee;
};

type Coffee = {
  id: string;
  name: string;
  reviews: Review[];
  region: Region;
};

const CoffeeShowPage = ({ coffee }: { coffee: Coffee }) => <p>hello</p>;

export default CoffeeShowPage;
