"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    // Detectar el idioma actual desde la URL usando useMemo
    const currentLocale = useMemo(() => {
        const segments = pathname.split("/").filter(Boolean);
        const detectedLocale =
            segments[0] === "en" || segments[0] === "es" ? segments[0] : "es";
        return detectedLocale;
    }, [pathname]);

    const switchLocale = (newLocale: string) => {
        if (newLocale === currentLocale) return;

        // Extraer los segmentos del pathname
        const segments = pathname.split("/").filter(Boolean);

        // Remover el locale actual si existe
        if (segments[0] === "es" || segments[0] === "en") {
            segments.shift();
        }

        // Construir la nueva ruta
        const newPath =
            segments.length > 0
                ? `/${newLocale}/${segments.join("/")}`
                : `/${newLocale}`;

        // Navegar a la nueva ruta
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-1 border rounded-lg p-1 bg-muted/30">
            <Button
                variant={currentLocale === "es" ? "default" : "ghost"}
                size="sm"
                onClick={() => switchLocale("es")}
                className="h-7 px-2 text-xs"
            >
                ES
            </Button>
            <Button
                variant={currentLocale === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => switchLocale("en")}
                className="h-7 px-2 text-xs"
            >
                EN
            </Button>
        </div>
    );
}
