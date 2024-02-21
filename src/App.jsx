import Navbar from "./layouts/Navbar";
import PageContainer from "./layouts/PageContainer";
import { MyRoutes } from "./routes/MyRoutes";

function App() {
  return (
    <>
      <Navbar />

      <PageContainer>
        <MyRoutes />
      </PageContainer>
    </>
  );
}

export default App;
