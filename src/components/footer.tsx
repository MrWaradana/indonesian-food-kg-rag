"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white text-lg mb-4">
              {t("app.name")}
            </h3>
            <p className="text-sm">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("footer.quick-links")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  {t("nav.dashboard")}
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/knowledge-graph"
                  className="hover:text-white"
                >
                  {t("nav.knowledge-graph")}
                </Link>
              </li>
              <li>
                <Link href="/dashboard/rag" className="hover:text-white">
                  {t("nav.rag")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  {t("footer.documentation")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("footer.research-paper")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("footer.api-reference")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Email: research@indonesianfoodkg.com</li>
              <li>GitHub: github.com/username/indonesian-food-kg-rag</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-sm text-center">
          <p>{`${t(`footer.rights`)} ${currentYear}`}</p>
          <p className="mt-2">{t("footer.created-for")}</p>
        </div>
      </div>
    </footer>
  );
}
