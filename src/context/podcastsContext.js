"use client"
import React, { createContext, useContext, useState } from "react";



const PodcastsContext = createContext();

export const PodcastsProvider = ({ children }) => {
    const [podcasts, setPodcasts] = useState([
        {
            id: 1,
            episode: "EP 05",
            title: "The Problem of today’s cultural development",
            date: "January 21, 2022",
            duration: "45 Min",
            image: "/podcasts/podcast1.jpeg",
        },
        {
            id: 2,
            episode: "EP 04",
            title: "The hidden messages of Jack Nielson",
            date: "January 21, 2022",
            duration: "1 h 4 Min",
            image: "/podcasts/podcast2.jpeg",
        },
        {
            id: 3,
            episode: "EP 03",
            title: "Behind the scenes of the street art culture",
            date: "January 21, 2022",
            duration: "56 Min",
            image: "/podcasts/podcast3.jpeg",
        },
    ]);


    return (
        <PodcastsContext.Provider value={{ podcasts}}>
            {children}
        </PodcastsContext.Provider>
    );
};

export const usePodcasts = () => {
    const context = useContext(PodcastsContext);
    if (!context) {
        throw new Error("usePodcasts must be used within an ArticlesProvider");
    }
    return context;
};

