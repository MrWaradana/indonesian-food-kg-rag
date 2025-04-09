"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  const { t } = useLanguage();
  
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-slate-800">
          {t("app.name")}
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-slate-600 hover:text-slate-900">
            {t("nav.home")}
          </Link>
          <Link href="/dashboard" className="text-slate-600 hover:text-slate-900">
            {t("nav.dashboard")}
          </Link>
          <Link href="/dashboard/knowledge-graph" className="text-slate-600 hover:text-slate-900">
            {t("nav.knowledge-graph")}
          </Link>
          <Link href="/dashboard/rag" className="text-slate-600 hover:text-slate-900">
            {t("nav.rag")}
          </Link>
          <LanguageSwitcher />
          <Button variant="outline" className="ml-2">
            <Link href="/dashboard">{t("nav.get-started")}</Link>
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/" className="w-full">{t("nav.home")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard" className="w-full">{t("nav.dashboard")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard/knowledge-graph" className="w-full">{t("nav.knowledge-graph")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard/rag" className="w-full">{t("nav.rag")}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}