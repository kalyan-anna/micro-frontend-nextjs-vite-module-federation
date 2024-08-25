import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { SiteSideNav } from '../components/SiteSideNav';

export function App() {
  return (
    <div>
      <SiteHeader />
      <SiteSideNav activePath="/" />
      <SiteFooter />
    </div>
  );
}

export default App;
