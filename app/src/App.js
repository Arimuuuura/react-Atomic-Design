import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";

const user = {
  name: 'arimura',
  image: 'https://source.unsplash.com/7AIDE8PrvA0',
  email: 'abc@abc.com',
  tell: '080-1234-1234',
  company: {
    name: 'aaa株式会社',
  },
  website: 'https://google.com',
}

export const App = () => {
  return (
    <HeaderOnly>
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly>
  );
}
