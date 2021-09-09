import { Router } from "./router/Router";

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
    <Router />
  );
}
