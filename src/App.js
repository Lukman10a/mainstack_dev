import DashBoard from "./Components/Dashboard/dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-sohne">
        <DashBoard />
      </div>
    </QueryClientProvider>
  );
}

export default App;
