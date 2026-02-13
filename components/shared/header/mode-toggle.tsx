"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
  
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }
    
  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="outline"
    >
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </Button>
  );
}
