import { motion } from 'framer-motion';
import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthStore } from '../../lib/store';
import { useTheme } from '../theme-provider';
import { Button } from './button';
import { Sheet, SheetContent, SheetTrigger } from './sheet';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { isAuthenticated } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Submit Domain', href: '/submit' },
    { label: 'Guides', href: '/guides' },
    ...(isAuthenticated ? [{ label: 'Dashboard', href: '/admin' }] : []),
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">NS</span>
              </div>
            </motion.div>
            <motion.span
              className="font-bold text-xl hidden md:inline-block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Nameserver Generator
            </motion.span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="mr-2"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </Button>
          </motion.div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors hover:text-primary p-2 rounded-md ${
                        isActive
                          ? 'bg-muted text-primary'
                          : 'text-muted-foreground'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
