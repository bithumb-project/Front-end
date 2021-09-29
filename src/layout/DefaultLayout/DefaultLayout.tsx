import Headers from '../../components/Headers/Headers';
import TabMenu from '../../components/TabMenu/TabMenu';

type props = { children: React.ReactNode };

const DefaultLayout: React.FC<props> = ({ children }) => {
  return (
    <div>
      <TabMenu />
      <Headers />
      차트
      {children}
    </div>
  );
};

export default DefaultLayout;
