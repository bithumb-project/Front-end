import Headers from '../../components/Header/Header';

type props = { children: React.ReactNode };

const DefaultLayout: React.FC<props> = ({ children }) => {
  return (
    <div>
      <h2>layouxt</h2>
      <Headers />
      {children}
    </div>
  );
};

export default DefaultLayout;
