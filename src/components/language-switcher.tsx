"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/language-context";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={language === 'en' ? 'bg-slate-100' : ''}
          onClick={() => setLanguage('en')}
        >
          <span className="flex items-center">
            <span className="text-sm font-medium">
              {t("language.en")}
            </span>
            {language === 'en' && (
              <span className="ml-2 h-2 w-2 rounded-full bg-green-500"></span>
            )}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={language === 'id' ? 'bg-slate-100' : ''}
          onClick={() => setLanguage('id')}
        >
          <span className="flex items-center">
            <span className="text-sm font-medium">
              {t("language.id")}
            </span>
            {language === 'id' && (
              <span className="ml-2 h-2 w-2 rounded-full bg-green-500"></span>
            )}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}