"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();

    const switchLocale = (newLocale: string) => {
        if (newLocale === locale) return;
        router.push(`/${newLocale}`);
    };

    return (
        <div className="flex items-center gap-1 border rounded-lg p-1 bg-muted/30">
            <Button
                variant={locale === "es" ? "default" : "ghost"}
                size="sm"
                onClick={() => switchLocale("es")}
                className="h-7 px-2 text-xs"
            >
                ES
            </Button>
            <Button
                variant={locale === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => switchLocale("en")}
                className="h-7 px-2 text-xs"
            >
                EN
            </Button>
        </div>
    );
}
