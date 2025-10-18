"use client"

import { ArticlesProvider } from "./articlesContext"
import { AuthorsProvider } from "./authorsContext";
import { PodcastsProvider } from "./podcastsContext"

export default function Providers({ children }) {
    return (
        <ArticlesProvider>
            <PodcastsProvider>
                <AuthorsProvider>
                    {children}
                </AuthorsProvider>
            </PodcastsProvider>
        </ArticlesProvider>
    );
}