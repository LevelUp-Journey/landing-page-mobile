"use client";

import { Bell, Code2, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
    const t = useTranslations();
    return (
        <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 transition-colors duration-500">
            {/* Header */}
            <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center max-w-6xl">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <Image
                            src="/cat-logo.svg"
                            alt="Level Up Journey"
                            width={28}
                            height={28}
                            className="transition-transform group-hover:scale-110"
                        />
                        <span className="font-bold text-base tracking-tight">
                            {t("nav.title")}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <LanguageSwitcher />
                        <Button
                            variant="ghost"
                            size="sm"
                            className="hidden sm:flex"
                        >
                            {t("nav.signIn")}
                        </Button>
                        <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                        >
                            {t("nav.register")}
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-muted/30 text-xs text-muted-foreground">
                        <Sparkles className="h-3 w-3" />
                        {t("hero.subtitle")}
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
                        {t("hero.title")}
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("hero.description")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                        <Button size="lg" className="text-base h-11">
                            {t("cta.primaryButton")}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-base h-11"
                        >
                            {t("cta.secondaryButton")}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <main className="container mx-auto px-6 max-w-6xl pb-20">
                <section className="space-y-12">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            {t("features.title")}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {t("features.subtitle")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Users className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold">
                                    {t("features.communities.name")}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {t("features.communities.description")}
                                </p>
                            </div>
                        </Card>

                        <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Bell className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold">
                                    {t("features.feed.name")}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {t("features.feed.description")}
                                </p>
                            </div>
                        </Card>
                    </div>
                </section>

                <section className="py-16 space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            {t("experience.title")}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Users className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">
                                    {t("experience.students.title")}
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                    <p className="text-sm text-muted-foreground">
                                        {t("experience.students.point1")}
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                    <p className="text-sm text-muted-foreground">
                                        {t("experience.students.point2")}
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                    <p className="text-sm text-muted-foreground">
                                        {t("experience.students.point3")}
                                    </p>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Code2 className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">
                                    {t("experience.teachers.title")}
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                    <p className="text-sm text-muted-foreground">
                                        {t("experience.teachers.point1")}
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                    <p className="text-sm text-muted-foreground">
                                        {t("experience.teachers.point2")}
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                    <p className="text-sm text-muted-foreground">
                                        {t("experience.teachers.point3")}
                                    </p>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 text-center">
                    <div className="max-w-2xl mx-auto space-y-6 px-6">
                        <h2 className="text-4xl sm:text-5xl font-bold">
                            {t("cta.title")}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            {t("cta.description")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                            <Button size="lg" className="text-base h-11">
                                {t("cta.primaryButton")}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-base h-11"
                            >
                                {t("cta.secondaryButton")}
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-border/40 bg-muted/20">
                <div className="container mx-auto px-6 py-8 max-w-6xl">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Code2 className="h-4 w-4" />
                            <span>{t("footer.copyright")}</span>
                        </div>
                        <span>{t("footer.tagline")}</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
