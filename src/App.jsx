import { useState } from 'react';
import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/ui/ModeToggle';
import { Search, Loader2 } from 'lucide-react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import Card from './components/Card';
import { SkeletonCard } from './components/SkeletonCard';
import AlertView from './components/AlertView';

const API_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetchUser();
  }

  function handleOnClose() {
    setError(false);
  }

  const fetchUser = async () => {
    try {
      if (!username) {
        setError(true);
        throw new Error('Please enter a username');
      }
      setUser(null);
      setIsLoading(true);
      const response = await fetch(`${API_URL}${username}`);
      if (response.status !== 200) throw new Error('User not found');
      const userData = await response.json();
      setUser(userData);
      setError('');
      console.log(userData);
    } catch (e) {
      setError(e.message);
    }
    setUsername('');
    setIsLoading(false);
  };

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <main className='flex min-h-screen flex-col justify-start p-40 max-md:p-8'>
        <div className='w-full flex justify-between items-center mb-8'>
          <h1 className='text-3xl  flex-1'>devfinder</h1>
          <ModeToggle />
        </div>
        <div className='bg-slate-100 h-20 py-2 px-8 rounded-2xl overflow-hidden flex items-center gap-4 dark:bg-[#141c2f]'>
          <Search className='size-8 stroke-[#0079fe] ' />
          <form className='flex items-center flex-1'>
            <Input
              className='h-16 bg-transparent border-0 mr-2 text-xl max-sm:text-sm'
              placeholder='Search Github username...'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            {isLoading ? (
              <Button disabled>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Please wait
              </Button>
            ) : (
              <Button
                type='submit'
                className='bg-[#0079fe] text-white hover:bg-blue-500'
                onClick={handleSubmit}
              >
                Search
              </Button>
            )}
          </form>
        </div>
        {error && <AlertView message={error} onClose={handleOnClose} />}
        {isLoading && <SkeletonCard />}
        {user && <Card user={user} />}
      </main>
    </ThemeProvider>
  );
}

export default App;
