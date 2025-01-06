interface CardProps {
  image: string;
  Button?: string;
  CardDescription: string;
  CardTitle: string;
  titleHref?: string;
  btnHref?: string;
}

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}