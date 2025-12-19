import { useEffect, useState } from "react"
import { Moon,Sun} from "lucide-react";
import { cn } from "../lib/utils";
function ThemeToggle()
{
    const [isDark,setDark] = useState(true)
     useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      setDark(false);
    }
  }, []);

  if (isDark === null) return null;
    function handleTheme()
    {
        if(isDark)
        {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme" ,"light");
            setDark(false);
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" ,"dark");
            setDark(true);
        }
    }
    return(
      <button onClick={handleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}>
        
        {isDark ? (<Sun className="h-6 w-6 text-yellow-300"/>) 
        : (<Moon className="h-6 w-6 text-blue-900"/>) }</button>
    );
}

export default ThemeToggle