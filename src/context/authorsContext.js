"use client"
import React, { createContext, useContext, useState } from "react";



const AuthorsContext = createContext();

export const AuthorsProvider = ({ children }) => {
    const [authors, setAuthors] = useState([
        {
            id: 1,
            name: "Jakob Gronberg",
            slug: "jakob-gronberg",
            job: "Artist",
            city: "Berlin",
            image: "/authors/author1.jpg",
        },
        {
            id: 2,
            name: "Louise Jensen",
            slug: "louise-jensen",
            job: "Artist",
            city: "Stockholm",
            image: "/authors/author2.jpg",
        },
        {
            id: 3,
            name: "Anne Henry",
            slug: "anne-henry",
            job: "Photograph",
            city: "New York",
            image: "/authors/author3.jpg",
        },
        {
            id: 4,
            name: "Anna Nielsen",
            slug: "anna-nielsen",
            job: "Columnist",
            city: "Copenhagen",
            image: "/authors/author4.jpg",
        },
        {
            id: 5,
            name: "Jane Cooper",
            slug: "jane-cooper",
            job: "Artist",
            city: "Berlin",
            image: "/authors/author5.jpg",
        },
        {
            id: 6,
            name: "Cristofer Vaccaro",
            slug: "cristofer-vaccaro",
            job: "Artist",
            city: "Lisabon",
            image: "/authors/author6.jpg",
        },
    ]);


    return (
        <AuthorsContext.Provider value={{authors}}>
            {children}
        </AuthorsContext.Provider>
    );
};

export const useAuthors = () => {
    const context = useContext(AuthorsContext);
    if (!context) {
        throw new Error("useAuthors must be used within an AuthorsProvider");
    }
    return context;
};

