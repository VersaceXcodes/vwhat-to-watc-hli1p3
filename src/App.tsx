import React, { useEffect, Suspense } from '"'"'react'"'"';
import { BrowserRouter, Route, Routes } from '"'"'react-router-dom'"'"';
import { QueryClient, QueryClientProvider, QueryClientProviderProps } from '"'"'@tanstack/react-query'"'"';
import { ReactQueryDevtools } from '"'"'@tanstack/react-query-devtools'"'"';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Add your routes here */}
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
