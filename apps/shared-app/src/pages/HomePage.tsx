import { PageHeader } from '../components/PageHeader';
import { UnauthenticatedTemplate } from '../components/UnauthenticatedTemplate';

export const HomePage = () => {
  return (
    <UnauthenticatedTemplate activePath="/">
      <PageHeader>Home Page</PageHeader>
      <p>This is an example home page</p>
    </UnauthenticatedTemplate>
  );
};
